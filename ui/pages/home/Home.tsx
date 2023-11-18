import style from "./Home.module.css"
import api from "@/api"
import { A, Button } from "@/ui/general"

export type ServerSideProps = {

}

function Home({

}: ServerSideProps) {
    return <>
        <h1>home</h1>
        <p>
            yadda <A href="register">yadda</A> yadda
        </p>    
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error sit, repudiandae aliquid, necessitatibus sapiente illo odio eius delectus, quas suscipit fugit rem voluptatem et fuga iusto voluptatibus! Eveniet quam id pariatur voluptatibus dolore quia harum rem quis. Labore, architecto.
        </p>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem"
            }}
        >
            <Button emphasis="medium" text="medium" />
            <Button emphasis="low" text="low" />
            <Button emphasis="high" text="high" />
        </div>
    </>
}


export default Home