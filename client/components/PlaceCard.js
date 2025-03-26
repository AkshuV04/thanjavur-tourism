"use client";
import Image from "next/image";
import Link from "next/link";

const PlaceCard = ({ place }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image src={place.image} width={300} height={200} alt={place.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{place.name}</h2>
        <p className="text-gray-600">{place.description.substring(0, 100)}...</p>
        <Link href={`/places/${place.slug}`} className="text-blue-600 mt-2 inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
