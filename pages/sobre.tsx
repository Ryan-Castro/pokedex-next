import styled, {createGlobalStyle} from 'styled-components'
import Header from '../components/Header'
import Head from 'next/head'
import Link from 'next/link'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        box-sizing: border-box;
        overflow-x: hidden;
        padding: 0px;
    }
    body{
        width: 100vw;
        height: 100vh;
        
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    &>div{
        width: 1000px;
        margin-top: 20px;
    }
    .sobre{
        background-color: white;
        padding: 20px;
        height: 60vh;
        box-shadow: 0px 1px 2px black inset ;
    }
`
const Wallpaper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -19;
    background-image: url('https://i.pinimg.com/originals/33/ac/6a/33ac6af8e90054568ab47ad0ef2d02a2.png');
`
export default function sobre() {
  return (
    <>
        <Head>
            <title>Pokedex</title>
        </Head>
        <Wallpaper></Wallpaper>
        <GlobalStyle></GlobalStyle>
        <Container>
            <div>
                <Header></Header>
                <div className='sobre'>
                    <h1>Site feito para Estudos</h1>
                    <p>Ssse site fiz com a intenção de treinar meus conheçimentos de TypeScript e fiz esse site usando a <Link href={"https://pokeapi.co/"}>api do pokemon</Link></p>
                    <p>Eu sou Ryan e Trabalho com Front-end, fiz alguns trabalhos e para me conhecer mais, acesse meu GitHub:<Link href={"https://github.com/Ryan-Castro"}>Ryan-Castro</Link></p>
                </div>
            </div>
        </Container>
    </>
  )
}