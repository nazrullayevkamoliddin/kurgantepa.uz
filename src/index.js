import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category,News, Links, About } from './pages'
import Footer from './component/Footer'
import Navbar from './component/Navbar/Navbar';
// import PanelADM from './admin/apps/panel';

const Layout = props => (<>
  <div className='navbarss'>
  <Navbar />
  </div>
  {props.children}
</>)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        </Route>
        {/* <Route index element={<Home />} /> */}
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/news' element={<Layout><News/></Layout>} />
        <Route path='/category' element={<Layout><Category/></Layout>} />
        <Route path='/links' element={<Layout><Links/></Layout>} />
        <Route path='/contact' element={<Layout><Footer/></Layout>} />
        {/* <Route path='/panel' element={<PanelADM/>}/> */}
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);



