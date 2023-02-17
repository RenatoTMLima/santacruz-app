import {
  Container,
  Table
} from './styles'

export const Summary = () => {
  return (
    <Container>
      <h2>Comparativo anual</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>2023</th>
            <th>2022</th>
            <th>2021</th>
            <th>2020</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Receita</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Despesa Fazenda</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Despesa Casa</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Saldo</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  )
}