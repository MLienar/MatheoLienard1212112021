import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer  } from "recharts";
import { Activity } from '../../../../utils/Interfaces'



export default function BarChart(props:Activity) {
    const activity = props.sessions
    console.log(activity);

    return(
        <ResponsiveContainer width="100%" height={200}>
            <Chart width={500} height={300} data={ activity }>
            <CartesianGrid strokeDasharray="2 4" vertical={false}/>
            <XAxis />
            <YAxis yAxisId="left" dataKey="kilogram"  domain={['dataMin-1' , 'dataMax + 1']} orientation="left" tickCount={3}/>
            <YAxis yAxisId="right" dataKey="calories"  domain={[0 , 'dataMax + 40']} orientation="right" tickCount={3} hide/>
            <Tooltip />
            <Legend verticalAlign="top" align="right"/>
            <Bar yAxisId="left" barSize={7} dataKey="kilogram" fill="#282D30" unit="kg" radius={[5, 5, 0, 0]}/> 
            <Bar yAxisId="right" barSize={7} dataKey="calories" fill="#E60000" unit="kCal" radius={[5, 5, 0, 0]}/> 
        </Chart>
        </ResponsiveContainer>
        
    )
    
}