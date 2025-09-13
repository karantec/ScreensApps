import { useState } from "react";
import { ShoppingCart, Star, Plus } from "lucide-react";

const VendorSelectionScreen = () => {
  const [selectedVendors, setSelectedVendors] = useState(new Set());

  const vendors = [
    {
      id: 1,
      name: "Pallavls Spices",
      category: "Grocery",
      rating: 4.1,
      icon: "P",
      color: "bg-orange-400",
    },
    {
      id: 2,
      name: "Sahastrabudhe",
      category: "Grocery",
      rating: 4.0,
      icon: "S",
      color: "bg-red-500",
    },
    {
      id: 3,
      name: "Shree Devashree Foods",
      category: "Grocery",
      rating: 4.2,
      icon: "SD",
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "Rustik Poushtik",
      category: "Grocery",
      rating: 4.3,
      icon: "R",
      color: "bg-orange-400",
    },
  ];

  const smallVendors = [
    { id: 5, name: "Saffron Foods", icon: "S", color: "bg-purple-500" },
    { id: 6, name: "Puri Kachori Bhai", icon: "P", color: "bg-pink-500" },
    { id: 7, name: "Choukta Organic", icon: "C", color: "bg-green-500" },
    { id: 8, name: "Wanderlust Hing", icon: "W", color: "bg-blue-500" },
    { id: 9, name: "Karank Jaggery", icon: "K", color: "bg-yellow-500" },
  ];

  const toggleVendor = (vendorId) => {
    const newSelected = new Set(selectedVendors);
    if (newSelected.has(vendorId)) {
      newSelected.delete(vendorId);
    } else {
      newSelected.add(vendorId);
    }
    setSelectedVendors(newSelected);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-xl font-semibold">Select Vendor</h1>
          <span className="text-green-200 text-sm">9 Vendors Available</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Vendor List */}
        <div className="lg:col-span-2 space-y-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${vendor.color} rounded-lg flex items-center justify-center text-white font-semibold`}
                  >
                    {vendor.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {vendor.name}
                    </h3>
                    <p className="text-sm text-gray-500">{vendor.category}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {vendor.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleVendor(vendor.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedVendors.has(vendor.id)
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  {selectedVendors.has(vendor.id) && (
                    <Plus className="w-3 h-3 rotate-45" />
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Small Vendor Grid */}
          <div className="grid grid-cols-2 gap-4">
            {smallVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 ${vendor.color} rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
                    >
                      {vendor.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {vendor.name}
                      </h3>
                      <p className="text-xs text-gray-500">Grocery</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleVendor(vendor.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedVendors.has(vendor.id)
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-300 hover:border-green-400"
                    }`}
                  >
                    {selectedVendors.has(vendor.id) && (
                      <Plus className="w-2 h-2 rotate-45" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="flex flex-col items-center justify-center py-8 text-gray-400">
              <ShoppingCart className="w-16 h-16 mb-4" />
              <p className="text-center text-sm">Your cart is empty</p>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Items</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Selected Vendors</span>
                <span className="font-medium">{selectedVendors.size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white">
            <p className="text-sm opacity-90">Checkout</p>
            <p className="font-semibold">₹0.00</p>
          </div>
          <button className="bg-green-400 hover:bg-green-300 text-green-900 px-8 py-2 rounded-lg font-semibold transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorSelectionScreen;
