import { HomePage } from '@/pages/HomePage'
import { NotFound } from '@/pages/NotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


