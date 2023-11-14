import { req } from "@/api"
import { z } from "zod"

/**
 * This is used to register/create a new user, based on the info in
 * `u`, the registration object. Any conflicts (i.e., attempting to
 * use an email or display name that is already taken) will be reported
 * in the returned object.
 * 
 * @param u the registration details of the user.
 */
async function register(newUser: UserRegistration): Promise<Res> {
    const res = await req("user/register", newUser)

    // the successful status(es) that does not expect a body.
    if (res.status == 201) {
        return {
            ok: true
        }
    }

    // the unsuccessful status(es) that expect bodies
    if (res.status == 409) {
        let body: unknown
        try {
            body = await res.json()
        } catch {
            return {
                ok: false,
                err: {
                    reason: "unexpected response",
                    details: await res.text()
                }
            }
        }
        let parsedBody = registrationConflictSchema.safeParse(body)
        if (!parsedBody.success) {
            return {
                ok: false,
                err: {
                    reason: "unexpected response",
                    details: await res.text()
                }
            }
        }
        return {
            ok: false,
            err: {
                reason: "conflict",
                details: parsedBody.data
            }
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
        reason: "wrong method" | "malformed body"
    } | {
        reason: "conflict"
        details: RegistrationConflict
    }
})

type UserRegistration = {
	email:       string
	password:    string
	firstName:   string
	lastName:    string
	displayName: string
}

const registrationConflictSchema = z.object({
    email:       z.boolean(),
    displayName: z.boolean()
})

type RegistrationConflict = z.infer<typeof registrationConflictSchema>

export default register
