import ModeToggle from "@/components/mode-toggle";
import { CardWithForm } from "./_component/card-with-form";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <ModeToggle />
      <CardWithForm />
    </main>
  );
}
