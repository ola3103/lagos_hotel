import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

const SectionFour = () => {
  return (
    <section className="section_four">
      <div className="container">
        <div className="section_four_container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764944/pexels-thorsten-technoman-109353-338504_zcop6j.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764944/pexels-willpicturethis-1954524_ynjywp.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764944/pexels-pixabay-261045_v9efuf.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764944/pexels-elevate-1267696_hg9ue6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764943/pexels-andrew-3201765_ahos0t.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764943/pexels-olly-821054_jab6hm.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764943/pexels-cottonbro-4004119_w6l3qx.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718764943/pexels-cottonbro-5371567_wsfdvf.jpg" />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
