import { logout } from '~/server/services/sessions.server'
import { redirect } from "@remix-run/node";
import type {
  ActionArgs,
} from "@remix-run/node";

export const action = ({ request }: ActionArgs) => {
  return logout(request)
}

export const loader = () => {
  return redirect('dashboard')
}