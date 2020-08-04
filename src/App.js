import React, {Component} from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.jsx'
import ShopPage from './pages/shop-page/shop-page.jsx'
import Hatspage from './pages/hatspage/hatspage.jsx'
import Jackets from './pages/jackets/jackets.jsx'
import Sneakers from './pages/sneakers/sneakers.jsx'
import MenswearPage from './pages/mens-wear/mens-wear.jsx'
import WomenswearPage from './pages/womens-wear/womens-wear.jsx'
import Header from './components/navbar/navbar.jsx'



class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop-page' component={ShopPage} />
          <Route path='/hats' component={Hatspage} />
          <Route path='/jackets' component={Jackets} />
          <Route path='/sneakers' component={Sneakers} />
          <Route path='/mens-wear' component={MenswearPage} />
          <Route path='/womens-wear' component={WomenswearPage} />
        </Switch>

      </div>
    )
  }
}

export default App;
