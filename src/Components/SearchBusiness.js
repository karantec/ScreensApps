import { useState } from "react";
import { ArrowLeft, Search, Image, Plus } from "lucide-react";

const BusinessSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const recentlyUsedBusinesses = [
    {
      id: 1,
      name: "Jet Image Systems",
      type: "Digital Service",
      icon: <Image className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-200",
      iconBg: "bg-green-100",
    },
    {
      id: 2,
      name: "National Restaurant",
      type: "Food & Dining",
      icon: (
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-orange-600 font-bold text-sm">
          NR
        </div>
      ),
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-500",
    },
    {
      id: 3,
      name: "B2C Solutions",
      type: "Business Services",
      icon: (
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-green-600 font-bold text-sm">
          B2C
        </div>
      ),
      bgColor: "bg-green-600",
      iconBg: "bg-green-600",
    },
    {
      id: 4,
      name: "Add Business",
      type: "Create New",
      icon: <Plus className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-100",
      iconBg: "bg-green-100",
      isAddButton: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-8">
          <button className="p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-green-700" />
          </button>
          <h1 className="text-xl font-semibold text-green-800">
            Search Business
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Business Name"
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
                Search
              </div>
            </button>
          </div>
        </div>

        {/* Recently Used Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-medium text-green-800 mb-6">
            Recently Used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recentlyUsedBusinesses.map((business) => (
              <div
                key={business.id}
                className={`${
                  business.bgColor
                } rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                  business.isAddButton
                    ? "border-2 border-dashed border-green-300 hover:border-green-400"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 ${
                      business.iconBg
                    } rounded-xl flex items-center justify-center ${
                      business.isAddButton ? "border border-green-300" : ""
                    }`}
                  >
                    {business.icon}
                  </div>

                  {/* Business Info */}
                  <div className="text-center">
                    <h3
                      className={`font-medium text-sm mb-1 ${
                        business.isAddButton
                          ? "text-green-700"
                          : business.id === 2
                          ? "text-white"
                          : business.id === 3
                          ? "text-white"
                          : "text-green-800"
                      }`}
                    >
                      {business.name}
                    </h3>
                    <p
                      className={`text-xs ${
                        business.isAddButton
                          ? "text-green-600"
                          : business.id === 2
                          ? "text-orange-100"
                          : business.id === 3
                          ? "text-green-100"
                          : "text-green-600"
                      }`}
                    >
                      {business.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State for Search Results */}
      {searchQuery && (
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              No businesses found
            </h3>
            <p className="text-gray-500">
              Try searching with different keywords
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSearchScreen;
