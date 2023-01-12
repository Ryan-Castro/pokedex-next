import Head from 'next/head'
import Header from '../components/Header'
import styled, {createGlobalStyle} from 'styled-components'
import { useRef, useState, useLayoutEffect } from 'react'
import Card from '../components/Card'

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
    width: 100vw;
    
`

const Content = styled.div`
    width: 1000px;
    margin-top: 20px;
    background-color: white;  
    box-shadow: 2px 2px 2px black; 
    .pokedex{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 10px 20px;
        gap: 20px;
        position: relative;
        box-shadow: 0px 1px 2px black inset ;
    }
    .sentinela{
        background-color: transparent;
        width: 99%;
        height: 20px;
        position: absolute;
        bottom: 0px;
        display: none;
    }
    @media (max-width:1000px){
        .pokedex{
            grid-template-columns: 1fr 1fr ;
        }
    }
    @media (max-width:600px){
        .pokedex{
            grid-template-columns: 1fr ;
        }
    }
`
const Wallpaper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -19;

    background-image: url('https://i.pinimg.com/originals/33/ac/6a/33ac6af8e90054568ab47ad0ef2d02a2.png');
`


const Pokedex: React.FC = ()=>{

    const [pokemons, setPokemons] = useState<{ name: string, url: string }[]>([])
    const [offset, setOffset] = useState<number>(0)
    const sentinela = useRef<HTMLDivElement>(null)
    useLayoutEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry)=>entry.isIntersecting)){
                setOffset((offsetInsideState)=> offsetInsideState + 20)
            }   
        })
        intersectionObserver.observe(sentinela.current!);
        return () => intersectionObserver.disconnect();
    },[])
    useLayoutEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
        .then((res)=>{
            if(res.ok){
                return res.json()
            } else {
                alert("Fim da lista")
            }
        })
        .then((json)=>{
            let poke = [...pokemons, ...json.results]
            var novaArr = poke.filter((este, i) => poke.indexOf(este) === i);
            setPokemons(novaArr) 
            sentinela.current!.style.display = "block"
        }) 
    },[offset])
    return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <GlobalStyle></GlobalStyle>
      <Wallpaper></Wallpaper>
      <Container>
        <Content>
            <Header></Header>
            <div className='pokedex'>
                {pokemons.map((pokemon, i)=><Card name={pokemon["name"]} url={pokemon['url']} key={i} ></Card>)}
                <div className='sentinela' ref={sentinela}></div>
            </div>
        </Content>
      </Container>
    </>
  )
}

export default Pokedex