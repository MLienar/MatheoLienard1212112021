/**
 * Gets today's performance score from the API and sends it to RadialBarChart component
 * 
 * ## Get data from API
 * 
 * User ID is static in this version
 * 
 * ```tsx
 *     useEffect(() => {
 *       ProfileService.getUser(18)
 *           .then((response:any) => {
 *               setScore(response.data.data.score)                
 *           })
 *   }, [])
 * ```
 * 
 * @module TodayScore
 */

import { useState, useEffect } from "react"
import ProfileService from "../../../services/profile.service"
import styled from "styled-components"
import RadialBarChart from "./RadialBarChart"
import ScoreText from "./ScoreText"

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: var(--grey);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 0 5px;
`

const Title = styled.h2`
    position: absolute;
    top: 10%;
    left: 10%;
`

const DummyDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export default function TodayScore () {
    const [score, setScore ] = useState(0)

    useEffect(() => {
        ProfileService.getUser(18)
            .then((response:any) => {
                setScore(response.data.data.score)                
            })
    }, [])

    return(
        <Container>
            <Title>Score</Title>
            { score && (
            <DummyDiv>
                <RadialBarChart score={score}/>
                <ScoreText score={score}/>
            </DummyDiv>
            )}
        </Container>
    )
}