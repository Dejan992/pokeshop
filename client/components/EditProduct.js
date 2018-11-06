import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSingleProduct, fetchSingleProduct } from '../store/index'
import { withRouter } from 'react-router-dom'
class EditProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    // invoke fetch if navigate to this page directly:
    const productId = this.props.match.params.productId
    if (!this.props.currentProduct.id) {
      await this.props.fetchSingleProduct(productId)
    }
    this.setState({
      loading: false
    })

  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct !== this.props.currentProduct) {
      const {
        id,
        title,
        price,
        imageUrl,
        stockQuantity,
        Category,
        visibleToUser
      } = this.props.currentProduct
      const categories = this.props.categories
      const categoryId = Object.values(Category).map(cat => cat.id)
      const checkObj = {}
      categories.forEach(category => {
        checkObj[category.id] = categoryId.indexOf(category.id) > -1
      })
      this.setState({
        id,
        title,
        price,
        imageUrl,
        stockQuantity,
        checkObj,
        visibleToUser
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const categoryId = Object.keys(this.state.checkObj).filter(
      key => this.state.checkObj[key]
    )
    const productData = { ...this.state, categoryId }
    await this.props.updateSingleProduct(productData)
    this.props.history.push(`/products/${this.state.id}`)
  }

  handleCheck = event => {
    // toggles state.checkObj[categoryid] boolean
    const categoryId = event.target.name
    const previousCheckObj = { ...this.state.checkObj }
    const prevCheckVal = previousCheckObj[categoryId]
    this.setState({
      checkObj: {
        ...previousCheckObj,
        [categoryId]: !prevCheckVal
      }
    })
  }
  handleCheckAdmin = () => {
    this.setState({
      visibleToUser: !this.state.visibleToUser
    })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    const {
      name,
      title,
      price,
      imageUrl,
      stockQuantity,
      displayName,
      checkObj
    } = this.state
    const handleChange = this.handleChange
    const handleSubmit = this.handleSubmit
    const categories = this.props.categories
    const handleCheck = this.handleCheck
    function oneTrue(obj) {
      for (var o in obj) if (obj[o]) return true

      return false
    }
    const isEnable = this.state.title && oneTrue(checkObj)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="container column is-4">
              <form
                onSubmit={handleSubmit}
                className="card-content"
                name={name}
              >
                <h1 className="is-size-3 has-text-centered">{displayName}</h1>
                <div className="field">
                  <label htmlFor="title" className="label">
                    Title:
                  </label>
                  <div className="control">
                    <input
                      className="input is-fullwidth"
                      htmlFor="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="price" className="label">
                    Price:
                  </label>
                  <div className="control">
                    <input
                      className="input is-fullwidth"
                      htmlFor="price"
                      name="price"
                      type="number"
                      value={price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="stockQuantity" className="label">
                    Stock Quantity:
                  </label>
                  <div className="control">
                    <input
                      className="input is-fullwidth"
                      htmlFor="stockQuantity"
                      name="stockQuantity"
                      type="number"
                      value={stockQuantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="imageUrl" className="label">
                    Image URL:
                  </label>
                  <div className="control">
                    <input
                      className="input is-fullwidth"
                      htmlFor="imageUrl"
                      name="imageUrl"
                      type="url"
                      value={imageUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <p className="has-text-centered"> Visible to user:</p>
                    <label
                      key={this.props.currentProduct.id}
                      className="checkbox"
                    >
                      <input
                        type="checkbox"
                        name={this.props.currentProduct.id}
                        checked={this.state.visibleToUser}
                        onChange={this.handleCheckAdmin}
                      />
                    </label>
                  </div>
                </div>
                <div className="field">
                  <p className="has-text-centered">
                    <strong>Categories:</strong>
                  </p>
                  {categories.map(category => {
                    return (
                      <label key={category.id} className="checkbox">
                        <input
                          type="checkbox"
                          name={category.id}
                          checked={checkObj[category.id]}
                          onChange={handleCheck}
                        />
                        {category.categoryType}
                      </label>
                    )
                  })}
                </div>

                <button className="button" type="submit" disabled={!isEnable}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
const mapState = state => {
  return {
    categories: state.categories,
    currentProduct: state.currentProduct
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateSingleProduct: productData => {
      dispatch(updateSingleProduct(productData))
      // ownProps.history.push('/products');
    },
    fetchSingleProduct: productId => dispatch(fetchSingleProduct(productId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EditProduct))
