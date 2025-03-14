import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "@/components/Helper/DestionationSlider";

const Destination = () => {
  return (
    <div className="m-3">
      {/* Seaction Heading */}
        <SectionHeading heading={"Exploring Popular Destination"} />
      {/* Section Content */}
      <div className="mt-14 w-[90%] mx-auto">
        <div className="mt-14 w-[90%] mx-auto">
          {/* slider */}
          <DestinationSlider />
        </div>
      </div>
    </div>
  );
};

export default Destination;
