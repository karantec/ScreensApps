import { ArrowLeft } from "lucide-react";

export default function ViewOrderDetails() {
  return (
    <div className="min-h-screen mt-3 bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-500 text-white px-4 py-3">
        <div className="flex items-center">
          <ArrowLeft className="w-5 h-5 mr-3" />
          <h1 className="text-base font-medium">View Order Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mt-3 mx-auto bg-white min-h-screen">
        <div className="divide-y divide-gray-200">
          {/* Order Number */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Order Number</span>
            <span className="text-sm font-medium text-gray-900">610</span>
          </div>

          {/* Order Time */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Order Time</span>
            <span className="text-sm font-medium text-gray-900">
              23 Jul 2025 12:13 am
            </span>
          </div>

          {/* First Name */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">First Name</span>
            <span className="text-sm font-medium text-gray-900">Profile 2</span>
          </div>

          {/* Last Name */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Last Name</span>
            <span className="text-sm font-medium text-gray-900">
              Profile 2 Last Name
            </span>
          </div>

          {/* Mobile Number */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Mobile Number</span>
            <span className="text-sm font-medium text-gray-900">
              7798982717
            </span>
          </div>

          {/* Address */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Address</span>
            <span className="text-sm font-medium text-gray-900">
              Banar Pune
            </span>
          </div>

          {/* Email */}
          <div className="px-4 py-4 flex justify-between items-start">
            <span className="text-sm text-gray-700">Email</span>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900 break-all">
                mahendranl.molia@gmai
              </span>
              <span className="text-sm font-medium text-gray-900 block">
                l.com
              </span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Promo Code</span>
            <span className="text-sm font-medium text-gray-900">-</span>
          </div>

          {/* Are you from pune? */}
          <div className="px-4 py-4 flex justify-between items-start">
            <span className="text-sm text-gray-700">
              Are you from
              <br />
              pune?
            </span>
            <span className="text-sm font-medium text-gray-900">-</span>
          </div>

          {/* Expected Delivery Date */}
          <div className="px-4 py-4 flex justify-between items-start">
            <span className="text-sm text-gray-700">
              Expected Delivery
              <br />
              Date
            </span>
            <span className="text-sm font-medium text-gray-900">-</span>
          </div>

          {/* Bobby (बॉबी) */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Bobby (बॉबी)</span>
            <span className="text-sm font-medium text-gray-900">2 ✱</span>
          </div>

          {/* Subtotal */}
          <div className="px-4 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">Subtotal</span>
            <span className="text-sm font-medium text-gray-900">20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
