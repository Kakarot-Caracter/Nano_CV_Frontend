"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import { useCvStore } from "@/app/stores/useCvStore";
import { EducationCard } from "./EducationForm/EducationCard";
import { Button } from "@/components/ui/button";

const educationSchema = z.object({
  educaciones: z.array(
    z.object({
      institucion: z.string().min(1),
      grado: z.string().min(1),
      ubicacion: z.string().optional(),
      fecha_inicio: z.string().min(1),
      fecha_fin: z.string().min(1),
      logros: z.array(z.object({ texto: z.string() })),
    }),
  ),
});

export type EducationValues = z.infer<typeof educationSchema>;

export default function EducationForm() {
  const updateData = useCvStore((s) => s.updateData);
  const educacionStore = useCvStore((s) => s.payload.data.educacion);

  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    mode: "onChange",
    values: {
      educaciones: educacionStore.map((edu) => ({
        institucion: edu.institucion,
        grado: edu.grado,
        ubicacion: edu.ubicacion || "",
        fecha_inicio: edu.inicio,
        fecha_fin: edu.fin,
        logros: edu.logros.map((l) => ({ texto: l })),
      })),
    },
  });

  const { control, watch, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educaciones",
  });

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit((data) => {
        const formattedEdu = data.educaciones.map((edu) => ({
          institucion: edu.institucion,
          grado: edu.grado,
          ubicacion: edu.ubicacion,
          inicio: edu.fecha_inicio,
          fin: edu.fecha_fin,
          logros: edu.logros.map((l) => l.texto),
        }));

        updateData("educacion", formattedEdu);
      })();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, updateData]);

  const handleAdd = () => {
    append({
      institucion: "",
      grado: "",
      fecha_inicio: "",
      fecha_fin: "",
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
            <h2 className="text-xl font-bold mb-1">Educación</h2>
            <p className="text-muted-foreground text-sm">
              Añade tu educación más reciente primero.
            </p>
          </div>

          <Button type="button" variant={"primary"} onClick={handleAdd}>
            <Plus className="size-4" />
            Añadir
          </Button>
        </div>

        {fields.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">No hay educación añadida</p>
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border border-input shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 h-8 rounded-md px-3 gap-1.5 mt-4"
            >
              <Plus className="size-4" />
              Añadir Educación
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {fields.map((field, index) => (
              <EducationCard
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
