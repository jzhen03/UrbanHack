import Tab from './Tab.jsx';
import './navbar.css';

function Navigation() {
    return (
        <>  
            <h1>Navigation Bar</h1>
            <Tab value="Diagonsis Help"/>
            <Tab value="Connect with Doctor"/>

            <div className="navbar">
            <h1>My App</h1>
            <div className="tab">
            <a href="#tab1">Tab 1</a>
            </div>
            <div className="tab">
            <a href="#tab2">Tab 2</a>
            </div>
            <div className="tab">
            <a href="#tab3">Tab 3</a>
            </div>
            <div className="tab">
            <a href="#tab4">Tab 4</a>
            </div>
            </div>
        </>
        
    );
}

export default Navigation;