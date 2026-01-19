"use client";

import { Trash2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { SkillsValues } from "../SkillsForm";

interface SkillsCardProps {
  index: number;
  form: UseFormReturn<SkillsValues>;
  onRemove: (index: number) => void;
}

export function SkillsCard({ index, form, onRemove }: SkillsCardProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Categoría */}
        <FormField
          control={form.control}
          name={`habilidades.${index}.categoria`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Categoría</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ej: Lenguajes, Frameworks..."
                  className="dark:bg-input/30 mt-1.5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Habilidades (Items) */}
        <FormField
          control={form.control}
          name={`habilidades.${index}.items`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Habilidades</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ej: JavaScript, Python, React..."
                  className="dark:bg-input/30 mt-1.5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Botón Eliminar */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onRemove(index)}
        className="text-destructive hover:text-destructive hover:bg-destructive/10 mt-6"
      >
        <Trash2 className="size-4" />
      </Button>
    </div>
  );
}
