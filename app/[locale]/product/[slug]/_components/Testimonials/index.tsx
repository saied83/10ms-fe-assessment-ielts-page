import React from "react";
import { Section } from "../../_libs/types";
import SingleTestimonial from "../SingleTestimonial";

const Testimonials: React.FC<{ testimonial: Section }> = ({ testimonial }) => {
  return (
    <div id="testimonials">
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Students opinion</h2>
        <div className="relative">
          <div className="hide-scroll-menu relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory ">
            {testimonial.values.map(
              (singleTestimonial) =>
                singleTestimonial.thumb && (
                  <SingleTestimonial
                    key={singleTestimonial.id}
                    data={singleTestimonial}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
