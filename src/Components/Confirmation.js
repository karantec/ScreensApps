import React from "react";
import {
  ArrowLeft,
  Check,
  Clock,
  User,
  MapPin,
  Phone,
  Star,
  Minus,
  Plus,
  CheckCircle,
} from "lucide-react";

export default function OrderConfirmationScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 text-white px-4 py-4 flex items-center space-x-3">
        <ArrowLeft className="w-6 h-6" />
        <h1 className="text-lg font-medium">Order Confirmation</h1>
      </div>

      <div className="px-4 py-6">
        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Order Ready for Confirmation
          </h2>
          <p className="text-sm text-gray-600">
            Please review the details below before confirming
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          {/* Order Details Header */}
          <div className="bg-green-100 px-4 py-3 rounded-t-lg">
            <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Order Details</span>
            </h3>
          </div>

          <div className="p-4">
            {/* Customer Info */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Check In Time</p>
                <p className="text-sm text-gray-600">18 May 2019</p>
                <p className="text-xs text-gray-500">11:30 AM</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-sm text-gray-600">Chennai Juna, Punjab</p>
                <div className="mt-2">
                  <p className="font-medium text-gray-800">Mobile Number</p>
                  <p className="text-sm text-gray-600">+91 9648964896</p>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Business Name</p>
                <p className="text-sm text-gray-600">Navnin Aygin</p>
              </div>
            </div>

            {/* Customer Name */}
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Customer Name</p>
                <p className="text-sm text-gray-600">Indiramma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-green-100 px-4 py-3 rounded-t-lg">
            <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Order Items</span>
            </h3>
          </div>

          <div className="p-4">
            {/* Product Item */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800">
                    Agraj Pallavi Chilli Chips (250g)
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity not specified
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Ordered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    1 - 40
                  </span>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Total */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">
                Order Total
              </span>
              <span className="text-2xl font-bold text-green-600">₹360</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
          <CheckCircle className="w-5 h-5" />
          <span>CONFIRM ORDER</span>
        </button>
      </div>
    </div>
  );
}
