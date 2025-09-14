import { useState } from "react";
import { Menu, Search, MapPin, User, Bell } from "lucide-react";

export default function BusinessSetting() {
  const [isLocationAllowed, setIsLocationAllowed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationAccess = () => {
    setIsLocationAllowed(true);
    // Simulate location access
    setTimeout(() => {
      alert("Location access granted!");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}

            {/* Search Bar */}

            {/* User Actions */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Hero Section */}

          {/* Location Access Card */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-500" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Enable Location Access
              </h2>

              <p className="text-gray-600 mb-6">
                Allow us to access your location to show relevant businesses
                nearby
              </p>

              {!isLocationAllowed ? (
                <button
                  onClick={handleLocationAccess}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  Allow Location Access
                </button>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Location Enabled</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Categories */}
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
