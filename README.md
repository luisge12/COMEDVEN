# COMEDVEN - Centro de Especialidades Digestivas

Portal médico institucional moderno desarrollado con **Next.js (App Router), React 19, TypeScript y CSS modular sin backend**, optimizado para velocidad, conversión y posicionamiento SEO.

---

## 🚀 Cómo Ejecutar el Proyecto en Local

Para ver la web en tu navegador en tiempo real:

1. Abre la terminal en esta carpeta (`c:\Users\luisg\OneDrive\Desktop\Centro de Especialidades Digestivas\Nueva carpeta`).
2. Ejecuta el servidor de desarrollo de Next.js:

```powershell
npm run dev
```

3. Abre tu navegador e ingresa a:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Estructura del Proyecto

```plaintext
├── public/                       # Recursos estáticos públicos (imágenes, logos, iconos)
├── src/
│   ├── app/                      # Next.js App Router (Rutas y Páginas)
│   │   ├── layout.tsx            # Header global, botón flotante de WhatsApp y footer
│   │   ├── globals.css           # Sistema de diseño, variables CSS y tipografías
│   │   ├── page.tsx              # Landing Page / Inicio (conversión, servicios, equipo, preview)
│   │   ├── nosotros/page.tsx     # Acerca de nosotros, misión, visión y actividades académicas
│   │   ├── equipo-medico/page.tsx # Directorio del cuerpo facultativo con horarios y credenciales
│   │   ├── servicios/page.tsx    # Catálogo de estudios endoscópicos y procedimientos clínicos
│   │   ├── citas/page.tsx        # Módulo 3: Agendamiento interactivo y pasarela de pagos
│   │   ├── contacto/page.tsx     # Ubicación física, horarios y formulario directo a WhatsApp
│   │   ├── directorio/           # Módulo 2: Directorio de Enfermedades Digestivas
│   │   │   ├── page.tsx          # Catálogo con funcionalidad de Vista Dual interactiva
│   │   │   └── [slug]/page.tsx   # Ficha clínica completa (paciente vs. personal de salud)
│   │   └── blog/                 # Módulo 4: Blog Médico & Estrategia SEO
│   │       ├── page.tsx          # Índice de artículos informativos
│   │       └── [slug]/page.tsx   # Lectura de artículo con metadatos OpenGraph para Google
│   │
│   ├── components/               # Componentes React reutilizables
│   │   ├── Navbar.tsx            # Navegación fija con selector de sección activa
│   │   ├── Footer.tsx            # Pie de página institucional con año dinámico
│   │   ├── WhatsAppFloat.tsx     # Botón flotante de contacto directo
│   │   ├── DualViewCard.tsx      # Switch interactivo Paciente vs. Personal Médico
│   │   ├── AppointmentForm.tsx   # Selector de citas, fecha, hora, doctor y pago
│   │   └── SponsorBanners.tsx    # Módulo 5: Banners para hasta 3 marcas comerciales
│   │
│   └── data/                     # Capa de datos desacoplada en TypeScript (Sin Backend)
│       ├── enfermedades.ts       # Contenido médico segmentado por tipo de audiencia
│       ├── medicos.ts            # Información y horarios de especialistas
│       ├── articulos.ts          # Artículos y palabras clave del blog SEO
│       └── banners.ts            # Configuración de patrocinantes comerciales
│
├── package.json                  # Scripts y dependencias (Next.js 16, React 19, TypeScript)
├── tsconfig.json                 # Configuración de TypeScript
└── next.config.ts                # Configuración de Next.js
```

---

## 💎 Módulos Integrados del Proyecto

1. **Portal Institucional & Landing Page (`/`):** Hero section con llamados a la acción, presentación del centro, servicios destacados y cuerpo médico.
2. **Directorio con Vista Dual (`/directorio`):** Permite cambiar con un solo clic entre lenguaje comprensible para pacientes y criterios de diagnóstico técnico para profesionales de la salud.
3. **Agendamiento y Pagos (`/citas`):** Interfaz interactiva donde el paciente selecciona especialidad, turno y modalidad de pago, generando la orden preformateada.
4. **Blog Médico SEO (`/blog`):** Artículos indexables por Google con metadatos estructurados (`generateMetadata`).
5. **Zonas Publicitarias (`SponsorBanners`):** Espacio preparado para integrar hasta 3 marcas comerciales del sector salud/farmacéutico.
