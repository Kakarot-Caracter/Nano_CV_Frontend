"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex md:justify-around md:ml-0 ml-2 items-center w-full  h-16 sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2.5 bg-blue-700 rounded-xl group-hover:scale-105 ">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold ">NanoCV</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8 ">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Caracteristicas
          </a>
          <a
            href="#templates"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Plantillas
          </a>
          <a
            href="#how-to-work"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Como funciona
          </a>
        </nav>
      </div>

      <div className="hidden md:block">
        <Button variant={"primary"}>
          <Link href={"/builder"}>Crear CV gratis</Link>
        </Button>
      </div>
    </header>
  );
}
