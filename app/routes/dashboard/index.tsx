import {
  DashContainer,
  LeftForm,
  RightData,
  Title
} from '~/styles/pages/dashboard'
import { Form, useActionData } from '@remix-run/react'
import type { ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Input } from '~/components/basic/Input'

export const action = async ({ context, params, request }: ActionArgs) => {
  const form = await request.formData()

  console.log('ENTRIES', Object.fromEntries(form.entries()))
  
  return json({ opa: 'oi' })
}

const Farm = () => {
  const data = useActionData()

  console.log({data})
  
  return (
    <DashContainer>
      <LeftForm>
        <Title>Fazer Lançamento</Title>
        <Form method='post'>
          <Input type="text" label="Ano" name="year" />
          <Input type="text" label="Mês" name="month" />
          <Input type="text" label="Categoria" name="category" />
          <Input type="text" label="Valor" name="value" />
          <input type="submit" />
        </Form>
      </LeftForm>
      <RightData>Eita</RightData>
    </DashContainer>
  )
}

export default Farm