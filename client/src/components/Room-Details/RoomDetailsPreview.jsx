import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"

const RoomDetailsPreview = ({ roomImg = [] }) => {
  const allRoomDetailsImage = roomImg.map((room) => {
    return (
      <SwiperSlide key={room}>
        <img src={room} />
      </SwiperSlide>
    )
  })
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="room_details_swiper"
    >
      {allRoomDetailsImage}
    </Swiper>
  )
}

export default RoomDetailsPreview
