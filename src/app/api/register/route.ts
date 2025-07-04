import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth-utils";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
const normalizedEmail = email.toLowerCase().trim();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "Email exists" }, { status: 400 });

  const hashed = await hashPassword(password);
  await prisma.user.create({
    data: {
      email:normalizedEmail,
      password: hashed,
      name,
    },
  });

  return NextResponse.json({ success: true });
}
