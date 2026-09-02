export interface SponsorBanner {
  id: string;
  marca: string;
  descripcion: string;
  enlace: string;
  tagline: string;
  badge: string;
  activo: boolean;
}

export const sponsorBannersData: SponsorBanner[] = [
  {
    id: "patrocinante-1",
    marca: "Laboratorios Farmacéuticos Alianza",
    descripcion: "Líderes en formulaciones digestivas avanzadas y protectores de mucosa gástrica de última generación.",
    enlace: "https://alianzafarmaceutica.ejemplo.com",
    tagline: "Innovación farmacológica al servicio de la gastroenterología.",
    badge: "Marca Comercial Patrocinante",
    activo: true
  },
  {
    id: "patrocinante-2",
    marca: "Probióticos DigestCare Plus",
    descripcion: "Cepas probióticas microencapsuladas de alta viabilidad clínica para la restauración del microbioma intestinal.",
    enlace: "https://digestcareplus.ejemplo.com",
    tagline: "Equilibrio digestivo y bienestar integral con evidencia científica.",
    badge: "Suplemento Clínico Patrocinante",
    activo: true
  },
  {
    id: "patrocinante-3",
    marca: "Tecnología Médica Olympus EndoTech",
    descripcion: "Sistemas de videoendoscopia de ultra alta resolución (4K/NBI) equipando nuestras salas de procedimientos.",
    enlace: "https://olympusendotech.ejemplo.com",
    tagline: "Precisión óptica insuperable en diagnóstico y terapéutica endoscópica.",
    badge: "Tecnología Médica Aliada",
    activo: true
  }
];
