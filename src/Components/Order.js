import { Check, MapPin, User, Phone, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function OrderConfirmation() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-500 text-white py-3 px-4">
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium">Order Confirmation</span>
        </div>
      </div>

      <div className="w-full sm:max-w-sm sm:mx-auto lg:max-w-2xl bg-white min-h-screen">
        {/* Success Section */}
        <div className="text-center pt-6 pb-4 px-4">
          <h2 className="text-lg font-medium text-gray-900 mb-1">
            Order Ready for Confirmation
          </h2>
          <p className="text-gray-500 text-sm">
            Please review the details before placing your order
          </p>
        </div>

        {/* Main Content */}
        <div className="px-4 space-y-4">
          {/* Order Details Section */}
          <div className="bg-emerald-50 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div className="bg-emerald-100 px-4 py-2.5 flex items-center">
              <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <span className="text-emerald-800 font-medium text-sm">
                Order Details
              </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4 space-y-4 sm:space-y-4 lg:space-y-0">
              {/* Check-In Time */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <User className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Check-In Time
                  </p>
                  <p className="text-xs text-gray-600">16 May 2019</p>
                  <p className="text-xs text-gray-600">3:30 PM</p>
                </div>
              </div>

              {/* Business Name */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Business Name
                  </p>
                  <p className="text-xs text-gray-600">Navnit Agro</p>
                </div>
              </div>

              {/* Customer Name */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Customer Name
                  </p>
                  <p className="text-xs text-gray-600">Aarohitech</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <MapPin className="w-3 h-3 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Address
                  </p>
                  <p className="text-xs text-gray-600">Johnson John, Punjab</p>
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Phone className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Mobile Number
                  </p>
                  <p className="text-xs text-gray-600">+91 7739860177</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items Section */}
          <div>
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <span className="text-emerald-800 font-medium text-sm">
                Order Items
              </span>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <span className="text-sm text-gray-900">
                    Agly Plate Pack Chemicals (50g)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-700">2 × ₹50 = ₹100</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <span className="text-xs text-gray-500">
                  Category: Chemicals
                </span>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-lg px-4 py-3 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">
              Sub Total (2 Items)
            </span>

            <span className="text-lg font-bold text-emerald-600">
              ₹{(350 * quantity).toLocaleString()}
            </span>
          </div>
          {/* Checkout Section */}
          <div className="bg-emerald-50 rounded-lg overflow-hidden">
            <div className="bg-emerald-100 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <span className="text-emerald-800 font-medium text-sm">
                  Checkout
                </span>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">
                Order Total
              </span>
              <span className="text-lg font-bold text-emerald-600">
                ₹{(350 * quantity).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Order Total */}

          {/* Confirm Order Button */}
          <div className="pt-4 pb-6">
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center">
              <Check className="w-4 h-4 mr-2" />
              CONFIRM ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
