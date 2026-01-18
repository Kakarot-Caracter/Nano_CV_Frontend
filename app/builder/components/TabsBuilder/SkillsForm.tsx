"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useCvStore } from "@/app/stores/useCvStore";
import { SkillsCard } from "./SkillsForm/SkillsCard";

const habilidadesSchema = z.object({
  habilidades: z.array(
    z.object({
      categoria: z.string().min(1, "La categoría es requerida"),
      items: z.string().min(1, "Las habilidades son requeridas"),
    }),
  ),
});

export type SkillsValues = z.infer<typeof habilidadesSchema>;

export default function SkillsForm() {
  // Asumiendo que en tu store existe data.habilidades
  const storeSkills = useCvStore((s) => s.payload.data.habilidades || []);

  const form = useForm<SkillsValues>({
    resolver: zodResolver(habilidadesSchema),
    mode: "onChange",
    values: {
      habilidades: storeSkills.map((h) => ({
        categoria: h.categoria || "",
        items: h.items || "",
      })),
    },
  });

  const { control, watch } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "habilidades",
  });

  // Sincronización con el store (Zustand)
  useEffect(() => {
    const subscription = watch((value) => {
      if (!value.habilidades) return;

      const updatedSkills = value.habilidades.map((h) => ({
        categoria: h?.categoria || "",
        items: h?.items || "",
      }));

      if (JSON.stringify(updatedSkills) !== JSON.stringify(storeSkills)) {
        useCvStore.setState((state) => ({
          payload: {
            ...state.payload,
            data: { ...state.payload.data, habilidades: updatedSkills },
          },
        }));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, storeSkills]);

  const addHabilidad = () => {
    append({ categoria: "", items: "" });
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 text-left"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">
              Habilidades
            </h2>
            <p className="text-muted-foreground text-sm">
              Tus competencias técnicas y herramientas
            </p>
          </div>
          <Button type="button" variant="primary" onClick={addHabilidad}>
            <Plus className="size-4" />
            Añadir
          </Button>
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <SkillsCard
              key={field.id}
              index={index}
              form={form}
              onRemove={remove}
            />
          ))}
        </div>

        {fields.length > 0 && (
          <p className="text-xs text-muted-foreground mt-4">
            Tip: Agrupa tus habilidades por categoría. Ejemplo: "Lenguajes" -
            "JavaScript, TypeScript, Python"
          </p>
        )}

        {fields.length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">
              No has añadido habilidades todavía
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={addHabilidad}
              className="mt-4"
            >
              <Plus className="size-4 mr-2" />
              Añadir Categoría
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
