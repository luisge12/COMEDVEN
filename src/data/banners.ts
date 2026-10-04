/**
 * ============================================================================
 * GUÍA DE ADMINISTRACIÓN DE PATROCINADORES Y MARCAS ALIADAS
 * ============================================================================
 * 
 * Este archivo centraliza la gestión de patrocinadores publicitarios del portal.
 * 
 * ----------------------------------------------------------------------------
 * 1. ¿CÓMO AGREGAR UN NUEVO PATROCINADOR?
 * ----------------------------------------------------------------------------
 * Copia la siguiente plantilla y pégala dentro del arreglo `sponsorBannersData`:
 * 
 *   {
 *     id: "nombre-unico-sin-espacios",
 *     marca: "Nombre Oficial de la Marca / Laboratorio",
 *     descripcion: "Breve descripción clínica o comercial de 1 a 2 oraciones.",
 *     enlace: "https://sitio-web-del-patrocinante.com",
 *     tagline: "Eslogan o frase distintiva entre comillas.",
 *     badge: "Marca Comercial Patrocinante", // o "Tecnología Médica Aliada", "Suplemento Clínico", etc.
 *     imagen: "/sponsor_nombre_archivo.jpg", // Coloca la imagen en la carpeta /public
 *     activo: true, // true para mostrar en la web, false para ocultar
 *     orden: 1 // Opcional: menor número aparece primero
 *   },
 * 
 * ----------------------------------------------------------------------------
 * 2. ¿CÓMO DESACTIVAR / PAUSAR UN PATROCINADOR (SIN BORRARLO)?
 * ----------------------------------------------------------------------------
 * Simplemente cambia su propiedad `activo` a `false`:
 * 
 *     activo: false
 * 
 * De este modo, la marca ya no aparecerá en el sitio web, pero conservarás
 * sus datos, imagen y enlaces guardados para cuando vuelva a renovar contrato.
 * 
 * ----------------------------------------------------------------------------
 * 3. ¿CÓMO ELIMINAR DEFINITIVAMENTE A UN PATROCINADOR?
 * ----------------------------------------------------------------------------
 * Borra el bloque `{ ... }` correspondiente de la lista `sponsorBannersData`.
 * 
 * ----------------------------------------------------------------------------
 * 4. ¿QUÉ OCURRE SI NO HAY NINGÚN PATROCINADOR ACTIVO O LA LISTA ESTÁ VACÍA?
 * ----------------------------------------------------------------------------
 * La página web detecta automáticamente la ausencia de patrocinadores y muestra
 * un banner profesional de captación publicitaria ("Aquí puedes promocionar tu marca
 * con nosotros") con botones de contacto directo a WhatsApp y correo corporativo.
 * ============================================================================
 */

export interface SponsorBanner {
  /** Identificador único (ej: "patrocinante-1", "laboratorio-bayer") */
  id: string;
  /** Nombre comercial de la empresa, laboratorio o producto */
  marca: string;
  /** Descripción del producto o servicio (1-2 oraciones claras y concisas) */
  descripcion: string;
  /** Enlace a la página web o catálogo oficial (con https://) */
  enlace: string;
  /** Frase, eslogan o lema corporativo */
  tagline: string;
  /** Categoría que aparecerá en la insignia superior */
  badge: string;
  /** Ruta a la imagen alojada en la carpeta /public (opcional) */
  imagen?: string;
  /** Interruptor: true = visible en el sitio, false = pausado/oculto */
  activo: boolean;
  /** Orden de prioridad opcional (menor número = primero) */
  orden?: number;
  /** Notas administrativas internas (fechas de contrato, contacto, etc.) */
  notasAdmin?: string;
}

/**
 * Canales oficiales para recepción de propuestas comerciales y solicitudes de patrocinio
 */
export const SPONSOR_CONTACT_INFO = {
  telefono: "0412-7542400",
  whatsappNumber: "584127542400",
  whatsappMessage: "Hola, me comunico desde el portal web del Centro de Especialidades Digestivas. Deseo información sobre las opciones y tarifas disponibles para promocionar mi marca o producto de salud.",
  email: "comedven@gmail.com",
  emailSecundario: "info.comedven@gmail.com",
  asuntoEmail: "Propuesta de Patrocinio Comercial / Alianza de Marca - tuendoscopia.com.ve"
};

/**
 * LISTADO OFICIAL DE PATROCINADORES
 * Para agregar o retirar patrocinadores, modifica los elementos de esta lista.
 */
export const sponsorBannersData: SponsorBanner[] = [
  {
    id: "patrocinante-1",
    marca: "Laboratorios Farmacéuticos Alianza",
    descripcion: "Líderes en formulaciones digestivas avanzadas y protectores de mucosa gástrica de última generación.",
    enlace: "https://alianzafarmaceutica.ejemplo.com",
    tagline: "Innovación farmacológica al servicio de la gastroenterología.",
    badge: "Marca Comercial Patrocinante",
    imagen: "/sponsor_laboratorio.jpg",
    activo: true,
    orden: 1,
    notasAdmin: "Contrato activo anual"
  },
  {
    id: "patrocinante-2",
    marca: "Probióticos DigestCare Plus",
    descripcion: "Cepas probióticas microencapsuladas de alta viabilidad clínica para la restauración del microbioma intestinal.",
    enlace: "https://digestcareplus.ejemplo.com",
    tagline: "Equilibrio digestivo y bienestar integral con evidencia científica.",
    badge: "Suplemento Clínico Patrocinante",
    imagen: "/sponsor_probioticos_vertical.jpg",
    activo: true,
    orden: 2,
    notasAdmin: "Campaña semestral"
  },
  {
    id: "patrocinante-3",
    marca: "Tecnología Médica Olympus EndoTech",
    descripcion: "Sistemas de videoendoscopia de ultra alta resolución (4K/NBI) equipando nuestras salas de procedimientos.",
    enlace: "https://olympusendotech.ejemplo.com",
    tagline: "Precisión óptica insuperable en diagnóstico y terapéutica endoscópica.",
    badge: "Tecnología Médica Aliada",
    imagen: "/sponsor_olympus.jpg",
    activo: true,
    orden: 3,
    notasAdmin: "Convenio tecnológico institucional"
  }
];

/**
 * Obtiene únicamente los patrocinadores activos ordenados por prioridad
 */
export function getActiveSponsors(limit = 3): SponsorBanner[] {
  return sponsorBannersData
    .filter(banner => banner.activo)
    .sort((a, b) => (a.orden ?? 999) - (b.orden ?? 999))
    .slice(0, limit);
}
