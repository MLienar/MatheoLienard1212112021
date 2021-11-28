import { ResponsiveContainer, RadialBarChart as Chart, RadialBar, PolarAngleAxis } from 'recharts'


interface Props {
    score: number
}

export default function RadialBarChart (props:Props) {

    const data = [{
        score: props.score
    }]

    return(
        <ResponsiveContainer width="100%" height="100%">
            {/* <Chart data={data} outerRadius="80%" innerRadius="65%" startAngle={230} endAngle={-130} clockWise={true} > */}
            <Chart data={data} outerRadius="80%" innerRadius="65%" startAngle={230} endAngle={-130} >
                <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} fill="#FBFBFB"/>
                <RadialBar dataKey="score" angleAxisId={0} fill="red" cornerRadius={5}/>
            </Chart>
        </ResponsiveContainer>
    )
}