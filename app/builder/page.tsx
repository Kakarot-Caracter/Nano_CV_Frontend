import HeaderBuilder from "./components/HeaderBuilder";
import TabsBuilder from "./components/TabsBuilder";

export default function Builder() {
  return (
    <>
      <HeaderBuilder />
      <main className="flex flex-col items-center justify-center w-full">
        <TabsBuilder />
      </main>
    </>
  );
}
