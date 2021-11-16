import styled from "styled-components";

const Container = styled.div`
    background: white;
    padding: 7px;
`

export const RenderTooltip = (props:any) => {
    const { payload } = props;
    
    return(
        <Container>
            { payload && payload.length && (
                  <p>{payload[0].payload.sessionLength} min</p>
            ) }
          
        </Container>
    )
}