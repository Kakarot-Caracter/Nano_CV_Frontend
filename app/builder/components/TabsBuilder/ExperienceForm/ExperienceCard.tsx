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
import { Textarea } from "@/components/ui/textarea";
import { ExperienceValues } from "../ExperienceForm";

interface ExperienceCardProps {
  index: number;
  form: UseFormReturn<ExperienceValues>;
  onRemove: (index: number) => void;
}

export function ExperienceCard({ index, form, onRemove }: ExperienceCardProps) {
  const [currentLogro, setCurrentLogro] = useState("");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `experiencias.${index}.logros` as const,
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
          Experiencia #{index + 1}
        </span>
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="inline-flex items-center justify-center h-8 w-8 rounded-md text-destructive hover:bg-destructive/10 transition-colors"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={`experiencias.${index}.empresa`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Empresa *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Nombre de la empresa"
                  className="dark:bg-input/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`experiencias.${index}.puesto`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Puesto *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Tu cargo"
                  className="dark:bg-input/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`experiencias.${index}.fecha_inicio`}
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

        <FormField
          control={form.control}
          name={`experiencias.${index}.fecha_fin`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Fecha Fin</FormLabel>
              <FormControl>
                <Input {...field} type="month" className="dark:bg-input/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`experiencias.${index}.descripcion`}
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-sm">Descripción</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Describe tus responsabilidades..."
                  className="min-h-[80px] resize-none dark:bg-input/30 mt-1.5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
              placeholder="Añadir un logro..."
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
