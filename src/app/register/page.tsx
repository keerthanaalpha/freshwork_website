"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      toast.success("Registered successfully. Please sign in.");
      router.push("/signin");
    } else {
      toast.error("Email already exists or failed to register.");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 my-2 block w-full"
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 my-2 block w-full"
      />
      
      <div className="relative">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 my-2 block w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
      >
        Register
      </button>
    </div>
  );
}
