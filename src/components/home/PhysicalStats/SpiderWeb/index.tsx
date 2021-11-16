import { PerformancesObj } from "../../../../utils/Interfaces";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer} from "recharts";

export default function SpiderWeb(props:PerformancesObj) {
    const data = props.performances

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="70%"  startAngle={390} endAngle={30} cx="50%" cy="50%">
                <PolarGrid  />
                <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} hide={true} tick={{fill: 'white' , fontSize: '11px'}} />
                <PolarRadiusAxis dataKey="value" tick={false} angle={30} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}