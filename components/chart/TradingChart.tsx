"use client";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function TradingChart() {

    const [series, setSeries] = useState([
        {
            data: [
                { x: new Date("2023-10-20").getTime(), y: [5, 12, 8, 11] },
                { x: new Date("2023-10-21").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-22").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-23").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-24").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-25").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-26").getTime(), y: [10, 12, 8, 11] },
                { x: new Date("2023-10-27").getTime(), y: [11, 13, 9, 12] },
                { x: new Date("2023-10-28").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-10-29").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-10-30").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-10-31").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-01").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-02").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-03").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-04").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-05").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-06").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-07").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-08").getTime(), y: [12, 14, 10, 13] },
                { x: new Date("2023-11-09").getTime(), y: [12, 14, 10, 9] },


            ],
        },
    ]);

    const [openPositions, setOpenPositions] = useState([
        { x: new Date("2023-10-26").getTime(), orderPrice: 11.2, quantity: 100 }, // Added quantity
        { x: new Date("2023-10-27").getTime(), orderPrice: 12.8, quantity: 50 }, // Added quantity
    ]);

    const [currentMarketPrice, setCurrentMarketPrice] = useState(13); // Placeholder - fetch from API

    const options: ApexOptions = {
        chart: {
            type: "candlestick",
            height: 350,
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            min: 8,
            max: 15,
        },
        annotations: {
            yaxis: openPositions.map((position) => {
                const pnl =
                    (currentMarketPrice - position.orderPrice) * position.quantity; // P&L calculation
                const labelText = `Order: $${position.orderPrice.toFixed(
                    2
                )}, P&L: $${pnl.toFixed(2)}`;
                return {
                    y: position.orderPrice,
                    borderColor: "#007bff",
                    strokeDashArray: 0,
                    label: {
                        text: labelText,
                        style: {
                            color: "#007bff",
                            background: "#fff",
                        },
                        position: "left",
                    },
                };
            }),
        },
    };
    return <div style={{ width: "100%", height: "100%" }}>
        <ReactApexChart
            options={options}
            series={series}
            type="candlestick"
            height={600}
        />
    </div>;
}

