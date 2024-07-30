import FruitForm from "@/forms/fruit-form";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <FruitForm />
    </main>
  );
}
