export interface ArticuloBlog {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  autor: string;
  fecha: string;
  tiempoLectura: string;
  contenido: string[];
  tags: string[];
}

export const articulosData: ArticuloBlog[] = [
  {
    slug: "5-senales-alerta-dolor-abdominal",
    titulo: "5 Señales de alerta en el dolor abdominal que no debes ignorar",
    resumen: "Aprende a diferenciar una molestia digestiva pasajera de un cuadro que requiere valoración gastroenterológica inmediata.",
    categoria: "Prevención & Síntomas",
    autor: "Dr. Alejandro Morales",
    fecha: "18 de Agosto, 2026",
    tiempoLectura: "4 min de lectura",
    tags: ["Dolor abdominal", "Síntomas de alarma", "Gastroenterología"],
    contenido: [
      "El dolor abdominal es uno de los motivos de consulta médica más frecuentes en el mundo. Si bien en muchas ocasiones obedece a indigestiones transitorias o estrés, existen signos clínicos conocidos como banderas rojas que ameritan atención inmediata.",
      "1. Dolor agudo de inicio súbito e intensidad creciente que no cede en reposo.",
      "2. Presencia de fiebre persistente superior a 38°C acompañada de escalofríos.",
      "3. Vómitos repetitivos con imposibilidad para tolerar líquidos o alimentos por más de 12 horas.",
      "4. Deposiciones de color oscuro (melena) o presencia visible de sangre.",
      "5. Pérdida de peso involuntaria y acelerada sin cambios en la dieta.",
      "Ante cualquiera de estos síntomas, acudir oportunamente a un centro especializado previene complicaciones graves como apendicitis aguda, colecistitis o hemorragias digestivas."
    ]
  },
  {
    slug: "cuando-realizarse-colonoscopia-preventiva",
    titulo: "¿Cuándo y por qué realizarte una colonoscopia preventiva?",
    resumen: "La colonoscopia no solo diagnostica anomalías, sino que previene eficazmente el cáncer colorrectal mediante la extirpación a tiempo de pólipos.",
    categoria: "Procedimientos & Diagnóstico",
    autor: "Equipo Médico Centro Digestivo",
    fecha: "05 de Agosto, 2026",
    tiempoLectura: "5 min de lectura",
    tags: ["Colonoscopia", "Prevención de Cáncer", "Pólipos"],
    contenido: [
      "El cáncer colorrectal es uno de los pocos cánceres que puede prevenirse casi en su totalidad cuando se detecta en etapa de pólipo precanceroso.",
      "Las guías internacionales de gastroenterología recomiendan iniciar el cribado de rutina a partir de los 45 años en personas sin antecedentes familiares, y a edades más tempranas si existen factores genéticos de primer grado.",
      "Gracias a las técnicas actuales de sedación consciente y endoscopios de alta definición, el procedimiento es cómodo, indoloro y ambulatorio.",
      "Durante la exploración, si el especialista detecta un pólipo, lo reseca de forma inmediata (polipectomía), deteniendo en seco el potencial desarrollo de una neoplasia maligna."
    ]
  },
  {
    slug: "sibo-que-es-y-como-se-diagnostica",
    titulo: "Sobrecrecimiento bacteriano (SIBO): Causas, síntomas y prueba de aliento",
    resumen: "¿Sientes el abdomen inflamado al terminar cada comida? Conoce cómo el test de hidrógeno y metano identifica el desbalance microbiano en el intestino delgado.",
    categoria: "Motilidad & Nutrición",
    autor: "Dra. Mariana Castillo",
    fecha: "22 de Julio, 2026",
    tiempoLectura: "6 min de lectura",
    tags: ["SIBO", "Test de aliento", "Microbiota", "Inflamación"],
    contenido: [
      "El SIBO (Small Intestinal Bacterial Overgrowth) se produce cuando bacterias que habitualmente residen en el colon proliferan en cantidades anormales en el intestino delgado.",
      "Los pacientes afectados suelen experimentar distensión marcada, eructos excesivos, intolerancias repentinas a múltiples alimentos y diarrea o estreñimiento rebelde.",
      "El diagnóstico de certeza se realiza mediante el Test de Aire Espirado con lactulosa o glucosa, un procedimiento no invasivo que mide las concentraciones de hidrógeno y metano producidas por las bacterias.",
      "El tratamiento combina antibióticos lumínicos no absorbibles como la rifaximina con pautas dietéticas de transición guiadas por especialistas."
    ]
  }
];
