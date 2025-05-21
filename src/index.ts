import { Elysia } from 'elysia'
import { swaggerPlugin } from '../plugins/swagger.plugin'
import { jwtPlugin } from '../services/jwt.service'
import { authRoutes } from '../routes/auth.routes'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    .use(cors({
        origin: ({ headers }) => {
          const origin = headers.get("origin");
          if (!origin) return false;
  
          return true
        },
      }))
    .use(swaggerPlugin)
    .use(authRoutes)

export type App = typeof app

app.listen(3000)
console.log(`🚀 Server is running at http://localhost:3000`)
