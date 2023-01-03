import styled from 'styled-components';

const Container = styled.div`
    display: block;
    width: 100%;
`
export default function Header() {
  return (
    <Container>
        <ul>
            <li>inicio</li>
            <li>pokedex</li>
            <li>sobre</li>
        </ul>
    </Container>
  )
}