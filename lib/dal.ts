import "server-only"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"

export const getSession = cache(async () => {
    return auth.api.getSession({
        headers: await headers(),
    })
})

export async function requireAuth() {
    const session = await getSession()

    if (!session?.user) {
        redirect("/login")
    }

    return session
}
