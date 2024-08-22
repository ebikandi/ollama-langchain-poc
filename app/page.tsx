"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [answer, setAnswer] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    debugger;
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/langchain", {
      method: "POST",
      body: JSON.stringify(formData.get("question")),
    });

    const data = await response.json();

    setAnswer(data);
    setIsLoading(false);
  }

  // console.log("nko answer", answer);

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <input type="text" name="question" className={styles.question} />
        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
      <section>
        <h1 hidden={isLoading === false}>Loading...</h1>
        <p hidden={isLoading}>{answer ? answer : null}</p>
      </section>
    </main>
  );
}
