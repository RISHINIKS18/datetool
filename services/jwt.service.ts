import { jwt } from '@elysiajs/jwt'

export const jwtPlugin = () => {
    const name = 'jwt'
    const secret = 'Rushikesh Nikam 18'
    const exp = '7d'

    return {name, secret, exp}
}

// export const jwtPlugin = jwt({
//     name: 'jwt',
//     secret: 'Rushikesh Nikam 18',
//     exp: '7d'
// })

// 👇 Export the type of the plugin
// export type JWTContext = {
//     jwt: ReturnType<typeof jwt>['value']
// }
