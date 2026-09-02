export interface Enfermedad {
  id: string;
  nombre: string;
  categoria: string;
  publicoGeneral: {
    resumen: string;
    sintomas: string[];
    recomendaciones: string;
    cuandoConsultar: string;
  };
  personalSalud: {
    fisiopatologia: string;
    criteriosDiagnosticos: string;
    manejoTerapeutico: string;
    perlasClinicas: string;
  };
}

export const enfermedadesData: Enfermedad[] = [
  {
    id: "reflujo-gastroesofagico",
    nombre: "Enfermedad por Reflujo Gastroesofágico (ERGE)",
    categoria: "Esofágicas",
    publicoGeneral: {
      resumen: "Ocurre cuando el contenido ácido del estómago regresa de forma repetida hacia el esófago, irritando el tejido interno y provocando ardor detrás del pecho.",
      sintomas: [
        "Sensación de quemazón en el pecho (acidez o pirosis)",
        "Regurgitación de líquidos ácidos o restos de comida",
        "Sensación de nudo o dificultad para deglutir",
        "Tos seca nocturna o carraspera persistente"
      ],
      recomendaciones: "Cenar al menos 2-3 horas antes de acostarse, elevar la cabecera de la cama 15 cm y evitar café, chocolates, grasas y bebidas carbonatadas.",
      cuandoConsultar: "Si presentas acidez más de 2 veces por semana, dolor al tragar o pérdida de peso involuntaria."
    },
    personalSalud: {
      fisiopatologia: "Disfunción de la barrera antirreflujo en la unión esofagogástrica. Involucra relajaciones transitorias del EEI (esfínter esofágico inferior), hipotonía basal, hernia hiatal y retraso en el vaciamiento gástrico.",
      criteriosDiagnosticos: "Clasificación de Lyon 2.0. Diagnóstico concluyente con esofagitis erosiva Los Ángeles grados C/D, estenosis péptica, esófago de Barrett confirmado histológicamente o pHmetría con tiempo de exposición ácida (AET) > 6%.",
      manejoTerapeutico: "Inhibidores de Bomba de Protones (IBP) o Bloqueadores de Ácido Competitivos de Potasio (P-CABs). Procinéticos adyuvantes. En casos refractarios, evaluación quirúrgica para Funduplicatura Laparoscópica de Nissen o Toupet.",
      perlasClinicas: "La presencia de síntomas atípicos (tos, asma, laringitis) responde con menor tasa de éxito al tratamiento médico que los síntomas cardinales (pirosis y regurgitación)."
    }
  },
  {
    id: "sindrome-intestino-irritable",
    nombre: "Síndrome de Intestino Irritable (SII)",
    categoria: "Intestinales",
    publicoGeneral: {
      resumen: "Es un trastorno digestivo muy común que afecta el intestino grueso. Se manifiesta con dolores o cólicos abdominales, gases y alteraciones entre diarrea y estreñimiento.",
      sintomas: [
        "Dolor o cólicos abdominales que suelen aliviarse tras evacuar",
        "Sensación de distensión y vientre hinchado",
        "Cambios en la frecuencia o textura de las heces",
        "Urgencia repentina para ir al baño"
      ],
      recomendaciones: "Seguir un plan nutricional bajo en carbohidratos fermentables (FODMAPs), realizar actividad física regular y mantener técnicas de relajación.",
      cuandoConsultar: "Si el dolor despierta durante la noche, observas sangrado en heces o tienes antecedentes familiares de enfermedad inflamatoria intestinal."
    },
    personalSalud: {
      fisiopatologia: "Trastorno de la interacción intestino-cerebro (DGBI). Combina hipersensibilidad visceral, motilidad colónica desregulada, microinflamación mucosal de bajo grado, disbiosis intestinal y permeabilidad aumentada.",
      criteriosDiagnosticos: "Criterios Roma IV: Dolor abdominal recurrente, al menos 1 día por semana en los últimos 3 meses, asociado a dos o más de: relación con la defecación, cambio en frecuencia de deposiciones y cambio en forma de las heces.",
      manejoTerapeutico: "Subtipo dependiente: antiespasmódicos (bromuro de otilonio / pinaverio), aceite de menta, rifaximina (SII-D), linaclotida o prucaloprida (SII-C), probióticos específicos y neuromoduladores a dosis bajas (amitriptilina).",
      perlasClinicas: "Obligatorio descartar enfermedad celíaca mediante anticuerpos anti-transglutaminasa IgA y cuantificación de calprotectina fecal antes de catalogar como SII funcional puro."
    }
  },
  {
    id: "higado-graso-metabolico",
    nombre: "Hígado Graso No Alcohólico (MASLD)",
    categoria: "Hepáticas",
    publicoGeneral: {
      resumen: "Es la acumulación excesiva de grasa en las células del hígado no atribuible al consumo de alcohol. Con frecuencia está vinculado a sobrepeso, diabetes y colesterol elevado.",
      sintomas: [
        "Generalmente es asintomático en fases tempranas",
        "Fatiga o cansancio persistente",
        "Molestia o pesadez en el cuadrante superior derecho del abdomen"
      ],
      recomendaciones: "Adopción de dieta mediterránea, pérdida gradual del 7% al 10% del peso corporal y ejercicio aeróbico regular.",
      cuandoConsultar: "Al presentar ecografía con infiltración grasa o transaminasas elevadas en chequeos de rutina."
    },
    personalSalud: {
      fisiopatologia: "Esteatosis hepática metabólica. Resistencia a la insulina, lipotoxicidad, sobrecarga mitocondrial y estrés oxidativo hepatocitario que conducen a inflamación (MASH) y posterior fibrogénesis.",
      criteriosDiagnosticos: "Evidencia de esteatosis hepática por imagen (ecografía / elastografía FibroScan) o biopsia, con al menos un factor de riesgo cardiometabólico. Estratificación no invasiva con score FIB-4.",
      manejoTerapeutico: "Pérdida ponderal controlada, optimización metabólica con agonistas de GLP-1 (semaglutida), inhibidores de SGLT2, vitamina E en no diabéticos y resmetirom según disponibilidad.",
      perlasClinicas: "La elastografía de transición (FibroScan) es fundamental para detectar fibrosis avanzada asintomática F3-F4."
    }
  }
];
