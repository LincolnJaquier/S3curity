const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken')
const express = require('express')
const prisma = new PrismaClient();

// Exemplo de consulta ao banco de dados
async function main() {
  const users = await prisma.User.findMany();
  console.log(users);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  main();

  const app = express();
  app.use(express.json());
  app.post('/App', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const user = await prisma.user.findUnique({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
      const senhaValida = await prisma.user.findUnique({ where: { senha } });
  
      if (!senhaValida) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
      // Gerar um token de autenticação
      const token = jwt.sign({ userId: user.id }, 'segredo');
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro na autenticação' });
    }
  });