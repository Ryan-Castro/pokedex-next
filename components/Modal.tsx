import styled from 'styled-components';
import { FunctionComponent} from 'react';

interface Base {
    base_stat: number;
    stat: {name: string};
}

interface ModalProps {
    height?: number;
    name?: string;
    weight?: number;
    stats?: Array<Base>;
    display?: string;
    id?: string;
}



const ModalDiv= styled.div`
    display: ${(props:{display:string})=> props.display};
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #00000080;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    

    &>div{
        width: 50vw;
        height: 25vw;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 10px;
        box-shadow: 2px 2px 1px black;
    }
    img{
        height: 100%;
    }
    .stats{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 20px;
        width: 23vw;
        height: 24vw;
        box-shadow: 2px 2px 1px black;
        padding: 20px;
        align-items: center;
    }
    .stats>div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
    }
    .stats>ul{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .stats li{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
`

const Card: FunctionComponent<ModalProps> = (props)=>{

  return (
    <ModalDiv display={props.display}>
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="" />
            <div className='stats'>
                <h1>{props.name}</h1>
                <div>
                    <h3>height: {(props.height!/10)} m</h3>
                    <h3>Peso: {(props.weight!/10)} Kg</h3>
                </div>
                <ul>
                    {props.stats?.map((stat, i)=><li key={i}><h3>{stat.stat.name}:</h3> {stat.base_stat}</li>)}
                </ul>
            </div>
        </div>
    </ModalDiv>
  )
}

export default Card