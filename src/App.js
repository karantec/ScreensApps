import { Route, Routes } from "react-router-dom";
import AgingFoodProductsForm from "./Components/RegistrationForm";
import OrderConfirmationScreen from "./Components/Order";
import BusinessSearchScreen from "./Components/Search";
import BusinessProfileScreen from "./Components/BusinessProfileScreen";
import WRIOWholesaleScreen from "./Components/RetailScreen";
import ViewOrderDetails from "./Components/OrderDetails";
import ViewLogsScreen from "./Components/Logs";
import VendorSelectionScreen from "./Components/Vendor";
import SearchBusinessScreen from "./Components/SearchBusiness";
import { Settings } from "lucide-react";
import BusinessSetting from "./Components/Settings";
import UserProfileLayout from "./Components/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/orderForm" element={<AgingFoodProductsForm />} />
        <Route path="/confirm" element={<OrderConfirmationScreen />} />
        <Route path="/search" element={<BusinessSearchScreen />} />
        <Route path="/profile" element={<BusinessProfileScreen />} />
        {/* <Route path="/searching" element={<WRIOWholesaleScreen />} /> */}
        <Route path="/ApplicationHome" element={<WRIOWholesaleScreen />} />
        <Route path="/order" element={<OrderConfirmationScreen />} />
        <Route path="/order-details" element={<ViewOrderDetails />} />
        <Route path="/orders" element={<ViewLogsScreen />} />
        <Route path="/selectProduct" element={<VendorSelectionScreen />} />
        <Route path="/business-search" element={<SearchBusinessScreen />} />

        <Route path="/setting" element={<BusinessSetting />} />
        <Route path="/business-search" element={<SearchBusinessScreen />} />
        <Route path="/profiles" element={<UserProfileLayout />} />
      </Routes>
    </div>
  );
};

export default App;
