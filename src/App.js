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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AgingFoodProductsForm />} />
        <Route path="/order" element={<OrderConfirmationScreen />} />
        <Route path="/search" element={<BusinessSearchScreen />} />
        <Route path="/profile" element={<BusinessProfileScreen />} />
        <Route path="/retail" element={<WRIOWholesaleScreen />} />
        <Route path="/order" element={<OrderConfirmationScreen />} />
        <Route path="/order-details" element={<ViewOrderDetails />} />
        <Route path="/logs" element={<ViewLogsScreen />} />
        <Route path="/vendor" element={<VendorSelectionScreen />} />
        <Route path="/business-search" element={<SearchBusinessScreen />} />
      </Routes>
    </div>
  );
};

export default App;
