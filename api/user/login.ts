import { req } from "@/api"

/**
 * Used to log in (i.e., get an authorization 🍪).
 *  
 * @param credentials the user's email and password.
 */
async function login(credentials: Credentials): Promise<Res> {
    const res = await req("user/login", credentials)

    // the successful status(es) that does not expect a body.
    if (res.status == 200) {
        return {
            ok: true
        }
    }

    // the unsuccessful statuses that do not expect bodies
    if (res.status == 400) {
        return {
            ok: false,
            err: {
                reason: "malformed body",
            }
        }
    }

    if (res.status == 401) {
        return {
            ok: false,
            err: {
                reason: "wrong password"
            }
        }
    }

    if (res.status == 404) {
        return {
            ok: false,
            err: {
                reason: "unrecognized email"
            }
        }
    }

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
        reason: "server error" | "unknown error" | "unexpected response"
        details: string
    } | {
        reason: "wrong method" | "malformed body" | "wrong password" | "unrecognized email"
    }
})

type Credentials = {
	email:       string
	password:    string
}

export default login
