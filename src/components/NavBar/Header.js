import React, { Component } from 'react'
import './Header.css'
import { MenuItems } from './MenuItems'
import Logo from '../../images/hosting.png'

export default class Header extends Component {
  state = {clicked: false};
  dropMenu = document.querySelector('#dropMenu')
  handleClick = (dropMenu) => {
    if(this.state.clicked === false){
      this.setState({clicked: !this.state.cliked})
      dropMenu.classList.add('active')
      dropMenu.classList.remove('desactive')
    }else{
      this.setState({clicked: this.state.cliked})
      dropMenu.classList.add('desactive')
      dropMenu.classList.remove('active')
    }
  }
  render() {
    return (
      <nav className='NavbarItems sticky-top top-0 w-100' style={{position:'sticky',top:'0'}}>
        <div className='ctc'>
          <span className='navBar-log  text-white'><strong><a href='/'><img alt='logo' src={Logo} width='30'/>Crypto-Tech</a></strong></span>
          <span id="menu" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          {this.state.clicked ? 'Close' : 'Open'}
        </span>
        </div>
        

        <div>
          <ul className='active mt-1' id='dropMenu'>
            {MenuItems.map((item , index)=>{
              return(
                <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
