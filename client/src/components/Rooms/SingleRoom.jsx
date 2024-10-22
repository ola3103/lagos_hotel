import { Link, useNavigate } from "react-router-dom"
import SingleRoomPreview from "./SingleRoomPreview"
import { GlobalHotelContext } from "../../context/HotelContext"
import { useEffect } from "react"

const SingleRoom = ({ room }) => {
  const { tripCartState, setTripCartState } = GlobalHotelContext()

  const navigate = useNavigate()

  const handleBookTripBtn = () => {
    setTripCartState(room)
    navigate("/your-info")
    console.log(room)
  }

  return (
    <div className="single_room_container">
      <div className="single_room_preview_box">
        <SingleRoomPreview roomGallery={room.images} />
      </div>
      <div className="single_room_detail">
        <div className="single_room_detail_1">
          <h1 className="single_room_detail_title">{room.name}</h1>
          {room.availableUnits === 0 ? (
            <p className="single_room_detail_full_booked">
              This room is fully booked for your chosen dates.
            </p>
          ) : (
            <p className="single_room_detail_price">${room.price}/night</p>
          )}
        </div>
        <div className="single_room_detail_line"></div>
        <div className="single_room_detail_2_box">
          <div className="single_room_detail_2">
            <div className="single_room_detail_2_1">
              <div className="single_room_detail_2_1_1">
                <svg
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
                <p className="single_room_detail_2_1_1_text">
                  Max Guests: {room.maxOccupancy}
                </p>
              </div>
              <div className="single_room_detail_2_1_2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clipPath="url(#clip0_11352_8771)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 39L6 0H7H33H34V39H40V40H30V39L30 4H11.1542L22.0002 7.63921V35.8381L10.1858 39.9638C10.1248 39.9882 10.0619 39.9998 10 39.9997V40H0V39H6ZM10 38.9711L21.0002 35.1611V8.35997L10 4.66759L10 38.9711ZM33 1V39H31L31 4V3H30H10H9V4V39H7L7 1H33ZM19 19V23H20V19H19Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_11352_8771">
                      <rect width="40" height="40" fill="currentColor"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="single_room_detail_2_1_2_text">
                  Rooms Available: {room.availableUnits}
                </p>
              </div>
            </div>
            <p className="single_room_detail_2_2">{room.description}</p>
            <div className="single_room_detail_2_3_box">
              <Link
                to={`/room-details/${room._id}`}
                className="single_room_detail_2_3"
              >
                MORE DETAILS
                <svg
                  className="single_room_detail_2_3_icon"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 6C0.5 5.72386 0.723858 5.5 1 5.5L18 5.5C18.2761 5.5 18.5 5.72386 18.5 6C18.5 6.27614 18.2761 6.5 18 6.5L1 6.5C0.723858 6.5 0.5 6.27614 0.5 6Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6464 11.3536C13.4512 11.1583 13.4512 10.8417 13.6464 10.6464L18.2929 6L13.6464 1.35355C13.4512 1.15829 13.4512 0.841709 13.6464 0.646446C13.8417 0.451184 14.1583 0.451184 14.3536 0.646446L19.3536 5.64645C19.5488 5.84171 19.5488 6.15829 19.3536 6.35355L14.3536 11.3536C14.1583 11.5488 13.8417 11.5488 13.6464 11.3536Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              {room.availableUnits === 0 ? null : (
                <button
                  onClick={handleBookTripBtn}
                  className="single_room_detail_2_side_2_3"
                >
                  <p> BOOK NOW</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRoom
