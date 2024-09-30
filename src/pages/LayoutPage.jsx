import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../stores/store';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SidebarDetails from '../components/SidebarDetails';
import Toast from '../components/Toast';



export default function LayoutPage() {
  

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <SidebarDetails />
        <div className="container my-3 pokedex" id='main-container'>
          <div className="row g-2">
            
            <Outlet />
          </div>
        </div>
        <Toast />
      </Provider>
    </>
  )
}

