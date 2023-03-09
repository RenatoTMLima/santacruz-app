import {
  DashContainer,
  LeftForm,
  RightData,
  Title
} from '~/styles/pages/dashboard'
import { Form, useLoaderData } from '@remix-run/react'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Input } from '~/components/basic/Input'
import { validateAuth } from '~/server/services/sessions.server'
import { db } from '~/server/repository/db.server'

export const loader = async ({ request }: LoaderArgs) => {
  const validation = await validateAuth(request)

  if(validation !== true) return validation

  const categories = await db.category.findMany({
    where: {
      isFarm: true
    }
  })

  return json(categories)
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()

  console.log('ENTRIES', Object.fromEntries(form.entries()))
  
  return json({ opa: 'oi' })
}

const Farm = () => {
  const categories = useLoaderData<typeof loader>()
  
  return (
    <DashContainer>
      <LeftForm>
        <Title>Fazer Lançamento</Title>
        <Form method='post'>
          <input type="hidden" name='isExpense' value="true"/>
          <input type="hidden" name='isFarm' value="true" />
          <Input type="number" label="Ano" name="year" defaultValue={new Date().getFullYear()}/>
          <Input type="number" label="Mês" name="month" defaultValue={new Date().getMonth() + 1}/>
          <select name="categoryId">
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <Input type="text" label="Valor" name="value" />
          <button type="submit" >Lançar</button>
        </Form>
      </LeftForm>
      <RightData>Eita</RightData>
    </DashContainer>
  )
}

export default Farm