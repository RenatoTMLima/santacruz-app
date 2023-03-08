import bcrypt from 'bcryptjs'
import {
  createCookieSessionStorage,
  redirect,
} from "@remix-run/node";
import type { LoginForm } from '~/types/Session'
import { db } from '../repository/db.server'

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "STCZ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
    httpOnly: true,
  },
});

export const getUserSession = async (request: Request) => {
  return storage.getSession(request.headers.get("Cookie"));
}

export const isLogged = async (request: Request) => {
  const session = await getUserSession(request)

  return session.has('userId')
}

export async function login({
  email,
  password,
}: LoginForm) {
  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    if (!user) return null;
  
    const isCorrectPassword = await bcrypt.compare(
      password,
      user.password
    );
    if (!isCorrectPassword) return null;

    const { id, firstName, lastName } = user
  
    return { id, firstName, lastName };
  } catch(error) {
    console.log(error)
    return null;
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export const createUserSession = async (userId: string) => {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect('dashboard', {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export const validateAuth = async (request: Request) => {
  const logged = await isLogged(request)

  if(!logged) {
    return redirect('/')
  }

  return true
}