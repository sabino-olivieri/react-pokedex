import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../stores/store';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SidebarDetails from '../components/SidebarDetails';

// Creazione di un bottone con stile
const Button = styled.button`
  
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;

  // Cambia colore al passaggio del mouse
  &:hover {
    background-color: darkblue;
  }
`;



export default function LayoutPage() {
  

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <SidebarDetails />
        <div className="container my-3 pokedex" id='main-container'>
          <div className="row g-2">
        {/* <Button>button</Button> */}
            
            <Outlet />
          </div>
        </div>
      </Provider>
    </>
  )
}

