/**
 * Component that displays userName on top of the dasboard
 * 
 * ## API call
 * 
 * Get username from API (user Id is fixed in this version)
 * 
 * ```tsx
 *     useEffect(() => {
 *       ProfileService.getUser(18)
 *           .then((response:any) => {
 *               setUser(response.data.data)                
 *           })
 *   }, [])
 * ```
 * 
 * @module UserGreeting
 */

import { User } from "../../../utils/Interfaces";
import ProfileService from "../../../services/profile.service";
import { useState, useEffect } from "react"
import styled from 'styled-components'

const HelloThere = styled.h1`
    font-size: clamp(30px, 2rem + 1.5vh, 45px);
`

const Name = styled.span`
    color: var(--red);
    margin-left: 10px;
`

interface Props {
}

export default function UserGreeting(props:Props) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        ProfileService.getUser(18)
            .then((response:any) => {
                setUser(response.data.data)                
            })
    }, [])

    return(
        
        <HelloThere>Bonjour 
            { user && user.id && (
            <Name>{ user.userInfos.firstName }</Name>
            )
            }
        </HelloThere>
    )
    
}