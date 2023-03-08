import { Form } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Input } from '~/components/basic/Input'
import { login, createUserSession, isLogged } from '~/server/services/sessions.server'
import type { LoginForm } from '~/types/Session'

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()

  const { email, password } = Object.fromEntries(formData.entries()) as unknown as LoginForm

  const user = await login({ email, password })

  if(!user) {
    return json({ error: 'Failed to authenticate' }, { status: 401 })
  }
  
  return createUserSession(user.id)
}

export const loader = async ({ request }: LoaderArgs) => {
  const logged = await isLogged(request)

  if(logged) return redirect('dashboard')

  return true
}

export default function Index() {
  return (
    <div>
      <h1>Login</h1>
      <Form method="post" style={{ maxWidth: 500, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Input type="text" name="email" label='E-mail'/>
        <Input type="password" name="password" label='Senha' />
        <button type="submit">Entrar</button>
      </Form>
    </div>
  );
}
