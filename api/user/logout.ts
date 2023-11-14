import { req } from "@/api"

/**
 * Used to log out (i.e., clear the authorization 🍪).
 */
async function logout(): Promise<Res> {
    const res = await req("user/logout", null, "DELETE")

    // the successful status(es) that does not expect a body.
    if (res.status == 200) {
        return {
            ok: true
        }
    }

    // the unsuccessful statuses that do not expect bodies
    if (res.status == 405) {
        return {
            ok: false,
            err: {
                reason: "wrong method",
            }
        }
    }

    // unexpected server error
    if (res.status >= 500) {
        return {
            ok: false,
            err: {
                reason: "server error",
                details: await res.text()
            }
        }
    }

    return {
        ok: false,
        err: {
            reason: "unknown error",
            details: await res.text()
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
        reason: "wrong method"
    }
})

export default logout
