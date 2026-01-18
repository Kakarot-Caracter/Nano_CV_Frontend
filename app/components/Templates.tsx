import TemplateCard, { Template } from "./Templates/TemplateCard";

const TEMPLATES: Template[] = [
  {
    id: "modern",
    title: "Modern",
    description: "Diseño limpio y contemporáneo",
    gradient: "linear-gradient(135deg, #6366f1 0%, #f1f5f9 50%, #1e293b 100%)",
    colors: ["#6366f1", "#f1f5f9", "#1e293b"],
  },
  {
    id: "base",
    title: "Base",
    description: "Clásico y profesional",
    gradient: "linear-gradient(135deg, #0f172a 0%, #ffffff 50%, #64748b 100%)",
    colors: ["#0f172a", "#ffffff", "#64748b"],
  },
  {
    id: "dark",
    title: "Dark",
    description: "Elegante tema oscuro",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #38bdf8 100%)",
    colors: ["#0f172a", "#1e293b", "#38bdf8"],
  },
];

export default function TemplatePage() {
  return (
    <section className="py-20 px-6 bg-muted/30 w-full" id="templates">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Elige tu plantilla
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tres diseños profesionales para destacar tu perfil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TEMPLATES.map((item) => (
            <TemplateCard key={item.id} template={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
