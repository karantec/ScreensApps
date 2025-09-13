import React, { useState } from "react";
import {
  Menu,
  ShoppingCart,
  Info,
  Search,
  Grid3X3,
  Users,
  Star,
  TrendingUp,
  Award,
  Package,
  Zap,
  Heart,
  Plus,
  ArrowRight,
  Image, // ✅ FIXED import
} from "lucide-react";

export default function WRIOWholesaleScreen() {
  // ✅ Added state for mobile input
  const [mobile, setMobile] = useState("");

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
        <div className="w-8 h-8 text-green-600 font-bold flex items-center justify-center">
          NR
        </div>
      ),
      bgColor: "bg-green-200",
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      name: "B2C Solutions",
      type: "Business Services",
      icon: (
        <div className="w-8 h-8 text-green-600 font-bold flex items-center justify-center">
          B2C
        </div>
      ),
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-6 py-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
              <Menu className="w-6 h-6" />
            </div>
          </div>

          <div className="text-center">
            {/* Enhanced Logo */}
            <div className="relative ">
              <div className="w-24 h-16 bg-white rounded-full mx-auto shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-black mb-2 tracking-tight">WRIO</h1>
            <p className="text-green-100 font-medium">
              Wholesaler Retailer Instant Ordering
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-200">Live</span>
              </div>
              <div className="text-xs text-green-200">•</div>
              <div className="text-xs text-green-200">Trusted Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 pb-24">
        {/* Sign In Card */}
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-8 mb-10">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <Image className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
          </div>

          {/* Mobile Input */}

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors mb-4">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Sign in with Google
            </span>
          </button>

          {/* Admin login */}
          <p className="text-center text-sm text-red-500 cursor-pointer hover:underline">
            Administrator login
          </p>
        </div>

        {/* Featured Products Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our best-selling wholesale items
          </p>
        </div>

        {/* Action Cards Row */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* Product Gallery */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-gray-800">
              Product Gallery
            </p>
            <p className="text-xs text-gray-500 mt-1">Browse catalog</p>
          </div>

          {/* Featured Highlight */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="bg-white text-green-600 px-3 py-1 rounded-lg text-xs font-bold mb-3 inline-block shadow-md">
                ⭐ FEATURED
              </div>
              <p className="text-green-100 text-sm font-medium">
                Premium Quality
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-gray-800">More Products</p>
            <p className="text-xs text-purple-500 mt-1 font-medium">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-3xl font-black text-green-600 mb-1">500+</p>
              <p className="text-sm text-gray-600 font-medium">
                Products Available
              </p>
              <p className="text-xs text-gray-500 mt-1">All categories</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-3xl font-black text-blue-600 mb-1">1000+</p>
              <p className="text-sm text-gray-600 font-medium">
                Happy Retailers
              </p>
              <p className="text-xs text-gray-500 mt-1">Nationwide</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-3xl font-black text-purple-600 mb-1">24/7</p>
              <p className="text-sm text-gray-600 font-medium">
                Instant Ordering
              </p>
              <p className="text-xs text-gray-500 mt-1">Always available</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-3 shadow-2xl">
        <div className="grid grid-cols-4 gap-6">
          {/* Search */}
          <div className="text-center group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mx-auto mb-1 flex items-center justify-center shadow-md group-hover:from-green-200 group-hover:to-green-300 transition-all">
              <Search className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-xs text-green-600 font-bold">Search</p>
          </div>

          {/* My Orders */}
          <div className="text-center group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto mb-1 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
              <ShoppingCart className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 font-bold">My Orders</p>
          </div>

          {/* My Account */}
          <div className="text-center group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto mb-1 flex items-center justify-center group-hover:from-purple-100 group-hover:to-purple-200 transition-all">
              <Users className="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 font-bold">My Account</p>
          </div>

          {/* Settings */}
          <div className="text-center group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto mb-1 flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all">
              <Info className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 font-bold">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
