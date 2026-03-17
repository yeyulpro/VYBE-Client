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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "restaurants", element: <RestaurantsPage /> },
      { path: "deals", element: <DealsPage /> },
      { path: "map", element: <MapPage /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginForm /> },
          { path: "login", element: <LoginForm /> },
          { path: "signup", element: <SignupForm /> },
        ],
      },
    //   { path: "policy", element: <PrivacyPolicyModal /> },
    ],
  },
]);

export default router;
