export const authMiddleware = async ({ jwt, headers, error }: any) => {
    const token = headers.authorization
    const profile = await jwt.verify(token)

    if (!profile)
        return error(401, 'Unauthorized')

    return profile
}
