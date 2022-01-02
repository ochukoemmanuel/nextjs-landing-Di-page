import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='font-poppins bg-light'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
