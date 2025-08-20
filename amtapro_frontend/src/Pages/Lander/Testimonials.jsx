import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {testimonials} from '../../assets/links'
import Title from '../../Components/Title';


const Testimonials = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-3xl font-bold mb-12 text-[var(--foreground)]">What People Are Saying</h2> */}
        <Title title="What People Are Saying"/>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--card)] p-6 mx-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
               { testimonial.image ? <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-16 rounded-full mx-auto mb-4 object-cover"
                /> :
                    <div className='rounded-full size-16 bg-primary mx-auto mb-4 object-cover'></div>
                }
                <p className="italic text-[var(--muted)] mb-4">“{testimonial.quote}”</p>
                <h4 className="font-semibold text-[var(--foreground)]">{testimonial.name}</h4>
                <span className="text-sm text-gray-600">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
