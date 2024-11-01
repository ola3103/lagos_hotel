import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section className="page_not_found">
      <img src="https://res.cloudinary.com/dxaujswz7/image/upload/v1730276486/404_qtemd6.png" />
      <Link to="/">Click here to go back to homepage</Link>
    </section>
  )
}

export default PageNotFound
