/**
 * Displays the tooltip on the BarChart
 * @module DailyActivity/BarChart-Tooltip
 */

import styled from "styled-components";

const Container = styled.div`
    background: var(--red);
    padding: 7px;
    color: white;
`

const ListItem = styled.li`
    font-size: 11px;
    padding: 15px 10px;
`

export const RenderTooltip = (props:any) => {
    const { payload } = props;
    
    return(
        <Container>
            { payload && payload.length && (
                  <ul>
                    <ListItem>{payload[0].payload.kilogram}kg</ListItem>
                    <ListItem>{payload[0].payload.calories}kCal</ListItem>
                  </ul>
            ) }
          
        </Container>
    )
}