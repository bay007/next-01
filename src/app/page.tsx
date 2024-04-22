import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <Alert color="info">¡Hola esteban GR!</Alert>
      <Alert color="info">
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
    </main>
  );
}
