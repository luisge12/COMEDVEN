export interface Medico {
  id: string;
  nombre: string;
  categoriaTitulo: string;
  especialidad: string;
  sociedades?: string;
  iniciales: string;
  formacion: string[];
  dias: string;
  horario: string;
}

export const medicosData: Medico[] = [
  {
    id: "dr-adrian-teran-cardoza",
    nombre: "Dr. Adrián Terán Cardoza",
    categoriaTitulo: "NUESTROS COLOPROCTÓLOGOS",
    especialidad: "Coloproctología & Cirugía General",
    sociedades: "MSVC, MSVCP, ISUCRS",
    iniciales: "AT",
    formacion: [
      "Médico Cirujano – Universidad Rómulo Gallegos – Venezuela",
      "Cirujano General – Universidad Central de Venezuela – Venezuela",
      "Coloproctólogo – Hospital Domingo Luciani, IVSS – Venezuela",
      "Master en Coloproctología – Hospital de Braga, Portugal"
    ],
    dias: "Lunes a Viernes",
    horario: "Previa Cita"
  },
  {
    id: "dra-paulette-teran",
    nombre: "Dra. Paulette Terán",
    categoriaTitulo: "NUESTRAS GASTROENTERÓLOGOS",
    especialidad: "Gastroenterología & Medicina Interna",
    iniciales: "PT",
    formacion: [
      "Médico Cirujano – Universidad Rómulo Gallegos – Venezuela",
      "Medicina Interna – Universidad Central de Venezuela, Hospital Miguel Pérez Carreño",
      "Gastroenterólogo – Universidad Central de Venezuela – Hospital Domingo Luciani"
    ],
    dias: "Lunes a Viernes",
    horario: "Previa Cita"
  },
  {
    id: "dra-maria-eugenia-guerrero",
    nombre: "Dra. Maria Eugenia Guerrero",
    categoriaTitulo: "NUESTRAS GASTROENTERÓLOGOS PEDIATRAS",
    especialidad: "Gastroenterología Pediátrica & Puericultura",
    sociedades: "SVPP, SVG, SOVED, LASPGHAN",
    iniciales: "MG",
    formacion: [
      "Médico Cirujano – Universidad de Carabobo – Venezuela",
      "Pediatra y Puericultor – Universidad Central de Venezuela, Hospital de Niños JM de los Ríos",
      "Gastroenterología Pediátrica – Universidad Central de Venezuela, Hospital de Niños JM de los Ríos",
      "Diplomado en Trastornos del Espectro Autista"
    ],
    dias: "Lunes a Sábado",
    horario: "Previa Cita"
  },
  {
    id: "dra-zerimar-fernandez",
    nombre: "Dra. Zerimar Fernández",
    categoriaTitulo: "NUESTRA NUTRICIONISTA ESPECIALISTA EN SALUD DIGESTIVA",
    especialidad: "Nutrición Clínica & Salud Digestiva",
    iniciales: "ZF",
    formacion: [
      "Nutrición y Dietética – Universidad Rómulo Gallegos – Venezuela",
      "Nutrición Clínica – Universidad Central de Venezuela, Hospital Clínico Universitario",
      "Gastroenterología – Universidad Central de Venezuela – Hospital Domingo Luciani",
      "Especialista en Estreñimiento Funcional"
    ],
    dias: "Lunes a Viernes",
    horario: "Previa Cita"
  }
];
