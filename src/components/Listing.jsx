import React from "react";

const Listing = () => {
  return (
    <div>
      <div>
        <img
          className="rounded-lg shadow-md h-64"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Villa"
        />
      </div>
      <div className="px-4 -mt-16 relative">
        <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
          <div>
            <span>Plus</span>
            <div>3 beds &middot; 2 baths</div>
          </div>
          <h4>Modern home in city center</h4>
          <div>
            <span>$1,400</span> <span>/wk</span>
          </div>
          <div>34 reviews</div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
