import { FileText, Settings, Download } from "lucide-react";

const stepsData = [
  {
    id: "01",
    title: "Ingresa tu información",
    description:
      "Completa los campos con tus datos personales, experiencia, educación y habilidades.",
    icon: <FileText className="w-10 h-10 text-blue-700" />,
  },
  {
    id: "02",
    title: "Personaliza el diseño",
    description:
      "Elige entre nuestras plantillas profesionales y ajusta los colores a tu gusto.",
    icon: <Settings className="w-10 h-10 text-blue-700" />,
  },
  {
    id: "03",
    title: "Descarga tu CV",
    description:
      "Exporta tu currículum en formato PDF o HTML listo para enviar.",
    icon: <Download className="w-10 h-10 text-blue-700" />,
  },
];

export default function HowToWork() {
  return (
    <section id="how-to-work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cómo funciona
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para crear tu CV profesional
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div key={step.id} className="relative">
              {index < stepsData.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border"></div>
              )}
              <div className="text-center">
                <div className="relative inline-flex">
                  {/* bg-blue-100 para el fondo del icono */}
                  <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* bg-blue-700 para el círculo del número */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
