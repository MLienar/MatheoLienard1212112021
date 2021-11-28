/**
 * Displays Daily Activity Bar Chart in the top left corner
 * 
 * @module DailyActivity/BarChart
 */

import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer  } from "recharts";
import { Activity } from '../../../../utils/Interfaces'
import { RenderLegend } from "./Legend"
import { RenderTooltip } from "./Tooltip";

export default function BarChart(props:Activity) {
    const activity = props.sessions

    const legendStyle = {
        top: "-25px",
    }

    return(
        <ResponsiveContainer width="100%" height={200}>
            <Chart width={500} height={300} data={ activity } margin={{top: 30}}>
                <CartesianGrid strokeDasharray="2 4" vertical={false} horizontalPoints={[ 28 , 90 ]}/>
                <XAxis />
                <YAxis yAxisId="left" dataKey="kilogram"  domain={['dataMin - 1' , 'dataMax + 1']} orientation="left" tickCount={ 3 } axisLine={ false } tickLine={ false } interval={0}/>
                <YAxis yAxisId="right" dataKey="calories"  domain={[0 , 'dataMax + 40']} orientation="right" tickCount={3} hide/>
                <Tooltip content={RenderTooltip} allowEscapeViewBox={{ x: false, y: true}}/>
                <Legend  content={RenderLegend} wrapperStyle={ legendStyle } />
                <Bar yAxisId="left" barSize={7} dataKey="kilogram" fill="#282D30" unit="kg" radius={[5, 5, 0, 0]} isAnimationActive={true} animationDuration={1000}/> 
                <Bar yAxisId="right" barSize={7} dataKey="calories" fill="#E60000" unit="kCal" radius={[5, 5, 0, 0]} isAnimationActive={true} animationDuration={1300}/> 
            </Chart>
        </ResponsiveContainer>
        
    )
    
}