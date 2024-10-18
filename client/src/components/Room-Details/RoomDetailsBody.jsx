import { GlobalHotelContext } from "../../context/HotelContext"
import { differenceInDays } from "date-fns"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UseAccess } from "../../context/AccessContext"

const RoomDetailsBody = ({ room }) => {
  const { hotelDateState, setTripCartState } = GlobalHotelContext()
  const { hasBookedRoom, setHasBookedRoom } = UseAccess()

  const navigate = useNavigate()

  const numberOfNights = differenceInDays(
    hotelDateState.checkOutDate,
    hotelDateState.checkInDate
  )

  const handleBookTripBtn = () => {
    setTripCartState(room)
    setHasBookedRoom(true)
    navigate("/your-info")
    console.log(room)
  }

  return (
    <div className="room_fulldetails_body_box">
      <div className="room_fulldetails_body_1">
        <h1 className="room_fulldetails_body_1_1">{room.name}</h1>
        <div className="room_fulldetails_body_1_2"></div>
        <p className="room_fulldetails_body_1_3">{room.description}</p>
        <div className="room_details_body_1_4">
          <div className="room_details_body_1_4_1">
            <svg
              className="room_details_body_1_4_1_1"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2049 4.5C18.1765 4.5 16.5322 6.14431 16.5322 8.17266C16.5322 10.201 18.1765 11.8453 20.2049 11.8453C22.2332 11.8453 23.8775 10.201 23.8775 8.17266C23.8775 6.14431 22.2332 4.5 20.2049 4.5ZM15.5322 8.17266C15.5322 5.59202 17.6242 3.5 20.2049 3.5C22.7855 3.5 24.8775 5.59202 24.8775 8.17266C24.8775 10.7533 22.7855 12.8453 20.2049 12.8453C17.6242 12.8453 15.5322 10.7533 15.5322 8.17266Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.2166 19.5166C25.1883 19.5166 23.5439 21.1609 23.5439 23.1893C23.5439 25.2176 25.1883 26.8619 27.2166 26.8619C29.245 26.8619 30.8893 25.2176 30.8893 23.1893C30.8893 21.1609 29.245 19.5166 27.2166 19.5166ZM22.5439 23.1893C22.5439 20.6086 24.636 18.5166 27.2166 18.5166C29.7972 18.5166 31.8893 20.6086 31.8893 23.1893C31.8893 25.7699 29.7972 27.8619 27.2166 27.8619C24.636 27.8619 22.5439 25.7699 22.5439 23.1893Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3249 16.3308C15.2049 14.3632 17.5864 13.165 20.1972 13.165C22.9088 13.165 25.3721 14.4571 27.2842 16.5612C27.3483 16.6317 27.4401 16.7361 27.5579 16.8723C27.7386 17.0811 27.7158 17.3969 27.507 17.5776C27.2982 17.7583 26.9824 17.7355 26.8017 17.5266C26.685 17.3918 26.5997 17.2949 26.5441 17.2337C24.781 15.2936 22.5718 14.165 20.1972 14.165C17.9101 14.165 15.7773 15.2116 14.0479 17.0216C13.9991 17.0727 13.9239 17.1535 13.821 17.266C13.6345 17.4697 13.3182 17.4837 13.1145 17.2972C12.9108 17.1108 12.8969 16.7945 13.0834 16.5908C13.1874 16.4772 13.2684 16.3899 13.3249 16.3308Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.9042 34.4617C6.43294 30.5977 9.67408 28.1816 13.288 28.1816C17.0409 28.1816 20.391 30.7858 22.9618 34.916C23.0472 35.0532 23.1714 35.2595 23.3333 35.5326C23.4741 35.7701 23.3956 36.0768 23.1581 36.2176C22.9205 36.3584 22.6138 36.28 22.473 36.0424C22.3119 35.7706 22.1923 35.572 22.1129 35.4445C19.6228 31.4441 16.5389 29.1816 13.288 29.1816C10.1575 29.1816 7.18254 31.2785 4.74094 35.0093C4.67125 35.1158 4.56586 35.2814 4.42368 35.5082C4.27699 35.7421 3.96841 35.8129 3.73445 35.6662C3.5005 35.5195 3.42976 35.2109 3.57645 34.977C3.71934 34.7491 3.82895 34.5767 3.9042 34.4617Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.80957 23.1893C9.80957 21.1609 11.4539 19.5166 13.4822 19.5166C15.5106 19.5166 17.1549 21.1609 17.1549 23.1893C17.1549 25.2176 15.5106 26.8619 13.4822 26.8619C11.4539 26.8619 9.80957 25.2176 9.80957 23.1893ZM13.4822 18.5166C10.9016 18.5166 8.80957 20.6086 8.80957 23.1893C8.80957 25.7699 10.9016 27.8619 13.4822 27.8619C16.0629 27.8619 18.1549 25.7699 18.1549 23.1893C18.1549 20.6086 16.0629 18.5166 13.4822 18.5166ZM27.0152 28.1816C24.7855 28.1816 22.6911 29.1052 20.8253 30.7183C20.6164 30.8989 20.5935 31.2146 20.7741 31.4235C20.9547 31.6324 21.2705 31.6554 21.4794 31.4748C23.2077 29.9805 25.0784 29.1816 27.0152 29.1816C30.2661 29.1816 33.35 31.4441 35.8401 35.4445C35.9194 35.572 36.0391 35.7706 36.2002 36.0424C36.341 36.28 36.6477 36.3584 36.8853 36.2176C37.1228 36.0768 37.2013 35.7701 37.0605 35.5326C36.8986 35.2595 36.7744 35.0532 36.689 34.916C34.1182 30.7858 30.7681 28.1816 27.0152 28.1816Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="room_details_body_1_4_1_2">
              Maximum <br /> persons: {room.maxOccupancy}
            </p>
          </div>
        </div>
        <div className="room_fulldetails_body_1_5">
          <p className="room_fulldetails_body_1_5_1">
            <span className="room_fulldetails_body_1_5_1_1">Standard Rate</span>
            <span className="room_fulldetails_body_1_5_1_2">${room.price}</span>
          </p>
          <p className="room_fulldetails_body_1_5_2">
            Cancel or change your reservation up to 2 days before arrival and
            receive a full refund of the total booking amount. Cancellations
            made within 2 days of arrival are subject to a charge of 100% of the
            room amount; additional products or add-ons will be fully refunded.
          </p>
        </div>
      </div>
      <div className="room_details_body_2">
        <p className="room_details_body_2_1">YOUR RESERVATION</p>
        <div className="room_details_body_2_1_line"></div>
        <div className="room_details_body_2_2">
          <p className="room_details_body_2_2_1">YOUR DATES</p>
          <button className="room_details_body_2_2_2">
            <p className="room_details_body_2_2_2_1">
              <svg
                className="room_details_body_2_2_2_1_1"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 0.5C5.27614 0.5 5.5 0.723858 5.5 1V4C5.5 4.27614 5.27614 4.5 5 4.5C4.72386 4.5 4.5 4.27614 4.5 4V1C4.5 0.723858 4.72386 0.5 5 0.5Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0.5C15.2761 0.5 15.5 0.723858 15.5 1V4C15.5 4.27614 15.2761 4.5 15 4.5C14.7239 4.5 14.5 4.27614 14.5 4V1C14.5 0.723858 14.7239 0.5 15 0.5Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7.5H1V6.5H19V7.5Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 15C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 3H1V17H19V3ZM1 2C0.447715 2 0 2.44772 0 3V17C0 17.5523 0.447715 18 1 18H19C19.5523 18 20 17.5523 20 17V3C20 2.44772 19.5523 2 19 2H1Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="room_details_body_2_2_2_1_2">Dates</span>
            </p>
            <p className="room_details_body_2_2_2_2">
              <span className="room_details_body_2_2_2_2_1">
                {hotelDateState.checkInDate}
              </span>
              <svg
                className="room_details_body_2_2_2_2_2"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 243.58"
              >
                <path
                  fillRule="nonzero"
                  d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
                />
              </svg>
              <span className="room_details_body_2_2_2_2_3">
                {hotelDateState.checkOutDate}
              </span>
            </p>
          </button>
        </div>
        <div className="room_details_body_2_3">
          <p className="room_details_body_2_3_1">NUMBER OF GUESTS</p>
          <button className="room_details_body_2_3_2">
            <p className="room_details_body_2_3_2_1">
              <svg
                className="room_details_body_2_3_2_1_1"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 8C11.933 8 13.5 6.433 13.5 4.5C13.5 2.567 11.933 1 10 1C8.067 1 6.5 2.567 6.5 4.5C6.5 6.433 8.067 8 10 8ZM10 9C12.4853 9 14.5 6.98528 14.5 4.5C14.5 2.01472 12.4853 0 10 0C7.51472 0 5.5 2.01472 5.5 4.5C5.5 6.98528 7.51472 9 10 9Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.36058 13.6207C2.07555 14.7839 1.57555 16.1661 1.4981 17.0439C1.47382 17.319 1.23116 17.5223 0.956084 17.4981C0.68101 17.4738 0.477694 17.2311 0.501966 16.9561C0.60098 15.8339 1.21274 14.2161 2.68948 12.8793C4.17641 11.5333 6.50821 10.5 10 10.5C13.4918 10.5 15.8237 11.5333 17.3106 12.8793C18.7873 14.2161 19.3991 15.8339 19.4981 16.9561C19.5224 17.2311 19.3191 17.4738 19.044 17.4981C18.7689 17.5223 18.5262 17.319 18.502 17.0439C18.4245 16.1661 17.9245 14.7839 16.6395 13.6207C15.3646 12.4667 13.2847 11.5 10 11.5C6.71538 11.5 4.63542 12.4667 3.36058 13.6207Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 17C0.5 16.7239 0.723858 16.5 1 16.5H19C19.2761 16.5 19.5 16.7239 19.5 17C19.5 17.2761 19.2761 17.5 19 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17Z"
                  fill="white"
                ></path>
              </svg>
              <span className="room_details_body_2_3_2_1_2">Sleeps</span>
            </p>
            <p className="room_details_body_2_3_2_2">Guest</p>
          </button>
        </div>
        <div className="room_details_body_2_4">
          <p className="room_details_body_2_4_1">No of Nights</p>
          <p className="room_details_body_2_4_2">{numberOfNights}</p>
        </div>
        <div className="room_details_body_2_5">
          <p className="room_details_body_2_5_1">PRICE PER NIGHT</p>
          <p className="room_details_body_2_5_2">${room.price}</p>
        </div>
        <div className="room_details_body_2_6">
          <p className="room_details_body_2_6_1">TOTAL</p>
          <p className="room_details_body_2_6_2">
            ${room.price * numberOfNights}
          </p>
        </div>
        <button onClick={handleBookTripBtn} className="room_details_body_2_7">
          <p className="room_details_body_2_7_1"> BOOK NOW</p>
        </button>
      </div>
    </div>
  )
}

export default RoomDetailsBody
