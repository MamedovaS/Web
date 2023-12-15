import './App.css';
import Nav from './components/nav/nav'
import './components/nav/nav.css'
import Info from './components/info/info'
import './components/info/info.css'
import Stadium from './components/stadium/stadiums'
import './components/stadium/stadiums'
import ViewMoreButton from './components/viewmoreButton/viewmoreButton'
import './components/viewmoreButton/viewmoreButton.css'
import Footer from './components/footer/footer'
import './components/footer/footer.css'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Info/>
      <Stadium/>
      <ViewMoreButton/>
      <Footer/>
    </div>
  );
}

export default App;
