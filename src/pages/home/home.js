
import Info from '../../components/info/info'
import '../../components/info/info.css'
import Stadium from '../../components/stadium/stadiums.js'
import '../../components/stadium/stadiums.css'
import ViewMoreButton from '../../components/viewmoreButton/viewmoreButton'
import '../../components/viewmoreButton/viewmoreButton.css'


function Home() {
  return (
    <div className="Home">
      <Info/>s
      <Stadium/>
      <ViewMoreButton/>
    </div>
  );
}

export default Home;
