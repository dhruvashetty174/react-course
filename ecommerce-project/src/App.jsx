import { HomePage } from './pages/HomePage'
import './App.css'
import { Routes,Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}
 export default App
