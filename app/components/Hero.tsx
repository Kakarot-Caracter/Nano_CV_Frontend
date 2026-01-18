import { Button } from "@/components/ui/button";
import { ArrowRight, WandSparkles } from "lucide-react";
import Link from "next/link";
import ExampleCard from "./Hero/ExampleCard";

export default function Hero() {
  return (
    <section className="px-4 py-10 md:py-20">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <div className="flex gap-3 bg-blue-100 p-1 px-3 rounded-2xl items-center">
          <WandSparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-800" />
          <p className="text-blue-800 text-sm md:text-base font-medium">
            Motor ultrarrápido en Rust
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
          Crea tu CV profesional en{" "}
          <span className="text-blue-600">minutos</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-neutral-500">
          Nano CV te permite crear curriculums modernos y elegantes de forma
          simple. Define tu información y genera un CV listo para impresionar.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
        <Button
          variant={"primary"}
          size={"lg"}
          asChild
          className="w-full sm:w-auto"
        >
          <Link href={"/builder"}>
            Comenzar ahora <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        <Button variant={"secondary"} size={"lg"} className="w-full sm:w-auto">
          <a href={"#templates"}>Ver plantillas</a>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 min-[425px]:gap-0 text-center mt-16">
        <div className="flex-1 min-w-[100px]">
          <p className="text-2xl md:text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Plantillas
          </p>
        </div>

        <div className="flex-1 min-w-[100px] border-x-0 min-[425px]:border-x border-gray-200 px-2  md:px-16">
          <p className="text-2xl md:text-3xl font-bold">PDF</p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Exportación
          </p>
        </div>

        <div className="flex-1 min-w-[100px]">
          <p className="text-2xl md:text-3xl font-bold">100%</p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Open Source
          </p>
        </div>
      </div>

      <ExampleCard />
    </section>
  );
}
