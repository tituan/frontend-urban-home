"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import styles from "@/styles/pages/guest.module.scss";

const ACCESS_CODE = "9275";        // Code à 4 chiffres
const STORAGE_KEY = "guestAccess"; // Clé localStorage

export default function GuestAccessPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const onChange = useCallback((e) => {
    // On ne garde que des chiffres, max 4
    const next = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCode(next);
    setError("");
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (code === ACCESS_CODE) {
        try {
          // Persiste l’accès côté client
          localStorage.setItem(STORAGE_KEY, "true");
        } catch {}
        router.push("/guest/content");
      } else {
        setError("Wrong code, please try again.");
      }
    },
    [code, router]
  );

  return (
    <div className="theme-guest">
      {/* La navigation arrive depuis le layout. Ne pas la ré-importer ici */}
      <main className={styles.container}>
        <Hero
          src="/img/paris-jetaime.png"
          alt="Guest Corner"
          isHeading
          variant="guest"
        />

        <form onSubmit={onSubmit} className={styles.form} noValidate>
          <label htmlFor="guest-code" className={styles.label}>
            Enter your 4-digit access code
          </label>

          <input
            id="guest-code"
            type="password"
            inputMode="numeric"
            pattern="\d*"
            maxLength={4}
            value={code}
            onChange={onChange}
            placeholder="••••"
            className={styles.input}
            aria-label="4-digit access code"
            autoComplete="one-time-code"
            autoFocus
          />

          <button type="submit" className={styles.button} disabled={code.length !== 4}>
            Access
          </button>

          {error ? <p className={styles.error}>{error}</p> : null}

          <p className={styles.hint}>
            This private area contains apartment manuals and useful info for your stay.
          </p>
        </form>
      </main>
    </div>
  );
}
