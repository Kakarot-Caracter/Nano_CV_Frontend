import { FileOutput, Palette, Shield, Zap } from "lucide-react";
import FeatureCard from "./Features/FeaturesCard";

export default function Features() {
  const FEATURES = [
    {
      title: "Motor Ultra-rápido",
      description:
        "Desarrollado en Rust para garantizar una generación instantánea de documentos sin esperas.",
      icon: Zap,
    },
    {
      title: "Exportación sencilla",
      description:
        "Obtén tu CV en PDF de alta calidad con un solo clic, manteniendo siempre un diseño profesional.",
      icon: FileOutput,
    },
    {
      title: "Plantillas elegantes",
      description:
        "Incluye temas Base, Modern y Dark, diseñados para adaptarse a cualquier estilo y sector laboral.",
      icon: Palette,
    },
    {
      title: "Privacidad total",
      description:
        "Tu información no sale de tu navegador. Garantizamos seguridad total sin almacenar tus datos.",
      icon: Shield,
    },
  ];

  return (
    <section
      className="px-4 py-16 md:py-24  mx-auto bg-gray-50 w-full"
      id="features"
    >
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl text-foreground">
          Todo lo que necesitas
        </h2>
        <p className="text-base md:text-lg max-w-xl text-muted-foreground">
          Herramienta potente para crear el CV perfecto, fácil de usar y
          personalizable.
        </p>
      </div>

      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 max-w-6xl mx-auto gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
