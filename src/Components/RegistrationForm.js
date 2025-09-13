import React, { useState } from "react";
import { User } from "lucide-react";

export default function AgingFoodProductsForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    customerName: "",
    address: "",
    mobileNumber: "",
    gstin: "",
    routeName: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto lg:max-w-lg">
        {/* Single Responsive Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-500 text-white p-4 lg:p-6 text-center">
            <h1 className="text-lg lg:text-xl font-semibold">
              Aging Food Products
            </h1>
          </div>

          <div className="p-6 lg:p-8">
            {/* Profile Icon */}
            <div className="flex justify-center mb-4 lg:mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm lg:text-base mb-6 lg:mb-8">
              Please add profile to get started and generate food products.
            </p>

            {/* Form Fields */}
            <div className="space-y-3 lg:space-y-4">
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="customerName"
                  placeholder="Enter your customer"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="gstin"
                  placeholder="Enter GSTIN number"
                  value={formData.gstin}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="routeName"
                  placeholder="Enter Route Name"
                  value={formData.routeName}
                  onChange={handleInputChange}
                  className="w-full p-3 lg:p-4 text-sm lg:text-base text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
                  style={{ backgroundColor: "#fafafa" }}
                />
              </div>
            </div>

            {/* Terms & Agreement */}
            <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base mb-2">
                    Terms & Agreement
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3">
                    By using our platform, you agree to our terms and conditions
                    and data processing policies. By using our app, you provide
                    consent for the required data processing of your data.
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      id="terms"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs lg:text-sm text-gray-700"
                    >
                      Read more about this guidelines
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full mt-5 lg:mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 lg:py-4 px-4 lg:px-6 rounded-lg text-sm lg:text-base transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
