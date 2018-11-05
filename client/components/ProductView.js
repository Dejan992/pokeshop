import React from 'react'
import ProductCard from './ProductCard'
import {connect} from 'react-redux'
import CategoryPanel from './CategoryPanel'
import {fetchPaginatedProducts} from '../store/index'
import PageSelector from './PageSelector'

//keep as class instead of function component, since we will be adding more function later
class ProductView extends React.Component {
  state = {loading: true}

  async componentDidMount() {
    const urlParamStr = this.props.location.search.slice(1)
    await this.props.fetchPaginatedProducts(urlParamStr)
    this.setState({loading: false})
  }

  componentDidUpdate = async prevProps => {
    if (this.props.location !== prevProps.location) {
      const urlParamStr = this.props.location.search.slice(1)
      this.setState({loading: true})
      await this.props.fetchPaginatedProducts(urlParamStr)
      this.setState({loading: false})
    }
  }

  render() {
    const loading = this.state.loading
    if (loading) {
      return (
        <div className="main-content columns is-fullheight">
          <CategoryPanel {...this.props}/>
          <div className="container column">
            <div className="is-3">Loading...</div>
          </div>
        </div>
      )
    }
    const paginatedProducts = this.props.paginatedProducts
    if (paginatedProducts.products.length === 0) {
      return (
        <div className="main-content columns is-fullheight">
          <CategoryPanel location={this.props.location}/>
          <div className="container column">
            <div>No Products</div>
          </div>
        </div>
      )
    }
    const {page, pageCount, limit, key, products, count, catIds} = paginatedProducts
    const offset = (page - 1) * limit;
    const startProdNum = offset + 1
    const endProdNum = offset + products.length;
    const foundResultsMessage = `Found ${count} products. Displaying results ${startProdNum} to ${endProdNum}`
    return (
      <div className="main-content columns is-fullheight">
        <CategoryPanel location={this.props.location} searchKey={key}/>
        <div className="container column">
          <div className="container">
            <PageSelector />
            <div className="container">
              <p className="is-size-5 has-text-left">{foundResultsMessage}</p>
            </div>
            <div id='listOfPokemons' className="section tile is-ancestor" >
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({categoriesAreSelected, paginatedProducts}) => {
  return {
    categoriesAreSelected,
    paginatedProducts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPaginatedProducts: queryObj =>
      dispatch(fetchPaginatedProducts(queryObj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
