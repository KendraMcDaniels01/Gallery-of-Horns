import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import data from './assets/data';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Gallery data={data} />
        <Footer />
      </div>
    </>
  )
}

export default App;
