"use client"

import { useState } from "react";
import LimitOrder from "./LimitOrder";
import MarketOrder from "./MarketOrder";
export default function TradingOrder() {

  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pt-10 pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">BTCUSDT</h5>

        <div className="flex rounded-md shadow-xs" role="group">
          <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Short
          </button>
          <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Long
          </button>
        </div>

        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li className="me-2" role="presentation">
              <button className="inline-block p-4 border-b-2 rounded-t-lg" 
              id="limit-tab" data-tabs-target="#limit" type="button" role="tab" 
              aria-controls="profilimitle" aria-selected="false"
              onClick={() => setSelectedTab("limit")}
              >Limit</button>
            </li>
            <li className="me-2" role="presentation">
              <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
              id="market-tab" data-tabs-target="#market" type="button" role="tab" 
              aria-controls="market" aria-selected="false"
              onClick={() => setSelectedTab("market")}
              >Market</button>
            </li>
            <li className="me-2" role="presentation">
              <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
              id="settings-tab" data-tabs-target="#settings" type="button" role="tab" 
              aria-controls="settings" aria-selected="false"
              onClick={() => setSelectedTab("settings")}
              >TP/SL</button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${selectedTab === "limit" ? "" : "hidden"}`}
            id="limit"
            role="tabpanel"
            aria-labelledby="limit-tab">
                <LimitOrder />
          </div>
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${selectedTab === "market" ? "" : "hidden"}`}
            id="market"
            role="tabpanel"
            aria-labelledby="market-tab">
                <MarketOrder />
          </div>
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${selectedTab === "settings" ? "" : "hidden"}`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab">
            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
