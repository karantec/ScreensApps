import React from "react";
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
} from "lucide-react";

export default function WRIOWholesaleScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-6 py-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
              <Menu className="w-6 h-6" />
            </div>
            <div className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors cursor-pointer">
              <Heart className="w-6 h-6" />
            </div>
          </div>

          <div className="text-center">
            {/* Enhanced Logo */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-white rounded-full mx-auto shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-yellow-600 fill-current" />
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
        {/* Featured Products Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our best-selling wholesale items
          </p>
        </div>

        {/* Action Cards Row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
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

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Agroj Food Products */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-current text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              Agroj Food Products
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Premium quality food products for wholesale distribution. Trusted
              by 1000+ retailers.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-800">₹299</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹399
                </span>
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-semibold">
                25% OFF
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>

          {/* National Chilkti */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-current text-yellow-400"
                  />
                ))}
                <Star className="w-3 h-3 text-gray-300" />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              National Chilkti
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Delicious traditional snacks perfect for your retail stores. High
              demand product.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-800">₹159</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹199
                </span>
              </div>
              <div className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-semibold">
                HOT DEAL
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Discover More */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              Discover More
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Explore our expanding catalog of 500+ wholesale products across
              categories.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2">
              <span>Browse All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section */}
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

      {/* Enhanced Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-4 shadow-2xl">
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-2 flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-all">
              <Search className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 font-medium">SEARCH</p>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mx-auto mb-2 flex items-center justify-center shadow-lg">
              <Grid3X3 className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-xs text-green-600 font-bold">ACTIVITIES</p>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-2 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
              <Users className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
            </div>
            <p className="text-xs text-gray-600 font-medium">PROFILES</p>
          </div>
        </div>
      </div>
    </div>
  );
}
