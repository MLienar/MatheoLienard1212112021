/**
 * Calls API to get Physical Stats and pass them to the SpiderWeb component
 * 
 * ## API call
 * 
 * ```tsx
 *   useEffect(() => {
 *       profileService.getPerformance(18)
 *       .then((response:any) => {
 *           const objectToHandle = response.data.data
 *           const finalData:PerformancesObj = {
 *               performances: []
 *           }
 *           ...
 *           setPerformance(finalData)
 *       })
 *   }, [])
 * ```
 * 
 * After getting data from the API, we need to create an array with one object per type of performance
 * 
 * ```tsx
 * for (const individualPerformance of objectToHandle.data) {
 *   const key = individualPerformance.kind
 *   if (key in objectToHandle.kind) {
 *     individualPerformance.kind = objectToHandle.kind[key]
 *     finalData.performances.push(individualPerformance)
 *    }
 *  }
 * setPerformance(finalData)
 * ```
 * 
 * @module PhysicalStats
 */

import profileService from "../../../services/profile.service";
import { useState, useEffect } from "react"
import SpiderWeb from "./SpiderWeb";
import styled from "styled-components";
import { PerformancesObj } from "../../../utils/Interfaces";

const Container = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 5px;
    background: #282D30;
`

export default function PhysicalStats() {
    const [ performance, setPerformance ] = useState<PerformancesObj>()

    useEffect(() => {
        profileService.getPerformance(18)
        .then((response:any) => {
            const objectToHandle = response.data.data
            const finalData:PerformancesObj = {
                performances: []
            }
            for (const individualPerformance of objectToHandle.data) {
                const key = individualPerformance.kind
                if (key in objectToHandle.kind) {
                    individualPerformance.kind = objectToHandle.kind[key]
                    finalData.performances.push(individualPerformance)
                }
            }
            setPerformance(finalData)
        })
    }, [])

    return(
        <Container>
            { performance && (
                <SpiderWeb performances={ performance.performances }/>
            ) }
        </Container>
    )
}

