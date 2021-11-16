import styled from "styled-components";

const LegendContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 5%;
`

const TagList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const Tag = styled.li`
    display: flex;
    align-items: center;
    color: #74798C;
    font-size: 13px;
    margin-left: 20px;
`

interface CircleProps {
    color: string
}


const Circle = styled.div<CircleProps>`
    width: 7px;
    height: 7px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: ${(props) => (props.color)};
`

export const RenderLegend = (props:any) => {
    const { payload } = props;

    for (const entry of payload) {
        entry.dataKey === "kilogram" ? entry.value = "Poids (kg)" : entry.value = "Calories brûlées (kCal)"
    }

    return (
    <LegendContainer>
        <h2>Activité quotidienne</h2>
        <TagList>
        {
          payload.map((entry:any, index:number) => (
            <Tag key={`item-${index}`} ><Circle color={entry.color}/>{entry.value}</Tag>
          ))
        }
      </TagList>
    </LegendContainer>
      
);
}