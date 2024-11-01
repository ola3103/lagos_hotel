import { Link, useNavigate, useSearchParams, Navigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const PaymentSuccessPage = () => {
  const [isTokenValid, setIsTokenValid] = useState(false)

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    const checkIsTokenValid = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL_PROD}/api/v1/token`,
          { token }
        )
        if (response.status === 200) {
          setIsTokenValid(true)
        }
      } catch (error) {
        navigate("/")
      }
    }
    checkIsTokenValid()
  }, [])

  return isTokenValid ? (
    <section className="payment_success_page">
      <div className="payment_success_page_container">
        <img
          src="https://res.cloudinary.com/dxaujswz7/image/upload/v1727477550/checked_u1uxvm.png"
          className="payment_success_page_img"
        />
        <h2 className="payment_success_page_title">PAYMENT SUCCESSFUL !!!</h2>
        <p className="payment_success_page_text">
          Thank you for choosing Lagos Hotel. Please check your email for your
          booking confirmation and pass ID, which you will need for check-in. We
          look forward to welcoming you!
        </p>
        <Link className="payment_success_page_link" to="/">
          Click here to go back to home page
        </Link>
      </div>
    </section>
  ) : null
}

export default PaymentSuccessPage
