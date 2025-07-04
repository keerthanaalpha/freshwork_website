"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const handleLogin = async () => {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    toast.error("Invalid email or password");
    return;
  }

  toast.success("Signed in successfully");
  router.push("/");
};


  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 my-2 block w-full"
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 my-2 block w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
      >
        Sign In
      </button>
    </div>
  );
}
