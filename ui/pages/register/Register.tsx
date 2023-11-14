import style from "./Register.module.css"
import api from "@/api"
import { Button, Form, StringInput, StringInputMethods } from "@/ui/general"
import { useRef } from "react"

export type ServerSideProps = {

}

function Register({

}: ServerSideProps) {
    const email = useRef<StringInputMethods | null>(null)
    const password = useRef<StringInputMethods | null>(null)
    const firstName = useRef<StringInputMethods | null>(null)
    const lastName = useRef<StringInputMethods | null>(null)
    const displayName = useRef<StringInputMethods | null>(null)

    return <Form
        onSubmit={async () => {
            const res = await api.user.register({ 
                email: email.current!.value(), 
                password: password.current!.value(),
                firstName: firstName.current!.value(),
                lastName: lastName.current!.value(),
                displayName: displayName.current!.value(),
            })
            if (!res.ok) {
                console.error("failed login attempt: " + res.err.reason)
                return
            }
            console.log("successfully logged in. Check your cookies")            
        }}
    >
        <StringInput
            label="Email"
            type="email"
            ref={email}
        />
        <StringInput
            label="Password"
            type="password"
            ref={password}
        />
        <StringInput
            label="First Name"
            ref={firstName}
        />
                <StringInput
            label="Last Name"
            ref={lastName}
        />
        <StringInput
            label="Display Name"
            ref={displayName}
        />
        <Button
            text="Log In!"
        />
    </Form>
}

export default Register
