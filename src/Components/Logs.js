import { ArrowLeft, Calendar } from "lucide-react";
import { useState } from "react";

export default function ViewLogsScreen() {
  const [fromDate, setFromDate] = useState("29 Jun 2025");
  const [toDate, setToDate] = useState("27 Jul 2025");

  const logEntries = [
    {
      id: "BZCHEW-610",
      type: "Business",
      status: "Waiting",
      date: "23 Jul 2025 12:13 am",
      amount: "Total: 20",
    },
    {
      id: "BZCHEW-609",
      type: "Business",
      status: "Waiting",
      date: "23 Jul 2025 12:13 am",
      amount: "Total:30",
    },
    {
      id: "BZCHEW-605",
      type: "Business",
      status: "Confirmed",
      date: "18 Jul 2025 03:05 pm",
      amount: "Total:63",
    },
    {
      id: "BZCHEW-604",
      type: "Business",
      status: "Cancelled",
      date: "03 Jul 2025 12:14 pm",
      amount: "Total:153",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "text-orange-600 bg-orange-100";
      case "Confirmed":
        return "text-green-600 bg-green-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-500 text-white px-4 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center max-w-7xl mx-auto">
          <ArrowLeft className="w-5 h-5 mr-3 lg:w-6 lg:h-6" />
          <h1 className="text-base lg:text-xl font-medium">View Logs</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-sm mx-auto lg:max-w-none bg-white min-h-screen lg:min-h-0">
        <div className="lg:max-w-7xl lg:mx-auto lg:p-8">
          {/* Date Filter Section */}
          <div className="px-4 py-4 lg:p-8 lg:bg-white lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100 lg:mb-8">
            <div className="lg:flex lg:justify-between lg:items-center lg:space-x-8">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900 mb-0">
                Filter Logs
              </h2>
              <div className="flex space-x-4 lg:space-x-8">
                {/* From Date */}
                <div className="flex-1 lg:flex-none">
                  <label className="block text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2">
                    From Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full lg:w-48 text-sm lg:text-base font-medium text-gray-900 bg-gray-50 lg:bg-white border border-gray-200 rounded-lg px-3 py-2 lg:px-4 lg:py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      readOnly
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                </div>

                {/* To Date */}
                <div className="flex-1 lg:flex-none">
                  <label className="block text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2">
                    To Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full lg:w-48 text-sm lg:text-base font-medium text-gray-900 bg-gray-50 lg:bg-white border border-gray-200 rounded-lg px-3 py-2 lg:px-4 lg:py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      readOnly
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logs Section */}
          <div className="lg:bg-white lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100">
            <div className="hidden lg:block lg:p-8 lg:pb-4">
              <h2 className="text-2xl font-bold text-gray-900">Order Logs</h2>
              <p className="text-gray-600 mt-2">
                Recent business orders and their status
              </p>
            </div>

            {/* Log Entries */}
            <div className="divide-y divide-gray-200 lg:px-8 lg:pb-8">
              {logEntries.map((entry, index) => (
                <div
                  key={entry.id}
                  className="px-4 lg:px-0 py-4 lg:py-6 flex items-center space-x-3 lg:space-x-6 hover:bg-gray-50 lg:rounded-lg lg:transition-colors lg:border lg:border-transparent lg:hover:border-gray-200 lg:hover:shadow-md lg:mb-4"
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 lg:shadow-lg">
                    <span className="text-white text-xs lg:text-lg font-bold">
                      JA
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm lg:text-xl font-bold text-gray-900">
                            {entry.type}
                          </span>
                        </div>
                        <p className="text-xs lg:text-base font-medium text-gray-600 mb-1 lg:mb-2">
                          {entry.id}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-600">
                          {entry.date}
                        </p>
                        <span
                          className={`text-xs lg:text-sm px-2 py-1 rounded-full font-medium ${getStatusColor(
                            entry.status
                          )}`}
                        >
                          {entry.status}
                        </span>
                      </div>

                      <div className="mt-2 lg:mt-0 lg:text-right lg:ml-6">
                        <p className="text-sm lg:text-lg font-bold text-emerald-600">
                          {entry.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-emerald-500 text-white px-4 py-3">
        <div className="flex justify-between items-center text-sm">
          <span>Total Orders: 4</span>
          <span>Total Amount: 246</span>
        </div>
      </div>

      {/* Bottom Summary - Desktop */}
      <div className="hidden lg:block lg:max-w-7xl lg:mx-auto lg:px-8 lg:pb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Summary</h3>
              <div className="flex space-x-8">
                <div>
                  <p className="text-emerald-100 text-sm">Total Orders</p>
                  <p className="text-3xl font-bold">4</p>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Total Amount</p>
                  <p className="text-3xl font-bold">₹246</p>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Date Range</p>
                  <p className="text-lg font-semibold">
                    {fromDate} - {toDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white text-right">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-xs text-emerald-100">Waiting</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-xs text-emerald-100">Confirmed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-xs text-emerald-100">Cancelled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
