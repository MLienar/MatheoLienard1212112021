import styled from "styled-components"

interface Props {
    type: string,
    amount: number,
    icon: string,
    alt: string,
    unit: string,
    color: string
}

const DataBlock = styled.div`
    background: var(--grey);
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 24px;
    border-radius: 5px;
`

const ImgBlock = styled.div`
    width: clamp(50px, 7vh, 60px);
    height: clamp(50px, 7vh, 60px);
    padding: 10px;
    background-image: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9));
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
`

const Icon = styled.img`
    width: 40%;
    height: auto;
    z-index: 2;
    filter: opacity(1000%);
    position: absolute;
`

const TextBlock = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 3vw;
`

const Amount = styled.h3`
    font-size: clamp(18px, 1rem + 0.5vw, 22px);
    margin-bottom: 5px;
`

const Descriptor = styled.p`
    font-size: clamp(10px, 0.5rem + 0.8vw, 13px);
    color: #74798C;
    margin-top: 5px;
`

export default function KeyDataBlock (props: Props) {
    const iconBackground = {
        backgroundColor: props.color
    }
    const numberWithCommas = props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return(
        <DataBlock>
            <ImgBlock style={iconBackground}>
                <Icon src={props.icon} alt={props.alt} />
            </ImgBlock>
            <TextBlock>
                <Amount>{numberWithCommas} {props.unit}</Amount>
                <Descriptor>{ props.type }</Descriptor>
            </TextBlock>
        </DataBlock>
    )
}