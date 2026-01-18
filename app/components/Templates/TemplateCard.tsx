export interface Template {
  id: string;
  title: string;
  description: string;
  gradient: string;
  colors: string[];
}

export interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group text-left bg-card border border-border rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
      <div className="aspect-[3/4] bg-muted rounded-lg mb-4 overflow-hidden relative">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{ background: template.gradient }}
        />

        <div className="absolute inset-4 bg-card/90 rounded-lg p-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-muted mb-3"></div>
          <div className="h-3 w-24 bg-muted rounded mb-2"></div>
          <div className="h-2 w-16 bg-muted/60 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-muted rounded"></div>
            <div className="h-2 w-3/4 bg-muted rounded"></div>
            <div className="h-2 w-5/6 bg-muted rounded"></div>
          </div>
        </div>
      </div>

      <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
        {template.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {template.description}
      </p>

      <div className="flex gap-2 mt-4">
        {template.colors.map((color) => (
          <div
            key={color}
            className="w-5 h-5 rounded-full border border-border shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
