import { user } from "./mock"
import { MainContainer, PageH1 } from "./styles"

export default function Home() {

    return (
        <MainContainer>
            <PageH1>Bem vindo, {user.name}.</PageH1>


        </MainContainer >
    )
}