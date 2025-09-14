import { useState } from "react";
import {
  Menu,
  Search,
  Check,
  Smartphone,
  Mail,
  Trash2,
  LogOut,
} from "lucide-react";

export default function UserProfileLayout() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleLogout = () => {
    alert("Logging out...");
  };

  const handleDelete = () => {
    if (showDeleteConfirm) {
      alert("Account deleted!");
      setShowDeleteConfirm(false);
    } else {
      setShowDeleteConfirm(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button className="p-2 rounded-md hover:bg-gray-100 transition-colors lg:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            {/* Search Bar */}

            {/* Profile Avatar in Header */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Large Profile Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white border-opacity-30">
                  <span className="text-white font-bold text-3xl">M</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center sm:text-left text-white">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold">Mahendra</h1>
                  <Check className="h-6 w-6 text-blue-200" />
                </div>
                <p className="text-green-100 text-lg">Verified Account</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="px-8 py-8">
            <div className="grid gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>

                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-lg font-semibold text-gray-900">SM</p>
                    <p className="text-sm text-gray-600">Windows Phone</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-900 break-all">
                      917798982717@deviseapps.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={handleDelete}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    showDeleteConfirm
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Trash2 className="h-5 w-5" />
                  <span>{showDeleteConfirm ? "Confirm Delete" : "Delete"}</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>

              {showDeleteConfirm && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 text-sm">
                    <strong>Warning:</strong> This action cannot be undone.
                    Click "Confirm Delete" again to permanently delete your
                    account.
                  </p>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="mt-2 text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Account Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Member since</span>
                <span className="font-medium">2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Security</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Two-factor auth</span>
                <span className="text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last login</span>
                <span className="font-medium">Today</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
