import React from 'react';
import './App.css';

function Loader() {
    
    var x=sessionStorage.getItem("isLoaded");
    if(x==0) {

        return(
            <div className="body">
            
                <div className="landingPage">
                    <div className="landingDisplay">
                        <h1 id="loadh1" className="landingText">Wel</h1>
                        <h1 id="loadh2" className="landingText">come</h1>
                    </div>
    
                    
                </div>
            
            </div>
            
        )
        

    }
    else {
        return (
            null
        )
    }
}

export default Loader;