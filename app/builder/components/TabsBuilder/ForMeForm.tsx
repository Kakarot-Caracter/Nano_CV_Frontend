"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useCvStore } from "@/app/stores/useCvStore";

const summarySchema = z.object({
  sobre_mi: z.string().min(1, "El resumen es requerido"),
});

type SummaryValues = z.infer<typeof summarySchema>;

export default function FormMeForm() {
  const updateData = useCvStore((state) => state.updateData);
  const initialValue = useCvStore((state) => state.payload.data.sobre_mi);

  const form = useForm<SummaryValues>({
    resolver: zodResolver(summarySchema),
    mode: "onChange",
    defaultValues: { sobre_mi: initialValue || "" },
  });

  const { watch, handleSubmit } = form;

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit((data) => {
        updateData("sobre_mi", data.sobre_mi);
      })();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, updateData]);

  return (
    <Form {...form}>
      <form className="space-y-6 text-left">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-1">Sobre Mí</h2>
          <p className="text-muted-foreground text-sm">
            Un breve resumen de tu perfil profesional
          </p>
        </div>

        <FormField
          control={form.control}
          name="sobre_mi"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 font-medium text-foreground text-sm">
                Resumen Profesional
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Profesional con X años de experiencia en... Especializado en... Apasionado por..."
                  className="min-h-[200px] resize-none bg-transparent dark:bg-input/30 focus-visible:ring-[3px] border-input"
                />
              </FormControl>
              <p className="text-xs text-muted-foreground mt-2">
                Tip: Destaca tus principales fortalezas, años de experiencia y
                lo que te hace único como profesional.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
