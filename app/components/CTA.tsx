import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Comienza a crear tu CV hoy
        </h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          No necesitas registro. Empieza ahora y descarga tu CV profesional en
          minutos.
        </p>

        <Button variant={"primary"} className="mt-5">
          <Link href="/builder" className="flex items-center">
            Crear mi CV gratis
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
