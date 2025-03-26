"use client";
import { useEffect, useState } from "react";
import PlaceCard from "@/components/PlaceCard";

const HomePage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error("Error fetching places:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Thanjavur</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
