export interface Medico {
  id: string;
  nombre: string;
  especialidad: string;
  sociedades?: string;
  iniciales: string;
  imagen?: string;
  formacion: string[];
  dias: string;
  horario: string;
  servicios: string[];
}

export const medicosData: Medico[] = [
  {
    id: "dr-adrian-teran-cardoza",
    nombre: "Dr. Adrián Terán Cardoza",
    especialidad: "Coloproctología & Cirugía General",
    sociedades: "MSVC, MSVCP, ISUCRS",
    iniciales: "AT",
    imagen: "/DR_AdrianTeran.jpg",
    formacion: [
      "Médico Cirujano – Universidad Rómulo Gallegos – Venezuela",
      "Cirujano General – Universidad Central de Venezuela – Venezuela",
      "Coloproctólogo – Hospital Domingo Luciani, IVSS – Venezuela",
      "Master en Coloproctología – Hospital de Braga, Portugal"
    ],
    dias: "Lunes a Viernes",
    horario: "Previa Cita",
    servicios: [
      "Consulta Especializada en Coloproctología",
      "Consulta de Cirugía General & Pared Abdominal",
      "Rectosigmoidoscopia Rígida y Flexible",
      "Manometría Anorrectal de Alta Resolución",
      "Ultrasonido Endoanal y Endorrectal 360º",
      "Cirugía Menor (Hemorroides, Fisuras, Plicomas, Condilomas)",
      "Valoración Quirúrgica (Pared Abdominal, Vesícula Biliar, Hernias & Apéndice)",
      "Cirugía de Piso Pélvico (Prolapsos de Órganos Pélvicos)",
      "Endoscopia Digestiva Inferior o Colonoscopia"
    ]
  },
  {
    id: "dra-paulette-teran",
    nombre: "Dra. Paulette Terán",
    especialidad: "Gastroenterología & Medicina Interna",
    iniciales: "PT",
    imagen: "/DRA_PauletteTeran.jpg",
    formacion: [
      "Médico Cirujano – Universidad Rómulo Gallegos – Venezuela",
      "Medicina Interna – Universidad Central de Venezuela, Hospital Miguel Pérez Carreño",
      "Gastroenterólogo – Universidad Central de Venezuela – Hospital Domingo Luciani"
    ],
    dias: "Lunes a Viernes",
    horario: "Previa Cita",
    servicios: [
      "Consulta Especializada en Gastroenterología",
      "Consulta de Medicina Interna",
      "Endoscopia Digestiva Superior o Gastroscopia",
      "Endoscopia Digestiva Inferior o Colonoscopia",
      "Consulta Hepatológica y Vías Biliares (Hígado Graso, Cirrosis)",
      "Test de Aire Espirado (Descarte de SIBO / Intolerancias)",
      "Estudios de Tránsito Colónico",
      "Ecografía Integral (Abdominal y Pélvica)"
    ]
  },
  {
    id: "dra-maria-eugenia-guerrero",
    nombre: "Dra. Maria Eugenia Guerrero",
    especialidad: "Gastroenterología Pediátrica & Puericultura",
    sociedades: "SVPP, SVG, SOVED, LASPGHAN",
    iniciales: "MG",
    imagen: "/DRA_MariaEugeniaGuerrero.jpg",
    formacion: [
      "Médico Cirujano – Universidad de Carabobo – Venezuela",
      "Pediatra y Puericultor – Universidad Central de Venezuela, Hospital de Niños JM de los Ríos",
      "Gastroenterología Pediátrica – Universidad Central de Venezuela, Hospital de Niños JM de los Ríos",
      "Diplomado en Trastornos del Espectro Autista"
    ],
    dias: "Lunes a Sábado",
    horario: "Previa Cita",
    servicios: [
      "Consulta de Gastroenterología Pediátrica",
      "Consulta de Pediatría y Puericultura General",
      "Endoscopia Digestiva Superior Pediátrica",
      "Colonoscopia Pediátrica",
      "Abordaje Digestivo en Trastornos del Espectro Autista (TEA)",
      "Evaluación de Alergias Alimentarias, Reflujo y Estreñimiento Infantil"
    ]
  }
];
