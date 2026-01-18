"use client";

import Link from "next/link";
import { Download, FileText, ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCvStore } from "@/app/stores/useCvStore";

const options = [
  { label: "Base", value: "base" },
  { label: "Modern", value: "modern" },
  { label: "Dark", value: "dark" },
];

export default function Header() {
  const [isExporting, setIsExporting] = useState(false);

  const template = useCvStore((s) => s.payload.template);
  const updatePayload = useCvStore((s) => s.updatePayload);
  const fullPayload = useCvStore((s) => s.payload);

  console.log(fullPayload);

  const handleExport = async () => {
    try {
      setIsExporting(true);

      const response = await fetch(
        "http://localhost:3001/pdf-engine/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullPayload),
        },
      );

      if (!response.ok) throw new Error("Error al generar PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fullPayload.filename || "CV"}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <header className="h-14 md:h-16 border-b border-border bg-card px-3 md:px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" asChild className="md:hidden">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>

        <Button variant="ghost" asChild className="hidden md:flex gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </Button>

        <div className="w-px h-6 bg-border hidden md:block"></div>

        <div className="flex items-center gap-2">
          <div className="p-2.5 bg-blue-700 rounded-xl">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-foreground text-sm md:text-base">
            NanoCV
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Select
          value={template}
          onValueChange={(val) => updatePayload({ template: val })}
        >
          <SelectTrigger className="w-24 md:w-40 h-9 bg-transparent border-input">
            <SelectValue placeholder="Template" />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          size="icon"
          className="md:hidden"
          onClick={handleExport}
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
        </Button>

        <Button
          className="hidden md:flex gap-2 h-9 px-4"
          variant="primary"
          onClick={handleExport}
          disabled={isExporting}
        >
          {isExporting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generando...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Exportar PDF
            </>
          )}
        </Button>
      </div>
    </header>
  );
}
