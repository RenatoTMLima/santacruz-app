import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await Promise.all(categoriesArray.map(category => {
    return prisma.category.upsert({
      where: {
        name: category.name
      },
      update: {},
      create: category
    })
  }))
}
main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const categoriesArray = [
  {
    "name": "Aluguel",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Cartório",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "CEMIG",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Combustivel",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Despesas com Hilux",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Doação",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Internet",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Outros",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Sem parar",
    "isFarm": true,
    "isHouse": true
  },
  {
    "name": "Ajuda mensal Mãe/Tio",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Alimentação",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Aluguel Yuki",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Amazon",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Condominio",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Consertos",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Consórcio",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "DARF/Investimentos",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Dentista",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "DPVAT/licenciamento",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Eletrodomésticos",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Escritório",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Estacionamento",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Exames médicos",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Farmácia",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Gás",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Hotel",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Imposto de renda",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Imposto de renda Investimentos",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "IPTU",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "IPVA",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Magazine Luiza",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Médico",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Móveis",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Presentes",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Restaurante",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Seguro de carro",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Seguro Viagem",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Takao",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Tarifa bancária",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Uber/onibus",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Vestuário",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Viagem",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "VIVO",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "Yuki",
    "isFarm": false,
    "isHouse": true
  },
  {
    "name": "13 salario",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Acerto funcionario",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Adubo",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Ajuda de custo",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Ajuda Vanderlei",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Cachorro",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Calcário",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Cavalo",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Comissão",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Consertos/manutenção",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Contabilidade",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Contribuição sindical",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Cooperita",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Coopervas",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Divino P.A.",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Eletricista",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Encargos bancarios",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Encargos trabalhistas",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Férias funcionários",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Financiamento",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Fretes",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Gado",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Georreferenciamento",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "GTA",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Imposto",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "ITR",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Licença Ambiental",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Luchini",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Mão-de-obra terceiros",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Materiais Loja Bruno",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Material de Construção",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Material elétrico",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Merito Consultoria",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Morão",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Nitrogênio",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Oi TV",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Pedreiro",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Piscina/manutenção",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Pneu conserto",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Ração animal",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Salário",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Segurança do Trabalho",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Seguro trator",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Semen",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Sementes",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Vacinas",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Vendagro",
    "isFarm": true,
    "isHouse": false
  },
  {
    "name": "Veterinário",
    "isFarm": true,
    "isHouse": false
  }
]