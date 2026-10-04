import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'citas.json');

export interface CitaGuardada {
  id: string;
  fechaCreacion: string;
  nombre: string;
  cedula: string;
  telefono: string;
  medico: string;
  servicio: string;
  fechaDeseada: string;
  turno: string;
  metodoPago: string;
  motivo: string;
  estado: 'Pendiente' | 'Confirmada' | 'Atendida' | 'Cancelada';
  notasInternas?: string;
}

async function leerCitas(): Promise<CitaGuardada[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    // Si no existe, inicializar vacío
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    return [];
  }
}

async function guardarCitas(citas: CitaGuardada[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(citas, null, 2), 'utf-8');
}

// GET: Obtener todas las citas
export async function GET() {
  try {
    const citas = await leerCitas();
    return NextResponse.json(citas);
  } catch (error) {
    return NextResponse.json({ error: 'Error al leer citas', details: String(error) }, { status: 500 });
  }
}

// POST: Registrar una nueva cita desde el formulario
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const nuevaCita: CitaGuardada = {
      id: `cita-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      fechaCreacion: new Date().toISOString(),
      nombre: body.nombre || 'Sin nombre',
      cedula: body.cedula || 'Sin cédula',
      telefono: body.telefono || '',
      medico: body.medico || 'Cualquier especialista disponible',
      servicio: body.servicio || 'Consulta General',
      fechaDeseada: body.fecha || body.fechaDeseada || 'Por coordinar',
      turno: body.turno || 'Mañana',
      metodoPago: body.metodoPago || 'No especificado',
      motivo: body.motivo || 'Consulta preventiva',
      estado: 'Pendiente',
      notasInternas: ''
    };

    const citas = await leerCitas();
    // Guardar al inicio para que aparezca primero
    citas.unshift(nuevaCita);
    await guardarCitas(citas);

    return NextResponse.json({ success: true, cita: nuevaCita }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al registrar la cita', details: String(error) }, { status: 500 });
  }
}

// PATCH: Actualizar estado o notas internas de una cita
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, estado, notasInternas } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID de cita requerido' }, { status: 400 });
    }

    const citas = await leerCitas();
    const index = citas.findIndex(c => c.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    if (estado !== undefined) {
      citas[index].estado = estado;
    }
    if (notasInternas !== undefined) {
      citas[index].notasInternas = notasInternas;
    }

    await guardarCitas(citas);
    return NextResponse.json({ success: true, cita: citas[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar la cita', details: String(error) }, { status: 500 });
  }
}

// DELETE: Eliminar una cita
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID de cita requerido' }, { status: 400 });
    }

    const citas = await leerCitas();
    const citasFiltradas = citas.filter(c => c.id !== id);

    if (citas.length === citasFiltradas.length) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    await guardarCitas(citasFiltradas);
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar la cita', details: String(error) }, { status: 500 });
  }
}
