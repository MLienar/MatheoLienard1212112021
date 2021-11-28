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

export default function DailyActivity () {
    const [ activity, setActivity ] = useState<UserActivity>()

    useEffect(() => {
        ProfileService.getActivity(18)
        .then((response:any) => {
            setActivity(response.data.data)
        })
        }, []) 


    return(
        <Dashboard>
            { activity && (
            <BarChart sessions={ activity.sessions }/>
            ) }
        </Dashboard>
    )
}