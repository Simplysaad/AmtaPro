import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Samuel Adewale",
    role: "Youth Player",
    quote: "Joining this academy changed my life. The coaches are inspiring and the training is world-class.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Coach Fatima Bello",
    role: "Technical Coach",
    quote: "This academy truly invests in player development both mentally and physically.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Linda Okafor",
    role: "Parent",
    quote: "My son has grown tremendously since joining. The discipline and passion — top notch.",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    name: "Chinedu Nwosu",
    role: "Scout",
    quote: "Exceptional talent and training environment. Highly recommend for anyone serious about football.",
    image: "https://randomuser.me/api/portraits/men/40.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[var(--background)] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[var(--foreground)]">What People Are Saying</h2>

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
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--card)] p-6 mx-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic text-[var(--muted)] mb-4">“{t.quote}”</p>
                <h4 className="font-semibold text-[var(--foreground)]">{t.name}</h4>
                <span className="text-sm text-gray-600">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
