import { useState } from "react";
import { ShoppingCart, Star, ChevronDown, Plus, Minus } from "lucide-react";

const VendorSelectionScreen = () => {
  const [expandedVendor, setExpandedVendor] = useState(null);
  const [cart, setCart] = useState({});

  const vendors = [
    {
      id: 1,
      name: "Pallavls Spices",
      category: "Grocery",
      rating: 4.1,
      icon: "P",
      color: "bg-orange-400",

      products: [
        {
          id: 101,
          name: "Turmeric Powder",
          unit: "1kg",
          price: 200,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/10000409_15-tata-sampann-turmeric-powder.jpg",
        },
        {
          id: 102,
          name: "Red Chilli Powder",
          unit: "500g",
          price: 120,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/10000410_11-tata-sampann-red-chilli-powder.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Sahastrabudhe",
      category: "Grocery",
      rating: 4.0,
      icon: "S",
      color: "bg-red-500",

      products: [
        {
          id: 201,
          name: "Rice",
          unit: "10kg",
          price: 550,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/10000406_16-tata-sampann-rice.jpg",
        },
        {
          id: 202,
          name: "Wheat Flour",
          unit: "5kg",
          price: 230,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/10000407_12-tata-sampann-wheat-flour.jpg",
        },
      ],
    },
  ];

  const toggleExpand = (vendorId) => {
    setExpandedVendor(expandedVendor === vendorId ? null : vendorId);
  };

  const updateQuantity = (vendorId, productId, change) => {
    setCart((prev) => {
      const vendorCart = prev[vendorId] || {};
      const currentQty = vendorCart[productId] || 0;
      const newQty = Math.max(0, currentQty + change);

      return {
        ...prev,
        [vendorId]: {
          ...vendorCart,
          [productId]: newQty,
        },
      };
    });
  };

  // Totals
  const totalItems = Object.values(cart).reduce(
    (sum, vendor) => sum + Object.values(vendor).reduce((a, b) => a + b, 0),
    0
  );

  const totalVendors = Object.keys(cart).filter((vid) =>
    Object.values(cart[vid]).some((qty) => qty > 0)
  ).length;

  const totalAmount = vendors.reduce((sum, vendor) => {
    const vendorCart = cart[vendor.id] || {};
    return (
      sum +
      vendor.products.reduce((s, p) => s + (vendorCart[p.id] || 0) * p.price, 0)
    );
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-xl font-semibold">Select Vendor</h1>
          <span className="text-green-200 text-sm">
            {vendors.length} Vendors Available
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vendor List */}
        <div className="lg:col-span-2 space-y-4">
          {vendors.map((vendor) => {
            const isExpanded = expandedVendor === vendor.id;
            return (
              <div
                key={vendor.id}
                className={`rounded-lg border p-4 transition-all ${
                  isExpanded
                    ? "bg-green-100 border-green-400 shadow-md"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Vendor Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${vendor.color} rounded-lg flex items-center justify-center text-white font-semibold`}
                    >
                      {vendor.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          isExpanded ? "text-green-700" : "text-gray-900"
                        }`}
                      >
                        {vendor.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        {/* <p className="text-sm text-gray-500">
                          {vendor.category}
                        </p> */}
                        <span className="text-sm text-gray-600 ">
                          SubTotal : 2000 (2 products)
                        </span>
                      </div>

                      <div className="flex items-center space-x-1 mt-1"></div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(vendor.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "text-green-700 bg-green-200"
                        : "text-gray-500 hover:text-green-600"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Product Section */}
                {isExpanded && (
                  <div className="mt-4 border-t pt-3 space-y-3">
                    <p className="text-sm text-gray-700 mb-3 text-center">
                      {vendor.description}
                    </p>
                    <div className="space-y-3">
                      {vendor.products.map((product) => {
                        const qty = cart[vendor.id]?.[product.id] || 0;
                        return (
                          <div
                            key={product.id}
                            className="flex items-center justify-between bg-white rounded-lg shadow p-3"
                          >
                            {/* Left: Image + Info */}
                            <div className="flex items-center space-x-3 text-left">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded-md border"
                              />
                              <div>
                                <p className="font-medium text-gray-900">
                                  {product.name}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <p>₹{product.price}</p>
                                  <p>{product.unit}</p>
                                </div>
                              </div>
                            </div>

                            {/* Right: Quantity Controls */}
                            <div className="flex items-center space-x-2 ml-4">
                              <button
                                onClick={() =>
                                  updateQuantity(vendor.id, product.id, -1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-6 text-center">{qty}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(vendor.id, product.id, 1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>

            {totalItems === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                <ShoppingCart className="w-16 h-16 mb-4" />
                <p className="text-center text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-medium">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Vendors</span>
                  <span className="font-medium">{totalVendors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-medium">₹{totalAmount}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white">
            <p className="text-sm opacity-90">Checkout</p>
            <p className="font-semibold">₹{totalAmount}</p>
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
