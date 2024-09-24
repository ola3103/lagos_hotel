import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"

const SingleRoomPreview = ({ roomGallery }) => {
  const allRoomGallery = roomGallery.map((room) => {
    return (
      <SwiperSlide key={room}>
        <img src={room} />
      </SwiperSlide>
    )
  })

  return (
    <Swiper navigation={true} modules={[Navigation]} className="previewSwiper">
      {allRoomGallery}
    </Swiper>
  )
}

export default SingleRoomPreview
