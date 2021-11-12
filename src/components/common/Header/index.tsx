import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "../../../assets/img/logo.svg"

const HeaderContainer = styled.header`
    display: flex;
    background-color: var(--black);
    justify-content: space-between;
    align-items: center;
    padding: clamp(10px, 1.5vw, 20px) clamp(20px, 3vw, 40px)  clamp(10px, 1.5vw, 20px) clamp(10px, 1.5vw, 20px);
`

const HeaderLink = styled(Link)`
    color: white;
    font-weight: 500;
    text-decoration: none;
`

const LogoImg = styled.img`
    height: clamp(30px, 4vh, 60px)
`


export default function Header () {
    return (
    <HeaderContainer>
        <LogoImg src={Logo} alt="logo" />
        <HeaderLink to="/">Accueil</HeaderLink>
        <HeaderLink to="/">Profil</HeaderLink>
        <HeaderLink to="/">Réglage</HeaderLink>
        <HeaderLink to="/">Communauté</HeaderLink>
    </HeaderContainer>
    )
} 