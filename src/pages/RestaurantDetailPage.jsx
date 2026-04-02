// Route Pages > Screen 3-4: Restaurant detail (chat/menu)

import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockRestaurants } from "@/data/mockRestaurants";
import RestaurantDetail from "@/components/restaurant/RestaurantDetail";

const RestaurantDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const restaurant = useMemo(
    () => mockRestaurants.find((r) => r.id === Number.parseInt(id, 10)),
    [id],
  );

  if (!restaurant) {
    return (
      <div className="px-6 py-14 text-center text-zinc-300">
        Restaurant not found.
      </div>
    );
  }

  return (
    <RestaurantDetail
      restaurant={restaurant}
      onBack={() => navigate("/restaurants")}
    />
  );
};

export default RestaurantDetailPage;