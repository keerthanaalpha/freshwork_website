"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AuthentHeader() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  return (
    <div style={{ marginLeft: "20px", display: "flex", gap: "10px", color: "white" }}>
      {!session ? (
        <>
          <Link href="/signin" style={{ color: "#60a5fa", textDecoration: "underline" }}>
            Sign In
          </Link>
          <Link href="/register" style={{ color: "#22c55e", textDecoration: "underline" }}>
            Register
          </Link>
        </>
      ) : (
        <button
          onClick={() => signOut()}
          style={{
            background: "transparent",
            border: "none",
            color: "#f87171",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
