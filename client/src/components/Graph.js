import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const Graph = ({data, widget, xAxis}) => {

    return (
        <ResponsiveLine data={data}
        margin={{ top: 90, right: 50, bottom: 80, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
        axisTop={null}
        axisRight={null}       
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: xAxis(),
            legendOffset: 40,
            legendPosition: 'middle',
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: widget.units,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -30,
                itemWidth: 60,
                itemHeight: 5,
                itemsSpacing: 2,
                symbolSize: 5,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                padding: 5                
            }
        ]}
        />
    )
}

export default Graph