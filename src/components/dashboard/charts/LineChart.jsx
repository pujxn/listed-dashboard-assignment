import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"


const LineChart = ({ userData, guestData }) => {

    const keys = Object.keys(userData)

    return (
        <Line data={{
            labels: keys,
            datasets: [
                {
                    label: "User",
                    data: keys.map((ele) => userData[ele])
                },
                {
                    label: "Guest",
                    data: keys.map((ele) => guestData[ele])
                }
            ]
        }}
            options={{
                responsive: true,
                // legend: {
                //     position: right
                // }
            }}
        />
    )
}

export default LineChart;