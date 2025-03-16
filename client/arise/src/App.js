
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routing from './Routing';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useLocation } from 'react-router-dom'; // Import useLocation

function App() {
  const location = useLocation(); // Get the current route location

  // Define routes where Header and Footer should be hidden
  const hideHeaderFooterRoutes = ['/admin', '/login', '/register'];

  // Check if the current route is one of the routes where Header and Footer should be hidden
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className='App'>
      {/* Conditionally render Header */}
      {!shouldHideHeaderFooter && <Header />}

      {/* Render Routing */}
      <Routing />

      {/* Conditionally render Footer */}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;