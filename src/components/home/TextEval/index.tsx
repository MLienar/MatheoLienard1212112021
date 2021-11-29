/**
 * Component that displays yesterday's evaluation on top of the dashboard
 * For now, its static 
 * 
 * @module TextEval
 */

import styled from 'styled-components'

const Text = styled.p`
    font-weight: 400;
    margin-top: 3vh;
`

export default function TextEval () {
    return(
        <Text>Félicitations ! Vous avez explosé vos objectifs hier 👏</Text>
    )
}