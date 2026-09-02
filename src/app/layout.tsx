import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Centro de Especialidades Digestivas | Gastroenterología & Endoscopia',
  description: 'Centro médico especializado en gastroenterología, endoscopia digestiva de alta resolución, hepatología y cirugía del aparato digestivo. Citas y directorio médico.',
  keywords: ['gastroenterología', 'endoscopia', 'colonoscopia', 'reflujo', 'SIBO', 'hígado graso', 'citas médicas digestivas'],
  openGraph: {
    title: 'Centro de Especialidades Digestivas',
    description: 'Atención médica integral en gastroenterología y endoscopia diagnóstica y terapéutica.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
