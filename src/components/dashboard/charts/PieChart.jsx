import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"


const PieChart = ({ productData }) => {

    const keys = Object.keys(productData)

    return (
        <Pie data={{
            labels: keys,
            datasets: [
                {
                    label: "Sales",
                    data: keys.map((ele) => productData[ele])
                },
                // {
                //     label: "Sales",
                //     data: keys.map((ele) => guestData[ele])
                // }
            ]
        }}
        />
    )
}

export default PieChart;