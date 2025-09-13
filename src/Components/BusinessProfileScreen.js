import React from "react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Award,
  ShoppingCart,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function BusinessProfileScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Agranj Food Products</h1>
              <p className="text-green-100 text-sm flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Premium food products since 1985</span>
              </p>
            </div>
          </div>
          <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
            <Heart className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Premium Brands Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Premium Brands
            </h2>
            <p className="text-gray-600">
              Crafted with tradition, delivered with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Pallavi's Spices */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl font-bold mb-1">Pallavi's</h3>
                <h3 className="text-2xl font-bold mb-3">Spices</h3>
                <p className="text-orange-100 text-sm font-medium">
                  Authentic Spices & Masala
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-orange-200"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bahugunj Traditional Foods */}
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "serif" }}
                >
                  बहुगुणज
                </h3>
                <p className="text-red-100 text-sm font-medium">
                  Traditional Homemade Foods
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-red-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Brand Quality Indicators */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-orange-600">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-semibold">Premium Quality</p>
                  <p className="text-sm text-gray-600">Hand-selected spices</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-red-600">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Authentic Recipes</p>
                  <p className="text-sm text-gray-600">Traditional methods</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Trusted Brand</p>
                  <p className="text-sm text-gray-600">40+ years legacy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>ORDER NOW</span>
            </button>
            <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>SCHEDULE ORDER</span>
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>VIEW CATALOG</span>
            </button>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600">We're here to serve you better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Everbloom Plaza, 2764 El Niri St,
                  <br />
                  11th Floor, Suite 22
                  <br />
                  Los Angeles, CA
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  Contact Info
                </h3>
                <p className="text-green-600 font-semibold text-lg hover:text-green-700 cursor-pointer transition-colors">
                  +91 9832868553
                </p>
                <p className="text-gray-500 text-sm">Available 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
                <p className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer transition-colors">
                  agranj@gmail.com
                </p>
                <p className="text-gray-500 text-sm">
                  Quick response guaranteed
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  Website
                </h3>
                <p className="text-indigo-600 font-semibold hover:text-indigo-700 cursor-pointer transition-colors">
                  www.agranj.com
                </p>
                <p className="text-gray-500 text-sm">
                  Online catalog & ordering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
