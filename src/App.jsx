import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App;
