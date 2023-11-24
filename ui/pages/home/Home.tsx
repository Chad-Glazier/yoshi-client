import api from "@/api"
import Button from "@mui/material/Button"

export type ServerSideProps = {

}

function Home({

}: ServerSideProps) {
    return <>
        <h1>home</h1>
        <Button variant="contained">Hi</Button>
    </>
}


export default Home