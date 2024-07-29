import Link from "next/link";
import SubmitButton from "@/components/submit-button";

export default function Confirmation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl  mb-4">Your fruit submission is complete</h1>
      <Link href="/">
        <SubmitButton text="Submit another" />
      </Link>
    </main>
  );
}
