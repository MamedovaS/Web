import './stadiums.css'
function Stadiums(){
    return (
        <div className="container">
            <ul className="no-marker">
            <li className="stadiumitem">
            <img src="./stadium.jpg" className="stadiumimage" alt="Stadium Image" />
                <h4 className="stadiumheading">same stadium</h4>
                <p className="stadiuminfo">cool one</p>
            </li>
            <li className="stadiumitem">
            <img src="./stadium.jpg" className="stadiumimage" alt="Stadium Image" />
                <h4 className="stadiumheading">another stadium</h4>
                <p className="stadiuminfo">not bad</p>
            </li>
            <li className="stadiumitem">
            <img src="./stadium.jpg" className="stadiumimage" alt="Stadium Image" />
                <h4 className="stadiumheading">old stadium</h4>
                <p className="stadiuminfo">old and grous</p>
            </li>
            </ul>
            
        </div>
    );
}

export default Stadiums