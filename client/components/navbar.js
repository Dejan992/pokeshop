import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../store'
import SearchBar from './SearchBar'
import { destroySearch, setCategoriesTrue } from '../store/'
const Navbar = ({ handleClick, isLoggedIn, destroy, orders }) => {
  const currentOrderId = orders.currentOrderId
  let total = 0
  if (currentOrderId) {
    for (let i = 0; i < orders[currentOrderId].lineItems.length; i++) {
      total += orders[currentOrderId].lineItems[i].quantity
    }

  }
  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <NavLink to="/">
            <img
              src="https://fontmeme.com/permalink/181030/daad87fcebbaa61672816a5c6bb13e9c.png"
              width="112"
              height="28"
            />
          </NavLink>
        </div>
        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <NavLink to="/">Home</NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/products" onClick={() => destroy()}>
              Products
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/home">User Home</NavLink>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">More</div>

            <div className="navbar-dropdown">
              <div className="navbar-item">About</div>
              <div className="navbar-item">Jobs</div>
              <div className="navbar-item">Contact</div>
            </div>
          </div>
          <div className="navbar-item is-center is-expanded has-addons">
            <SearchBar destroy={destroy} />
          </div>
        </div>
      </div>

      {/* <SearchBar /> */}
      <div className="navbar-end">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="navbar-item">
          <Link to="/cart">
            <div className="buttons">
              <div className="fa fa-shopping-cart" style={{ fontSize: '24px' }} />
              <div className="badge">{total}</div>
            </div>
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary" onClick={handleClick}>
                <strong>
                  <Link to="/signup">Log out</Link>
                </strong>
              </div>
            </div>
          </div>
        ) : (
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary">
                  <strong>
                    <Link to="/signup">Sign Up</Link>
                  </strong>
                </div>
                <div className="button is-light">
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    orders: state.orders
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    destroy: async () => {
      await dispatch(destroySearch())
      await dispatch(setCategoriesTrue())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
