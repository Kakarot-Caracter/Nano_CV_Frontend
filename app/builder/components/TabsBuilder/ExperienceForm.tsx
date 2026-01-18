"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { ExperienceCard } from "./ExperienceForm/ExperienceCard";
import { useCvStore } from "@/app/stores/useCvStore";
import { Button } from "@/components/ui/button";

const experienceSchema = z.object({
  experiencias: z.array(
    z.object({
      empresa: z.string().min(1, "La empresa es requerida"),
      puesto: z.string().min(1, "El puesto es requerido"),
      fecha_inicio: z.string().min(1, "La fecha es requerida"),
      fecha_fin: z.string(),
      descripcion: z.string(),
      logros: z.array(z.object({ texto: z.string() })),
    }),
  ),
});

export type ExperienceValues = z.infer<typeof experienceSchema>;

export default function WorkExperienceForm() {
  const updateData = useCvStore((s) => s.updateData);
  const storeExp = useCvStore((s) => s.payload.data.experiencia);

  const form = useForm<ExperienceValues>({
    resolver: zodResolver(experienceSchema),
    mode: "onChange",
    values: {
      experiencias: storeExp.map((exp) => ({
        empresa: exp.empresa || "",
        puesto: exp.puesto || "",
        fecha_inicio: exp.inicio || "",
        fecha_fin: exp.fin || "",
        descripcion: exp.descripcion || "",
        logros: exp.logros.map((l) => ({ texto: l })),
      })),
    },
  });

  const { control, watch, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiencias",
  });

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit((data) => {
        const formattedExp = data.experiencias.map((exp) => ({
          empresa: exp.empresa,
          puesto: exp.puesto,
          inicio: exp.fecha_inicio,
          fin: exp.fecha_fin,
          descripcion: exp.descripcion,
          logros: exp.logros.map((l) => l.texto),
        }));

        updateData("experiencia", formattedExp);
      })();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, updateData]);

  const addExperience = () => {
    append({
      empresa: "",
      puesto: "",
      fecha_inicio: "",
      fecha_fin: "",
      descripcion: "",
      logros: [],
    });
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
              Experiencia Laboral
            </h2>
            <p className="text-muted-foreground text-sm">
              Añade tu historial de trabajo
            </p>
          </div>
          <Button type="button" variant={"primary"} onClick={addExperience}>
            <Plus className="size-4" />
            Añadir
          </Button>
        </div>

        {fields.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">No hay experiencia añadida</p>
            <button
              type="button"
              onClick={addExperience}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border border-input shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 h-8 rounded-md px-3 gap-1.5 mt-4"
            >
              <Plus className="size-4" />
              Añadir Experiencia
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {fields.map((field, index) => (
              <ExperienceCard
                key={field.id}
                index={index}
                form={form}
                onRemove={remove}
              />
            ))}
          </div>
        )}
      </form>
    </Form>
  );
}
