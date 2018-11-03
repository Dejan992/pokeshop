import React from 'react'
import {connect} from 'react-redux'
import {createNewReview} from '../store'

class Review extends React.Component {
  state = {
    rating: 0,
    content: ''
  }
// component(){
//     this.handleSubmit()
// }



  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }
  handleRating = event => {
    this.setState({
      rating: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const productId = this.props.currentProduct.id
    const reviewData = this.state
    this.props.createNewReview(reviewData, productId)
    this.setState({
      rating: 0,
      content: ''
    })
  }
  render() {
    const {currentProduct} = this.props
    const isEnable = this.state.rating != 0 && this.state.content.length > 0
    return (
      <div>
        {currentProduct.reviews.map(review => (
          <article key={review.id} className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://pre00.deviantart.net/fb6f/th/pre/i/2013/340/9/4/ash_ketchum__simplistic__by_geoffery10-d6wxngu.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div>
                  <strong>{review.user.email}</strong>
                  <div>{review.content}</div>
                </div>
              </div>
            </div>
          </article>
        ))}

        <article className="media">
          {/* <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure> */}
          <form onSubmit={this.handleSubmit}>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Add a review..."
                    value={this.state.content}
                    onChange={this.handleChange}
                  />
                </p>
              </div>

              {/* {let the user choose rating!} */}
              <div className='control'>
              <div className="select is-medium">
                
                  <select
                    value={this.state.rating}
                    onChange={this.handleRating}
                  >
                    <option value={0}>  --select rating--  </option>
                    <option value={5}>★★★★★</option>
                    <option value={4}>★★★★</option>
                    <option value={3}>★★★</option>
                    <option value={2}>★★</option>
                    <option value={1}>★</option>
                    ))}
                  </select>
                  </div>
              </div>
              <div>
                  {this.props.isLoggedIn ? <span/> : <div className='notification is-warning'>Please login to leave a review for this product!</div>}
              </div>
              <div className="field">
                <p className="control">
                  <button className="button" type="submit" disabled={!isEnable}>
                    Post review
                  </button>
                </p>
              </div>
            </div>
          </form>
        </article>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    isLoggedIn: !!state.user.id
})
const mapDispatchToProps = dispatch => {
  return {
    createNewReview: (reviewData, productId) => {
      return dispatch(createNewReview(reviewData, productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
