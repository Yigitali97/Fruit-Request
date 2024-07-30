import Link from "next/link";
import SubmitButton from "@/components/submit-button";
import styles from "./confirmation.module.css";

export default function Confirmation() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your fruit submission is complete</h1>
      <Link href="/">
        <SubmitButton text="Submit another" />
      </Link>
    </main>
  );
}
