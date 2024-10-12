import React from 'react';
import Nav from './Navbar';
import Home from './Home';
import Cards from './Cards';
import Last from './Last';
import Footer from './Footer'
export default class App extends React.Component{
    render(){
        return(
            <>
            <Nav/>
            <Home/>
            <Cards/>
            <Last/>
            <Footer/>
            </>
                
            
        )
    }
}