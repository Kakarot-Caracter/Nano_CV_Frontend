# Nano CV - Frontend

Este es el frontend oficial para el ecosistema **Nano CV**, una suite de herramientas de alto rendimiento para la creación de currículums. Esta aplicación web, construida con las tecnologías más modernas, proporciona una interfaz de usuario intuitiva y fluida para que los usuarios puedan crear, previsualizar y descargar sus CVs en formato PDF de manera sencilla.

## 🚀 Características Principales

*   **Interfaz Moderna:** Construida con [Next.js](https://nextjs.org/) y [React](https://react.dev/).
*   **Estilizado con Tailwind CSS:** Interfaz limpia y responsiva gracias a [Tailwind CSS](https://tailwindcss.com/) y los componentes de [shadcn/ui](https://ui.shadcn.com/).
*   **Gestión de Estado Eficiente:** Manejo de estado global con [Zustand](https://zustand-demo.pmnd.rs/) para una experiencia de usuario rápida y sin interrupciones.
*   **Validación de Formularios:** Formularios robustos y validados en tiempo real con [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/).
*   **Experiencia de Usuario Optimizada:** Previsualización en tiempo real y una interfaz organizada en pestañas para cada sección del CV (Datos Personales, Experiencia, Educación, Habilidades, etc.).

## ⚙️ Arquitectura del Ecosistema Nano CV

El frontend es la puerta de entrada a un sistema de tres componentes diseñado para ser modular y de alto rendimiento:

1.  **`nano_cv_frontend` (Este Repositorio):** La aplicación web con la que el usuario interactúa. Su responsabilidad es capturar los datos del currículum y enviarlos al backend en formato JSON.

2.  **[Nano_CV_Backend](https://github.com/Kakarot-Caracter/Nano_CV_Backend):** Un orquestador de servicios construido en **NestJS**. Actúa como intermediario, recibiendo la petición JSON del frontend, transformando los datos al formato YAML y delegando la tarea de generación del PDF al motor principal.

3.  **[Fast_Nano_CV_Engine_Memory](https://github.com/Kakarot-Caracter/Fast_Nano_CV_Engine_Memory):** El corazón del sistema. Un motor de generación de PDFs ultrarrápido escrito en **Rust** y compilado como un complemento nativo de Node.js. Opera completamente en memoria para un rendimiento máximo, tomando los datos en YAML y una plantilla para producir un archivo PDF sin tocar el sistema de archivos.

### Flujo de Trabajo

```
Usuario en Frontend -> JSON -> Backend (NestJS) -> YAML -> Motor (Rust) -> PDF (Buffer) -> Descarga en Frontend
```

## 🛠️ Instalación y Ejecución

Para ejecutar este proyecto en un entorno de desarrollo, sigue estos pasos.

### Requisitos Previos

*   [Node.js](https://nodejs.org/) (v18 o superior)
*   `npm`, `yarn` o `pnpm`
*   Una instancia del [Nano_CV_Backend](https://github.com/Kakarot-Caracter/Nano_CV_Backend) corriendo localmente (o accesible a través de una URL).

### Pasos de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Kakarot-Caracter/nano_cv_frontend.git
    cd nano_cv_frontend
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura la URL del Backend:**
    (Si es necesario) Asegúrate de que las peticiones de la aplicación apunten a la URL correcta de tu backend. Esto puede requerir modificar las llamadas `fetch` o el cliente de API que uses.

4.  **Ejecuta la aplicación en modo de desarrollo:**
    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📜 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts:

*   `npm run dev`: Inicia el servidor de desarrollo de Next.js.
*   `npm run build`: Compila la aplicación para producción.
*   `npm run start`: Inicia un servidor de producción de Next.js.
*   `npm run lint`: Ejecuta el linter de Biome para revisar la calidad del código.
*   `npm run format`: Formatea todo el código del proyecto usando Biome.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.