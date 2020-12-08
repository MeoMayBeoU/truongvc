
import React, { Component } from 'react';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import Experiences from './pages/experiences/Experiences';
import Portfolios from './pages/portfolios/Portfolios';
import Footer from './pages/footer/Footer';
export default class Home extends Component {
  render() {
    return (
      <section>
        <div>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-4 col-xl-4'>
                <Profile />
              </div>
              <div class='col-lg-8 col-xl-8'>
                <About />
                <Experiences />
                <Portfolios />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
