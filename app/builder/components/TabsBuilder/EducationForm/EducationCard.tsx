"use client";

import { useState } from "react";
import { Trash2, Plus, X } from "lucide-react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EducationValues } from "../EducationForm";

interface EducationCardProps {
  index: number;
  form: UseFormReturn<EducationValues>;
  onRemove: (index: number) => void;
}

export function EducationCard({ index, form, onRemove }: EducationCardProps) {
  const [currentLogro, setCurrentLogro] = useState("");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `educaciones.${index}.logros` as const,
  });

  const handleAddLogro = () => {
    if (currentLogro.trim()) {
      append({ texto: currentLogro.trim() });
      setCurrentLogro("");
    }
  };

  return (
    <div className="p-5 bg-card rounded-lg border border-border">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-primary">
          Educación #{index + 1}
        </span>

        <button
          type="button"
          onClick={() => onRemove(index)}
          className="text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institución */}
        <FormField
          control={form.control}
          name={`educaciones.${index}.institucion`}
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-sm">Institución *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Universidad o centro de estudios"
                  className="dark:bg-input/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Grado / Título */}
        <FormField
          control={form.control}
          name={`educaciones.${index}.grado`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Grado / Título *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ingeniería en Informática"
                  className="dark:bg-input/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Ubicación */}
        <FormField
          control={form.control}
          name={`educaciones.${index}.ubicacion`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Ubicación</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ciudad, País"
                  className="dark:bg-input/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fecha Inicio */}
        <FormField
          control={form.control}
          name={`educaciones.${index}.fecha_inicio`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Fecha Inicio *</FormLabel>
              <FormControl>
                <Input {...field} type="month" className="dark:bg-input/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fecha Fin */}
        <FormField
          control={form.control}
          name={`educaciones.${index}.fecha_fin`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Fecha Fin *</FormLabel>
              <FormControl>
                <Input {...field} type="month" className="dark:bg-input/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Logros Académicos */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-foreground">Logros</label>
          <div className="mt-1.5 flex gap-2">
            <Input
              value={currentLogro}
              onChange={(e) => setCurrentLogro(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddLogro();
                }
              }}
              placeholder="Añadir un logro (ej: Promedio sobresaliente)"
              className="dark:bg-input/30"
            />
            <button
              type="button"
              onClick={handleAddLogro}
              className="inline-flex items-center justify-center border border-input px-3 rounded-md hover:bg-accent h-9 transition-colors"
            >
              <Plus className="size-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {fields.map((logro, lIndex) => (
              <div
                key={logro.id}
                className="flex items-center justify-between bg-muted/40 dark:bg-input/20 px-3 py-2 rounded-md border border-border"
              >
                <span className="text-sm">{logro.texto}</span>
                <button
                  type="button"
                  onClick={() => remove(lIndex)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
