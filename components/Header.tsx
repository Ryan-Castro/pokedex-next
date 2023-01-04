import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    display: block;
    width: 100%;
    
    ul{
      width: 100%;
      display: flex;
      background-color: black;
      padding: 2px 2px 0px 0px;
    }
    a{
      width: 100%;
      text-decoration: none;
    }
    li{
      width: 100%;
      margin: 0px 3px;
      text-align: center;
      font-size: 30px;
      background-color: #adadad;
      border-radius: 15px 15px 0px 0px;
      color: black;
    }
`
export default function Header() {
  return (
    <Container>
        <ul>
            <Link href={"/"}><li>Inicio</li></Link>
            <Link href={"/pokedex"}><li>Pokedex</li></Link>
            <Link href={"/sobre"}><li>Sobre</li></Link>
            
            
        </ul>
    </Container>
  )
}