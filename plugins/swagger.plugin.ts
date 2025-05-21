import { swagger } from '@elysiajs/swagger'

export const swaggerPlugin = swagger({
    path: '/swagger',
    documentation: {
        info: {
            title: 'Elysia Auth API',
            version: '1.0.0'
        }
    }
})
