import { format, differenceInDays, parse } from "date-fns"
import axios from "axios"
import { useForm } from "react-hook-form"
import { GlobalHotelContext } from "../../context/HotelContext"

const BookingInfoPageBody_1 = () => {
  const { hotelDateState, tripCartState } = GlobalHotelContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const numberOfNights = differenceInDays(
    hotelDateState.checkOutDate,
    hotelDateState.checkInDate
  )

  const convertToFullDate = (dateString, year = new Date().getFullYear()) => {
    const parsedDate = parse(`${dateString} ${year}`, "MMM d yyyy", new Date())

    return format(parsedDate, "yyyy-MM-dd")
  }

  const checkInDate = convertToFullDate(hotelDateState.checkInDate)
  const checkOutDate = convertToFullDate(hotelDateState.checkOutDate)

  const handleBookingForm = async (data) => {
    const hotelBookingInfo = {
      checkInDate,
      checkOutDate,
      ...tripCartState,
      ...data,
      numberOfNights,
    }
    console.log(hotelBookingInfo)

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_BASE_URL_PROD ||
          import.meta.env.VITE_API_BASE_URL_DEV
        }/api/v1/booking/checkout-session`,
        { hotelBookingInfo }
      )
      // if (response.status === 200 && response.data.url) {
      //   // Redirect to Stripe Checkout
      //   window.location.href = response.data.url
      // } else {
      //   console.error("Failed to create Stripe checkout session")
      // }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const isTermsAndConditionChecked = watch("termsAndCondition", false)

  return (
    <>
      <div className="booking_info_page_body_title_box">
        <p className="booking_info_page_body_title_1">1.Your Information</p>
        <span className="booking_info_page_body_title_2"></span>
        <p className="booking_info_page_body_title_3">2.Pay and Confirm</p>
      </div>
      <div className="booking_info_page_body_1_form">
        <h2 className="booking_info_page_body_1_form_title">
          YOUR INFORMATION
        </h2>
        <p className="booking_info_page_body_1_form_subtitle">
          ALL FIELDS ARE REQUIRED
        </p>
        <form
          className="booking_info_page_body_1_form_1"
          onSubmit={handleSubmit(handleBookingForm)}
        >
          <div className="booking_info_page_body_1_form_1_1 booking_info_page_body_1_form_1_general">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 20,
                  message: "Character cannot be more than 20",
                },
              })}
            />
            {errors.firstName && (
              <p className="form_error_text">{errors.firstName.message}</p>
            )}
          </div>
          <div className="booking_info_page_body_1_form_1_2 booking_info_page_body_1_form_1_general">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 20,
                  message: "Character cannot be more than 20",
                },
              })}
            />
            {errors.lastName && (
              <p className="form_error_text">{errors.lastName.message}</p>
            )}
          </div>
          <div className="booking_info_page_body_1_form_1_3 booking_info_page_body_1_form_1_general">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Email Address"
              {...register("emailAddress", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.emailAddress && (
              <p className="form_error_text">{errors.emailAddress.message}</p>
            )}
          </div>
          <div className="booking_info_page_body_1_form_1_4 booking_info_page_body_1_form_1_general">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 11,
                  message: "Phone number must not be more than 11 numbers",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="form_error_text">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="booking_info_page_body_1_form_1_5">
            <p className="booking_info_page_body_1_form_1_5_1">
              SPECIAL REQUEST
            </p>
            <textarea
              className="booking_info_page_body_1_form_1_5_2"
              placeholder="Let us know in advance..."
              {...register("specialRequest")}
            />
          </div>
          <div className="booking_info_page_body_1_form_1_6 booking_info_page_body_1_form_2_general ">
            <input
              type="checkbox"
              id="termsAndCondition"
              {...register("termsAndCondition")}
            />
            <label htmlFor="termsAndCondition">
              I agree to property T&C and privacy policy.*
            </label>
          </div>
          <div className="booking_info_page_body_1_form_1_6 booking_info_page_body_1_form_2_general">
            <input
              type="checkbox"
              id="emailSubscription"
              {...register("emailSubscription")}
            />
            <label htmlFor="emailSubscription">
              I did like to occasionally receive marketing updates.
            </label>
          </div>
          <button
            disabled={isTermsAndConditionChecked ? false : true}
            className={
              isTermsAndConditionChecked
                ? "booking_info_page_body_continue_btn general_btn_style"
                : "booking_info_page_body_continue_btn general_btn_style disable_style"
            }
          >
            <p>CONTINUE</p>
          </button>
        </form>
      </div>
    </>
  )
}

export default BookingInfoPageBody_1
