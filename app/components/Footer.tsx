import Link from "next/link";
import { FileText, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2.5 bg-blue-700 rounded-xl group-hover:scale-105 ">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xl font-semibold">NanoCV</span>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Características
            </Link>
            <Link
              href="#templates"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Plantillas
            </Link>
            <a
              href="https://github.com/Kakarot-Caracter/Fast_Nano_CV_Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              Motor
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Basado en Fast Nano CV Engine
          </p>
        </div>
      </div>
    </footer>
  );
}
