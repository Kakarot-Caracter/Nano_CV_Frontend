import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Personal {
  nombre: string;
  titulo: string;
  telefono?: string;
  correo: string;
  ubicacion?: string;
  web?: string;
  linkedin?: string;
  github?: string;
}

interface Experiencia {
  empresa: string;
  puesto: string;
  inicio: string;
  fin: string;
  descripcion?: string;
  logros: string[];
}

interface Educacion {
  institucion: string;
  grado: string;
  inicio: string;
  fin: string;
  ubicacion?: string;
  logros: string[];
}

interface CvData {
  personal: Personal;
  sobre_mi?: string;
  experiencia: Experiencia[];
  educacion: Educacion[];
  habilidades: Record<string, string>[];
  extra?: Record<string, any>;
}

interface CvPayload {
  template: string;
  filename: string;
  data: CvData;
}

interface CvState {
  payload: CvPayload;

  updateData: <K extends keyof CvData>(
    section: K,
    value: Partial<CvData[K]> | CvData[K],
  ) => void;

  updatePayload: (fields: Partial<Omit<CvPayload, "data">>) => void;

  addItem: (section: "experiencia" | "educacion" | "habilidades") => void;
  removeItem: (
    section: "experiencia" | "educacion" | "habilidades",
    index: number,
  ) => void;
}

const initialData: CvData = {
  personal: { nombre: "", titulo: "", correo: "", telefono: "", ubicacion: "" },
  sobre_mi: "",
  experiencia: [],
  educacion: [],
  habilidades: [],
};

export const useCvStore = create<CvState>()(
  immer((set) => ({
    payload: {
      template: "modern",
      filename: "Mi_CV",
      data: initialData,
    },

    updateData: (section, value) =>
      set((state) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          state.payload.data[section] = {
            ...(state.payload.data[section] as object),
            ...(value as object),
          } as any;
        } else {
          state.payload.data[section] = value as any;
        }
      }),

    updatePayload: (fields) =>
      set((state) => {
        Object.assign(state.payload, fields);
      }),

    addItem: (section) =>
      set((state) => {
        const templates = {
          experiencia: {
            empresa: "",
            puesto: "",
            inicio: "",
            fin: "",
            logros: [],
          },
          educacion: {
            institucion: "",
            grado: "",
            inicio: "",
            fin: "",
            logros: [],
          },
          habilidades: { "": "" },
        };
        (state.payload.data[section] as any[]).push(templates[section]);
      }),

    removeItem: (section, index) =>
      set((state) => {
        (state.payload.data[section] as any[]).splice(index, 1);
      }),
  })),
);
