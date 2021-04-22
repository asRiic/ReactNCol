import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import '../assets/css/Chart.css';

const Chart = () => {
    const data = [
        {x: 0,y: 0},
        {x: 1,y: 1},
        {x: 2,y: 3},
        {x: 3,y: 2},
        {x: 4,y: 4.5},
        {x: 5,y: 7},
        {x: 6,y: 6},
        {x: 7,y: 3},
        {x: 8,y: 7},
        {x: 9,y: 8}
    ]
    return(
        <div className="cont">
            <XYPlot height={300} width={400}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="blue" />
                <LineSeries data={data} color="green" />
            </XYPlot>
        </div>
    )
}

export default Chart;