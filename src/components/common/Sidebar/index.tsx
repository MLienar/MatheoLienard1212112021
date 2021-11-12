import styled from "styled-components"
import SidebarIcons from "./SidebarIcons"

import {
    Yoga,
    Swim, 
    Bike, 
    Fitness
} from "../../../assets/img/index"

const SidebarContainer = styled.nav`
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    background: var(--black);
    padding: 5vh clamp(10px, 1.5vw, 20px);
    color: white;
`

const Copyright = styled.p`
    writing-mode: vertical-rl ;
    transform: rotate(180deg);
    font-size: clamp(13px, 0.5rem + 0.5vh, 17px);
    margin-top: 20vh;
`

export default function Sidebar() {
    return(
        <SidebarContainer>
            <SidebarIcons icon={Yoga} alt="Yoga" />
            <SidebarIcons icon={Swim} alt="Swim" />
            <SidebarIcons icon={Bike} alt="Bike" />
            <SidebarIcons icon={Fitness} alt="Fitness" />
            <Copyright>Copyright, SportSee 2020</Copyright>
        </SidebarContainer>
    )
}