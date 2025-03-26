"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const PlaceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:5000/api/places/${slug}`)
        .then((res) => res.json())
        .then((data) => setPlace(data))
        .catch((err) => console.error("Error fetching place:", err));
    }
  }, [slug]);

  if (!place) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <Image src={place.image} width={800} height={400} alt={place.name} />
      <h1 className="text-3xl font-bold mt-4">{place.name}</h1>
      <p className="text-gray-700 mt-2">{place.description}</p>
    </div>
  );
};

export default PlaceDetail;
