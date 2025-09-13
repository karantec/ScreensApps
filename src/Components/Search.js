import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  MapPin,
  Clock,
  Shield,
  Users,
  ShoppingCart,
  Monitor,
  Heart,
} from "lucide-react";

export default function BusinessSearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const businesses = [
    {
      id: 1,
      name: "Agranj Food Processors",
      description: "Premium food processing services",
      status: "Open",
      statusColor: "bg-green-500",
      category: "Private",
      categoryIcon: Shield,
      categoryColor: "text-gray-600",
      distance: "2.3 km away",
      hours: "Open until 8:00 PM",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      name: "Agranj Food Products 1",
      description: "Quality food products supplier",
      status: "Open",
      statusColor: "bg-green-500",
      category: "Public",
      categoryIcon: Users,
      categoryColor: "text-blue-600",
      distance: "1.8 km away",
      hours: "Open until 7:00 PM",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 3,
      name: "Agranj Super Store",
      description: "One-stop shopping destination",
      status: "Closed",
      statusColor: "bg-red-500",
      category: "Public",
      categoryIcon: Users,
      categoryColor: "text-blue-600",
      distance: "0.5 km away",
      hours: "Opens tomorrow at 9:00 AM",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 4,
      name: "Agranj Tech Solutions",
      description: "Innovative software development",
      status: "Open",
      statusColor: "bg-green-500",
      category: "Public",
      categoryIcon: Users,
      categoryColor: "text-blue-600",
      distance: "5.1 km away",
      hours: "Open until 6:00 PM",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      id: 5,
      name: "Agranj Health Clinic",
      description: "Comprehensive medical services",
      status: "Open",
      statusColor: "bg-green-500",
      category: "Private",
      categoryIcon: Shield,
      categoryColor: "text-gray-600",
      distance: "0.5 km away",
      hours: "Open until 9:00 PM",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  const getBusinessIcon = (name) => {
    if (name.includes("Food")) return Users;
    if (name.includes("Super Store")) return ShoppingCart;
    if (name.includes("Tech")) return Monitor;
    if (name.includes("Health")) return Heart;
    return Users;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 text-white px-6 py-4">
        <h1 className="text-xl font-semibold text-center">Search Business</h1>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search business..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
          />
        </div>
      </div>

      {/* Business List */}
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {businesses.map((business) => {
            const BusinessIcon = getBusinessIcon(business.name);
            const CategoryIcon = business.categoryIcon;

            return (
              <div
                key={business.id}
                className={`${business.bgColor} rounded-lg p-4 border border-gray-200`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    {/* Business Icon */}
                    <div
                      className={`w-10 h-10 ${business.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <BusinessIcon
                        className={`w-5 h-5 ${business.iconColor}`}
                      />
                    </div>

                    {/* Business Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {business.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {business.description}
                      </p>

                      {/* Status and Category */}
                      <div className="flex items-center space-x-3 mb-2">
                        <span
                          className={`px-2 py-1 ${business.statusColor} text-white text-xs font-medium rounded-full`}
                        >
                          {business.status}
                        </span>
                        <div className="flex items-center space-x-1">
                          <CategoryIcon
                            className={`w-4 h-4 ${business.categoryColor}`}
                          />
                          <span
                            className={`text-xs font-medium ${business.categoryColor}`}
                          >
                            {business.category}
                          </span>
                        </div>
                      </div>

                      {/* Distance and Hours */}
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">
                            {business.distance}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">
                            {business.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
