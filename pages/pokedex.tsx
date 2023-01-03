import Head from 'next/head'
import Header from '../components/Header'
import styled, {createGlobalStyle} from 'styled-components'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;
        overflow: auto;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    
`

const Content = styled.div`
    width: 1000px;
    margin-top: 20px;
    background-color: white;  
    box-shadow: 2px 2px 2px black; 
    &>div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 10px 20px;
        gap: 20px;
    }
`
const Wallpaper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -19;
    background-image: url('https://i.pinimg.com/originals/33/ac/6a/33ac6af8e90054568ab47ad0ef2d02a2.png');
`
    
export default function pokedex() {

    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0")
        .then((res)=>{
            if(res.ok){
                return res.json()
            } else {
                alert("Fim da lista")
            }
        })
        .then((json)=>{
            setPokemons(json.results)
        })
    },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <GlobalStyle></GlobalStyle>
      <Wallpaper></Wallpaper>
      <Container>
        <Content>
            <Header></Header>
            <div>
                {pokemons.map((pokemon, i)=><Card name={pokemon["name"]} url={pokemon['url']} key={i} ></Card>)}
            </div>
        </Content>
      </Container>
    </>
  )
}