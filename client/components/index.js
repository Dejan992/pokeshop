/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './navbar'
export { default as UserHome } from './user-home'
export { default as ProductView } from './ProductView'
export { default as CurrentProduct } from './CurrentProduct'
export { Login, Signup } from './auth-form'
export { default as Footer } from './footer'
export { default as AddProduct } from './AddProduct'
export { default as EditProduct } from './EditProduct'
export { default as UnmatchedRoute } from './UnmatchedRoute'
export { default as Review } from './review'
