import { req } from "@/api"

/**
 * This function will unregister/delete the currently logged-in
 * user. Use with caution, obviously.
 */
async function unregister(password: string): Promise<Res> {
    const res = await req("user/unregister", { password }, "DELETE")

    switch (res.status) {
    case 200:
        return {
            ok: true
        }
    case 400:
        return {
            ok: false,
            err: {
                reason: "malformed body"
            }
        }
    case 401: 
        return {
            ok: false,
            err: {
                reason: "incorrect password"
            }
        }
    case 404:
        return {
            ok: false,
            err: {
                reason: "unidentified user"
            }
        }
    case 405:
        return {
            ok: false,
            err: {
                reason: "wrong method"
            }
        }
    case 500:
        return {
            ok: false,
            err: {
                reason: "server error",
                details: await res.text()
            }
        }
    default:
        return {
            ok: false,
            err: {
                reason: "unknown error",
                details: await res.text()
            }
        }
    }
}

type Res = {
    ok: true
} | ({
    ok: false
} & {
    err: {
        reason: "server error" | "unknown error"
        details: string
    } | {
        reason: "wrong method" | "unauthorized" | "unidentified user" | "incorrect password" | "malformed body"
    }
})

export default unregister
