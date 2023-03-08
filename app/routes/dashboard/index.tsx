import {
  DashContainer,
  LeftForm,
  RightData,
  Title
} from '~/styles/pages/dashboard'
import { Form, useActionData } from '@remix-run/react'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Input } from '~/components/basic/Input'
import { validateAuth } from '~/server/services/sessions.server'

export const loader = async ({ request }: LoaderArgs) => {
  return validateAuth(request)
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()

  console.log('ENTRIES', Object.fromEntries(form.entries()))
  
  return json({ opa: 'oi' })
}

const Farm = () => {
  const data = useActionData()

  return (
    <DashContainer>
      <LeftForm>
        <Title>Fazer Lançamento</Title>
        <Form method='post'>
          <Input type="text" label="Ano" name="year" />
          <Input type="text" label="Mês" name="month" />
          <Input type="text" label="Categoria" name="category" />
          <Input type="text" label="Valor" name="value" />
          <button type="submit" >Lançar</button>
        </Form>
      </LeftForm>
      <RightData>Eita</RightData>
    </DashContainer>
  )
}

export default Farm