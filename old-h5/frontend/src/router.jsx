import { Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Tabs from './tabs';
import Index from './pages/index'
import About from './pages/about'
import Person from './pages/person'
import PersonDetail from './pages/person/detail'

export default (
  <Layout>
    <Routes>
      <Route path="/" element={<Tabs><Person /></Tabs>} />
      <Route path="/person" element={<Tabs><Person /></Tabs>} />
      <Route path="/person/detail/:id" element={<PersonDetail />} />
      <Route path='/activity' element={<div className='d:f ai:c jc:c mt:20 fs:16'>建设中...</div>} />
      <Route path="about" element={<About />} />
    </Routes>
  </Layout>
)