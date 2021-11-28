/**
 * Returns icons in sidebar 
 * @module SidebarIcons
 */

import { ReactElement } from "react"
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

/**
 * Renders an icon based on props.
 *
 * ```tsx
 * <Icon>
 *  <img src={props.url} alt={props.alt} />
 * </Icon>
 * ```
 *
 * The props type is defined as a separate interface 
 * ```
 * interface Props {
 *     icon: the icon url,
 *     alt: the icon alt tag
 * }
 *
 */

export default function SidebarIcons(props:Props) : ReactElement {
    
    return(
        <Icon>
            <Img src={ props.icon } alt={ props.alt } />
        </Icon>
    )
}