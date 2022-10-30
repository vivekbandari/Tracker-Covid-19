import  React from 'react';

// Charts
// eslint-disable-next-line no-unused-vars
import  { Chart }  from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


export const Charts = ({dailyData}) =>{
    const lineChart = (
        dailyData.length ?
        (
            <Bar
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed > 0 ? confirmed:0),
                    label:'Infected',
                    borderColor:'#3333ff',
                    backgroundColor:'#3333ff',
                },
                {
                    data:dailyData.map(({recovered})=> recovered > 0 ? recovered:0),
                    label:'Recovered',
                    borderColor:'green',
                    backgroundColor:'green',
                    fill:true,
                },
                {
                    data:dailyData.map(({deceased})=> deceased > 0 ? deceased:0),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'red',
                    fill:true,
                },
                {
                    data:dailyData.map(({firstDose})=> firstDose > 0 ? firstDose:0),
                    label:'At least 1 dose',
                    borderColor:'lightgereen',
                    backgroundColor:'lightgreen',
                    fill:true,
                },
                {
                    data:dailyData.map(({secondDose})=> secondDose > 0 ? secondDose:0),
                    label:'Full Vaccination',
                    borderColor:'orange',
                    backgroundColor:'orange',
                    fill:true,
                },
            ]
            }}
            />
        ):null
    )
    return(
        <div>
            {lineChart}
        </div>
    )
}

