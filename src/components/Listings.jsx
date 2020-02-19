import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

const Listings = () => {
  const [properties] = useState([
    {
      beds: 2,
      baths: 3,
      title: "Modern home in city center",
      rent: 1400,
      stars: 5,
      reviews: 34,
      imgUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      beds: 1,
      baths: 2,
      title: "Cozy home next to the mountains",
      rent: 1000,
      stars: 4,
      reviews: 100,
      imgUrl:
        "https://images.unsplash.com/photo-1576941465093-fc22d70914e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=806&q=80"
    },
    {
      beds: 4,
      baths: 6,
      title: "Mini mansion",
      rent: 1800,
      stars: 5,
      reviews: 238,
      imgUrl:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      beds: 1,
      baths: 1,
      title: "Small cabin next to the lake",
      rent: 920,
      stars: 3,
      reviews: 23,
      imgUrl:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  ]);

  return (
    <div className="sm:flex sm:overflow-x-scroll pb-8 sm:px-4">
      {properties.map(property => (
        <PropertyCard key={property.title} property={property} />
      ))}
    </div>
  );
};

export default Listings;
