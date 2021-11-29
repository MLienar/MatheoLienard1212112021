/**
 * Gets daily activity from API and sends it to BarChart component to display
 * 
 * ## Get Activity from API
 * Get activity data from API on component Load, set it in state. Id is mocked in current version
 * 
 * ```tsx
 *    useEffect(() => {
 *      ProfileService.getActivity(18)
 *      .then((response:any) => {
 *           setActivity(response.data.data)
 *       })
 *       }, []) 
 * ``` 
 * @param integer User Id that we pass to the API
 * @return Activity for the current user  
 * 
 * ## Display LineChart 
 * ```tsx
 *  <Dashboard>
 *          { activity && (
 *               <LineChart activity={ activity.sessions} />
 *           )
 *           }
*       </Dashboard>
 * ```
 * 
 * @module DailyActivity
 */

import ProfileService from "../../../services/profile.service";
import { UserActivity } from "../../../utils/Interfaces";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";

/**
 * Component that sets activity in state and generates BarChart afterwards
 *
 * @component
 */

const Dashboard = styled.div`
    grid-area: 1 / 1 / 2 / 4;
    background: var(--grey);
    padding: 50px 50px 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface Props {
    handleError: any,
}

export default function DailyActivity (props:Props) {
    const [ activity, setActivity ] = useState<UserActivity>()

    useEffect(() => {
        ProfileService.getActivity(18)
        .then((response:any) => {
            setActivity(response.data.data)
        }, (err) => {
            props.handleError(true)
        })
        }, [props]) 


    return(
        <Dashboard>
            { activity && (
            <BarChart sessions={ activity.sessions }/>
            ) }
        </Dashboard>
    )
}