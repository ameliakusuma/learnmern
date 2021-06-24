import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked'

import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return (
        <>  {/* passing props ke header */}
            <Header {...this.props}></Header> 
            {/* mengambil json dari landingPage*/}
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
            {/* ini kalau heronya dikasih refMostPicked jadi bisa scroll down ke mostpicknya kalau button show me more di klik */}
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        </>
        );
    }
}
