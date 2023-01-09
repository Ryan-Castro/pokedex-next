import styled from 'styled-components';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import Modal from "./Modal"

interface CardProps {
    name: string;
    url: string
}

const CardDiv = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    text-transform: capitalize;
    &>img{
        width: 150px;
        height: 150px;
    }
    .tipes{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .tipe{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 30px;
        border: 2px solid black;
        border-radius: 20px;
        text-transform: capitalize;
    }
    .grass{
        background-color: #9bcc50;
    }
    .poison{
        background-color: #b97fc9;
    }
    .fire{
        background-color: #fd7d24;
    }
    .flying{
        background-color: #3dc7ef;
    }
    .water{
        background-color: #4592c4;
    }
    .bug{
        background-color: #729f3f;
    }
    .normal{
        background-color: #a4acaf;
    }
    .electric{
        background-color: #eed535;
    }
    .ground{
        background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)
    }
    .fairy{
        background-color: #fdb9e9;
    }
    .fighting{
        background-color: #d56723;
    }
    .psychic{
        background-color: #f366b9;
    }
    .rock{
        background-color: #a38c21;
    }
    .steel{
        background-color: #9eb7b8;
    }
    .ice{
        background-color: #51c4e7;
    }
    .ghost{
        background-color: #7b62a3;
    }
`
interface Infos{
    height: number;
    name: string;
    weight: number
    stats: []
}
const Card: FunctionComponent<CardProps> = (props)=>{
    const atributs = useRef<HTMLDivElement>(null);
    const [infos, setInfo] = useState<Infos>()
    const [show, setShow] = useState<string>("none")
    useEffect(()=>{
        fetch(props.url).then((res)=>{
            if(res.ok){
                return res.json()
            } else {
                alert("Fim da lista")
            }
        })
        .then((json)=>{
            setInfo(()=>json)
            atributs.current!.innerHTML = ""
            json.types.forEach((types:{type:{name:string}})=>{
                atributs.current!.innerHTML += `<div class="tipe ${types["type"].name}">${types["type"].name}</div>`
            })
        })
    },[props.url])

    function showModal(){
        if(show==="none"){
            setShow("flex")
        } else {
            setShow("none")
        }
    }
  return (
    <CardDiv onClick={showModal}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.url.substring(34,40).replace("/", "")}.png`} alt={`${props.name}`}/>
        <h1>{props.name}</h1>
        <div ref={atributs} className="tipes"></div>
        <Modal height={infos?.height} name={infos?.name} stats={infos?.stats} weight={infos?.weight} display={show} id={props.url.substring(34,40).replace("/", "")}></Modal>
    </CardDiv>
  )
}

export default Card