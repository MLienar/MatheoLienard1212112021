import styled from 'styled-components'

interface Props {
    score: number
}

const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
`
const Score = styled.p`
    font-size: 25px;
    font-weight: 700;
`
const Details = styled.p`
    color: #59656c;
    width: 50%;
    margin-top: 10px;
    font-size: 13px;
`

export default function ScoreText (props:Props) {
    const data = props.score 
    return(
        <Circle>
            <Score>{ data * 100 }%</Score>
            <Details>de votre objectif</Details>
        </Circle>
    )
}