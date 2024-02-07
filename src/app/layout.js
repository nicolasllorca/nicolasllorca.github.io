import "./globals.css";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';
import SeparatorLine from "../Components/SeparatorLine/SeparatorLine";


export const metadata = {
  title: "Nicolás Llorca / Software devoloper",
  description: "Hello, This is my page",
};

const Layout = ({ children }) => {
  return (
    <>
      <Content />
    </>
  )
}

export default Layout;




