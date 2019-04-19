import React, { Component } from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {
  constructor(){
    super()

      this.state = {
        imageUrl: [],
        productName: [],
        price: []
    }
  }

  handleChangeImage = (e) => {
    this.setState({
      imageUrl: e.target.value
    })
  }

  handleChangeProduct = (e) => {
    this.setState({
      productName: e.target.value
    })
  }

  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  render() {
    return (
      <div>
        <header className="Brand"> Shelfie

          <div className='greenBox' style={{width: '30vw', height: '45vh', backgroundColor: '#3AD886'}}>
          <img style = {{width:'150px', padding: '15px'}} src='http://whats-theword.com/wp-content/themes/gonzo/images/no-image-featured-image.png'/>

          <input className='firstSqaure' onChange={(e)=> {
            console.log(this.state.imageUrl)
            this.setState({
              imageUrl: e.target.value
            })
          }}/>

          <input className='secondSqaure' onChange={(e)=> {
            console.log(this.state.productName)
            this.setState({
              productName: e.target.value
            })
          }}
          />


          <input className='thirdSqaure' onChange={(e) => {
            console.log(this.state.price)
            this.setState({
              price: e.target.value
            })
          }} />



            <div>
              <button >Cancel</button>
              <button>Add to Inventory</button>
            </div>
          </div>
         </header>
        <Product/> 
      </div>
    )
  }
}