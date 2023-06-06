// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${title}`}
      />
      <p>{title}</p>
      <p>by {brand}</p>
      <div>
        <p>Rs {price}/-</p>
        <div>
          <p>{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
