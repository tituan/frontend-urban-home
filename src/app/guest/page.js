"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import styles from "@/styles/pages/guest.module.scss";

const ACCESS_CODE = "9275";
const STORAGE_KEY = "guestAccess";

export default function GuestAccess() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, "true");
      router.push("/guest/content");
    } else {
      setError("Wrong code, please try again.");
    }
  };

  return (
    <div className="theme-guest">
      {/* Nav visible sur la page /guest */}
      <Navigation />

      <div className={styles.container}>
        <Hero src="/img/guest-corner.png" alt="Guest Corner" isHeading />

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            inputMode="numeric"
            pattern="\d*"
            maxLength={4}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            placeholder="4-digit code"
            className={styles.input}
            aria-label="4-digit access code"
            autoFocus
          />
          <button type="submit" className={styles.button}>Access</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.hint}>
          Tip: This area contains all apartment manuals and sensitive info.
        </p>
      </div>
    </div>
  );
}
