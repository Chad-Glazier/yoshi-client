import style from "./Login.module.css"
import api from "@/api"
import { Button, Form, StringInput, StringInputMethods } from "@/ui/general"
import { useRef } from "react"

export type ServerSideProps = {

}

function Login({

}: ServerSideProps) {
    const email = useRef<StringInputMethods | null>(null)
    const password = useRef<StringInputMethods | null>(null)

    return <Form
        onSubmit={async () => {
            if (!email.current || !password.current) {
                console.error("email or password refs not found")
                return
            }
            const res = await api.user.login({ 
                email: email.current.value(), 
                password: password.current.value() 
            })
            if (!res.ok) {
                console.error("failed login attempt: " + res.err.reason)
                return
            }
            console.log("successfully logged in. Check your cookies")            
        }}
    >
        <StringInput
            label="email"
            type="email"
            ref={email}
        />
        <StringInput
            label="password"
            type="password"
            ref={password}
        />
        <Button
            text="Log In!"
        />
    </Form>
}

export default Login
