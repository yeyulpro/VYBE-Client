// React Router Configuration > createBrowserRouter setup

import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import HomePage from "@/pages/HomePage.jsx";
import RestaurantsPage from "@/pages/RestaurantsPage.jsx";
import DealsPage from "@/pages/DealsPage.jsx";
import MapPage from "@/pages/MapPage.jsx";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import PrivacyPolicyModal from "@/components/auth/PrivacyPolicyModal";
import AuthLayout from "@/components/layout/AuthLayout";
import RestaurantDetailPage from "@/pages/RestaurantDetailPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "restaurants", element: <RestaurantsPage /> },
      { path: "deals", element: <DealsPage /> },
      { path: "map", element: <MapPage /> },
      { path: "restaurants/:id", element: <RestaurantDetailPage /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginForm /> },
          { path: "login", element: <LoginForm /> },
          { path: "signup", element: <SignupForm /> },
        ],
      },
      
      { path: "*", element: <NotFoundPage /> },
    //   { path: "policy", element: <PrivacyPolicyModal /> },
    ],
  },
]);

export default router;
