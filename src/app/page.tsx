import FruitForm from "@/components/fruit-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-lef w-full">
          Fruit Request
        </h1>
        <FruitForm />
      </div>
    </main>
  );
}
