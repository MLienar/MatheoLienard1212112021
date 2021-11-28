import { useState, useEffect } from "react"
import ProfileService from "../../../services/profile.service";
import { AverageSessions } from "../../../utils/Interfaces";
import LineChart from "./LineChart";
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: var(--red);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 0 5px;
`

const Title = styled.h2`
    position: absolute;
    top: 10%;
    left: 10%;
    color: white;
    opacity: 0.5;
    width: 60%;
`

export default function AverageSession() {
    const [ sessions, setSessions ] = useState<AverageSessions>()

    /**
     * Get sessions data from API on component Load, set it in state
     * @param { id } integer
     * @return { sessions } 
     */
    
    useEffect(() => {
        ProfileService.getSessions(18)
        .then((response:any) => {
            setSessions(response.data.data)
        })
        }, []) 


    return(
        <Container>
            <Title>Durée moyenne des sessions</Title> 
            { sessions && (
                <LineChart sessions={ sessions.sessions } />
            )
            }
        </Container>
    )
}