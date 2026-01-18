import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileText, Briefcase, GraduationCap, Wrench } from "lucide-react";
import PersonalForm from "./TabsBuilder/PersonalForm";
import FormMeForm from "./TabsBuilder/ForMeForm";
import ExperienceForm from "./TabsBuilder/ExperienceForm";
import EducationForm from "./TabsBuilder/EducationForm";
import SkillsForm from "./TabsBuilder/SkillsForm";

export default function PortfolioTabs() {
  return (
    <div className="w-full flex justify-center items-center px-4">
      <Tabs
        defaultValue="personal"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="flex h-auto p-1 gap-2 justify-start md:justify-center bg-transparent w-full overflow-x-auto scrollbar-hide">
          <TabsTrigger
            value="personal"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap
              text-muted-foreground
              data-[state=active]:bg-blue-700 data-[state=active]:text-white shadow-none"
          >
            <User className="w-4 h-4" />
            Personal
          </TabsTrigger>

          <TabsTrigger
            value="sobre-mi"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap
              text-muted-foreground
              data-[state=active]:bg-blue-700 data-[state=active]:text-white shadow-none"
          >
            <FileText className="w-4 h-4" />
            Sobre mí
          </TabsTrigger>

          <TabsTrigger
            value="experiencia"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap
              text-muted-foreground
              data-[state=active]:bg-blue-700 data-[state=active]:text-white shadow-none"
          >
            <Briefcase className="w-4 h-4" />
            Experiencia
          </TabsTrigger>

          <TabsTrigger
            value="educacion"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap
              text-muted-foreground
              data-[state=active]:bg-blue-700 data-[state=active]:text-white shadow-none"
          >
            <GraduationCap className="w-4 h-4" />
            Educación
          </TabsTrigger>

          <TabsTrigger
            value="habilidades"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap
              text-muted-foreground
              data-[state=active]:bg-blue-700 data-[state=active]:text-white shadow-none"
          >
            <Wrench className="w-4 h-4" />
            Habilidades
          </TabsTrigger>
        </TabsList>

        <div className="mt-8 w-full max-w-2xl">
          <TabsContent value="personal" className="focus-visible:outline-none">
            <PersonalForm />
          </TabsContent>

          <TabsContent value="sobre-mi" className="focus-visible:outline-none">
            <FormMeForm />
          </TabsContent>

          <TabsContent
            value="experiencia"
            className="focus-visible:outline-none"
          >
            <ExperienceForm />
          </TabsContent>

          <TabsContent value="educacion" className="focus-visible:outline-none">
            <EducationForm />
          </TabsContent>

          <TabsContent
            value="habilidades"
            className="focus-visible:outline-none"
          >
            <SkillsForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
