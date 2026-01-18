"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useCvStore } from "@/app/stores/useCvStore";

const personalDataSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  titulo: z.string().min(2, "El título es obligatorio"),
  correo: z.string().optional(),
  telefono: z.string().optional(),
  ubicacion: z.string().optional(),
  web: z.string().url("URL inválida").optional().or(z.literal("")),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

type PersonalDataValues = z.infer<typeof personalDataSchema>;

export default function PersonalDataForm() {
  const updateData = useCvStore((state) => state.updateData);
  const initialValues = useCvStore((state) => state.payload.data.personal);
  const data = useCvStore((state) => state.payload.data);
  console.log(data);

  const form = useForm<PersonalDataValues>({
    resolver: zodResolver(personalDataSchema),
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: initialValues,
  });

  const { watch, handleSubmit } = form;

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit((data) => {
        updateData("personal", data);
      })();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, updateData]);

  return (
    <Form {...form}>
      <form className="text-left space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-1">
            Datos Personales
          </h2>
          <p className="text-muted-foreground text-sm">
            Información básica (se guarda automáticamente)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo *</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan García López" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título Profesional *</FormLabel>
                  <FormControl>
                    <Input placeholder="Desarrollador Full Stack" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Email *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="juan@ejemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> Teléfono
                </FormLabel>
                <FormControl>
                  <Input placeholder="+34 612 345 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ubicacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Ubicación
                </FormLabel>
                <FormControl>
                  <Input placeholder="Madrid, España" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="web"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" /> Sitio Web
                </FormLabel>
                <FormControl>
                  <Input placeholder="tuportfolio.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </FormLabel>
                <FormControl>
                  <Input placeholder="linkedin.com/in/juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </FormLabel>
                <FormControl>
                  <Input placeholder="github.com/juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
