import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader';
import Navbar from './components/Navbar';
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Cart = lazy(() => import('./pages/Cart'));
const Shipping = lazy(() => import('./pages/Shipping'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          {/* Logged In routes */}
          <Route path='/shipping' element={<Shipping />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App