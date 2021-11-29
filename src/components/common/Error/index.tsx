import styled from "styled-components";
import { Error as Img } from "../../../assets/img";

const ErrorDiv = styled.div`
    display:flex;
    justify-content: center;
    background: white;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
`

const ErrorImg = styled.img`
    width: 50px;
    height: auto;
`

const ErrorTitle = styled.h1`
    font-size: 3rem;
    color: var(--red);
    margin: 2vh 0;
`

const ErrorMessage = styled.p`
    font-size: 1.5rem;
    color: black;
`

interface Props {
    errorMessage: string
}

export default function ErrorComponent (props:Props) {
    return(
        <ErrorDiv>
            <ErrorImg src={ Img } alt="Error" />
            <ErrorTitle>Oups !</ErrorTitle>
            { props &&
                <ErrorMessage>{props.errorMessage}</ErrorMessage>
            }
        </ErrorDiv>
    )
}