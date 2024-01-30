import "./globals.css";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';


export const metadata = {
  title: "Nicolás Llorca / Software devoloper",
  description: "Hello, This is my page",
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;




