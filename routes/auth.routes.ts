import { Elysia } from 'elysia'
import type { Context } from 'elysia'
import { jwtPlugin } from '../services/jwt.service'
import {jwt} from '@elysiajs/jwt'
// Now we define the context type that includes JWT functionality

export const authRoutes = new Elysia({ prefix: '/auth' }).use(jwt(jwtPlugin()))
    // First route: /sign/:name
    .get('/sign/:name', async ({ jwt, params } ) => {
        return await jwt.sign({ name: params.name })
    })
    // Second route: /profile
    .get('/profile', async ({ jwt, headers, error }) => {
        const token = headers.authorization
        const profile = await jwt.verify(token)

        if (!profile) return error(401, 'Unauthorized')

        return `Hello ${profile.name}`
    })
    .post('/login', async ({ body, jwt, error }) => {
        const { username, password } = body as { username: string; password: string }

        // Replace this with DB logic later
        const validUser = username === 'admin.support@learningmate.com' && password === '123456'

        if (!validUser) return error(401, 'Invalid credentials')

        const token = await jwt.sign({ username })
        return { token }
    })
