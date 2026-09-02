export interface Medico {
  id: string;
  nombre: string;
  especialidad: string;
  subespecialidad: string;
  registro: string;
  colegio: string;
  iniciales: string;
  horario: string;
  dias: string;
  biografia: string;
  destacados: string[];
}

export const medicosData: Medico[] = [
  {
    id: "dr-alejandro-morales",
    nombre: "Dr. Alejandro Morales",
    especialidad: "Gastroenterología & Endoscopia Digestiva",
    subespecialidad: "Endoscopia Terapéutica Avanzada y Colonoscopia",
    registro: "MPPS: 84920",
    colegio: "Col. Médico: 4921",
    iniciales: "AM",
    horario: "8:00 AM - 1:00 PM",
    dias: "Lunes, Miércoles y Viernes",
    biografia: "Especialista con más de 16 años de trayectoria clínica en centros hospitalarios de referencia. Experto en polipectomías complejas, hemostasia endoscópica y manejo de lesiones mucosas premalignas.",
    destacados: [
      "Certificado en Resección Mucosa Endoscópica (EMR)",
      "Miembro de la Sociedad Venezolana de Gastroenterología",
      "Profesor universitario en técnicas de diagnóstico digestivo"
    ]
  },
  {
    id: "dra-mariana-castillo",
    nombre: "Dra. Mariana Castillo",
    especialidad: "Hepatología Clínica & Trastornos Digestivos",
    subespecialidad: "Motilidad Gastrointestinal y Eje Intestino-Cerebro",
    registro: "MPPS: 92831",
    colegio: "Col. Médico: 5120",
    iniciales: "MC",
    horario: "1:30 PM - 5:30 PM",
    dias: "Martes, Jueves y Sábados",
    biografia: "Dedicada al diagnóstico integral de afecciones hepáticas metabólicas, hepatitis virales, sobrecrecimiento bacteriano (SIBO) y patologías funcionales del tubo digestivo.",
    destacados: [
      "Especialista en pruebas funcionales de hidrógeno espirado",
      "Evaluación y estratificación de fibrosis hepática con elastografía",
      "Investigadora en nutrición clínica y microbiota intestinal"
    ]
  },
  {
    id: "dr-carlos-gutierrez",
    nombre: "Dr. Carlos Gutiérrez",
    especialidad: "Cirugía Digestiva & Vía Biliar",
    subespecialidad: "Laparoscopia Digestiva Mínimamente Invasiva",
    registro: "MPPS: 77412",
    colegio: "Col. Médico: 3980",
    iniciales: "CG",
    horario: "9:00 AM - 2:00 PM",
    dias: "Lunes a Jueves",
    biografia: "Cirujano especialista en procedimientos de vesícula biliar, reflujo gastroesofágico resistente (funduplicatura) y patología herniaria de la pared abdominal.",
    destacados: [
      "Especialista en colecistectomía laparoscópica ambulatoria",
      "Abordaje mínimamente invasivo con rápida recuperación postoperatoria",
      "Más de 2,000 intervenciones quirúrgicas exitosas"
    ]
  }
];
