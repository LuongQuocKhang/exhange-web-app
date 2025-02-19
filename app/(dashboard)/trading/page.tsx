import TradingChart from "@/components/chart/TradingChart";
import OrderTable from "@/components/order/OrderTable";
import TradingOrder from "@/components/trading/TradingOrder";

export default function TradingPage() {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-3/4">
                <div className="w-full" style={{ height: "700px" }}>
                    <TradingChart />
                </div>
                <div className="w-full">
                    <OrderTable />
                </div>
            </div>

            <div className="flex-1">
                <TradingOrder />
            </div>
        </div>
    )
}