//arquivo q pre popula nosso banco de dados, com alguns registros q geralmente sao para facilitar quem for trabalhar com a nossa API, quando for rodar o projeto na maquina nao ser um projeto q vai estar todo vazio
import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.event.create({
    data: {
      id: '0070230f-12ff-41c6-b24f-024cbb122aae',
      title: 'Unite Sumit',
      slug: 'unite-sumit',
      details: 'Um evento para devs apaixonados(as) por codigo!',
      maximumAttendees: 120
    }

  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})