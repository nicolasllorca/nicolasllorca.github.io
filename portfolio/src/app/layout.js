import "./globals.css";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';

export const metadata = {
  title: "Nicolás Llorca / Software devoloper",
  description: "Hello, This is my page",
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  )
}

export default Layout;




