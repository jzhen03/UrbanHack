import Tab from './Tab.jsx';
import './NavBar.css';

function Navigation() {
    return (
        <>  
            <h1>Navigation Bar</h1>
            <Tab value="Diagonsis Help"/>
            <Tab value="Connect with Doctor"/>

            {/*<div className="navbar">
                <h1>My App</h1>
                <div className="tabs-vertical">
                    <Tab value = "Tab1"/>
                    <Tab value = "Tab2"/>
                    <Tab value = "Tab3"/>
                    <Tab value = "Tab4"/>
                </div>
            </div>*/}
        </>
        
    );
}

export default Navigation;