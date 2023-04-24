import './App.css';
import Boxs from './component/boxs/Boxs';
import Client from './component/client/Client';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Gallery from './component/gallery/Gallery';
import { Fragment } from 'react';

const App = ()=>{
  return (
    <Fragment>
      <Header/>
      <Boxs/>
      <Client/>
      <Gallery/>
      <Footer/>
    </Fragment>
  );
}

export default App;
