import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Image,
  Plus,
  Home,
  ShoppingBag,
  User,
  Settings,
} from "lucide-react";

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
      icon: <div className="w-8 h-8 text-green-600">NR</div>,
      bgColor: "bg-green-200",
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      name: "B2C Solutions",
      type: "Business Services",
      icon: <div className="w-8 h-8 text-green-600">B2C</div>,
      bgColor: "bg-green-200",
      iconBg: "bg-green-100",
    },
    {
      id: 4,
      name: "Add Business",
      type: "Create New",
      icon: <Plus className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-200",
      iconBg: "bg-green-100",
      isAddButton: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex flex-col">
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
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center"></button>
          </div>
        </div>

        {/* Recently Used Section */}
        <div className="max-w-4xl mx-auto pb-24">
          {" "}
          {/* padding bottom for footer space */}
          <h2 className="text-lg font-medium text-green-800 mb-6">
            Recently Used
          </h2>
          {/* ✅ 2 per row on mobile, 4 per row on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    <h3 className="font-medium text-black text-sm mb-1">
                      {business.name}
                    </h3>
                    <p className="font-medium text-black text-sm mb-1">
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
        <div className="max-w-4xl mx-auto px-4 mt-8 pb-24">
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

      {/* ✅ Footer Menu */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200">
        <div className="grid grid-cols-4 text-center text-sm">
          <button className="flex flex-col items-center py-3 text-green-600">
            <Home className="w-5 h-5 mb-1" />
            Home
          </button>
          <button className="flex flex-col items-center py-3 text-gray-600 hover:text-green-600">
            <ShoppingBag className="w-5 h-5 mb-1" />
            My Orders
          </button>
          <button className="flex flex-col items-center py-3 text-gray-600 hover:text-green-600">
            <User className="w-5 h-5 mb-1" />
            My Account
          </button>
          <button className="flex flex-col items-center py-3 text-gray-600 hover:text-green-600">
            <Settings className="w-5 h-5 mb-1" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSearchScreen;
