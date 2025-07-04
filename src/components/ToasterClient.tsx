"use client";
import { Toaster } from "sonner";

export default function ToasterClient() {
  return <Toaster duration={3000} position="top-right" richColors />;
}
