"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import styles from "@/styles/pages/guest.module.scss";

const ACCESS_CODE = "9275";      
const STORAGE_KEY = "guestAccess"; 

export default function GuestAccess() {
  const router = useRouter();
  // 4 cases vides
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  // focus 1ère case au mount
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const value = digits.join("");

  // Dès que 4 chiffres → on valide automatiquement
  useEffect(() => {
    if (value.length === 4) {
      if (value === ACCESS_CODE) {
        localStorage.setItem(STORAGE_KEY, "true");
        router.push("/guest/manuals"); // ← change ici si ta route est différente
      } else {
        // mauvais code → reset + message
        setError("Try again.");
        setDigits(["", "", "", ""]);
        // petit délai pour laisser l’animation “shake”
        setTimeout(() => inputsRef.current[0]?.focus(), 180);
      }
    }
  }, [value, router]);

  const handleChange = (idx, e) => {
    setError("");
    const raw = e.target.value;
    const onlyDigits = raw.replace(/\D/g, "");
    if (!onlyDigits) return;

    const d = onlyDigits.slice(-1); // on garde le dernier digit
    setDigits((prev) => {
      const next = [...prev];
      next[idx] = d;
      return next;
    });

    // focus case suivante si elle existe
    if (idx < 3) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace") {
      if (digits[idx]) {
        // efface la case actuelle
        e.preventDefault();
        setDigits((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      } else if (idx > 0) {
        // si vide → remonter à la case précédente
        e.preventDefault();
        inputsRef.current[idx - 1]?.focus();
        setDigits((prev) => {
          const next = [...prev];
          next[idx - 1] = "";
          return next;
        });
      }
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === "ArrowRight" && idx < 3) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const clip = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 4);
    if (!clip) return;
    const arr = clip.split("");
    const filled = [arr[0] || "", arr[1] || "", arr[2] || "", arr[3] || ""];
    setDigits(filled);
    // focus dernière case remplie
    const lastIdx = Math.min(filled.filter(Boolean).length - 1, 3);
    inputsRef.current[lastIdx >= 0 ? lastIdx : 0]?.focus();
  };

  return (
    <div className="theme-guest">
      <Navigation />

      <div className={styles.container}>
        <Hero src="/img/guest-corner.png" alt="Guest Corner" isHeading />

        <div className={styles.form} aria-label="4-digit access code">
          <div
            className={`${styles.code} ${error ? styles["code--error"] : ""}`}
            onPaste={handlePaste}
          >
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                type="password"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digits[i]}
                onChange={(e) => handleChange(i, e)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={styles.digit}
                aria-label={`Digit ${i + 1}`}
                autoComplete="one-time-code"
              />
            ))}
          </div>
          <p className={styles.hint}>
            Enter your 4-digit code to access manuals & apartment info.
          </p>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        
      </div>
    </div>
  );
}
