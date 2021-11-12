import styled from "styled-components"

interface Props {
    icon: string,
    alt: string
}

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: clamp(40px, 4vw, 50px);
    width: clamp(40px, 4vw, 50px);
    border-radius: 5px;
    margin: 10px 0;
`

const Img = styled.img`
    height: 50%;
    width: auto;
`

export default function SidebarIcons(props:Props) {
    console.log(props.icon);
    
    return(
        <Icon>
            <Img src={ props.icon } alt={ props.alt } />
        </Icon>
    )
}