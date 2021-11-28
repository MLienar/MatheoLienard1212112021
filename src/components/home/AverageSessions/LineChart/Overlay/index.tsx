
import styled from "styled-components"

const Background = styled.div<Props>`
        height: 100%;
        width: 20px;
        z-index: 1;
        background: #000;
        opacity: 0.1;
    `

interface Props {
    number: number
}

export default function Overlay (props:Props) {
    const number = props.number
    return(
        <Background number={number} /> 
    )
} 