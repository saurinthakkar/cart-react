import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
            {    
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'',
                id:1
            },
            {    
                price:919,
                title:'Wallet',
                qty:9,
                img:'',
                id:2
            },
            {    
                price:109,
                title:'Trimmer',
                qty:8,
                img:'',
                id:3
            }
             
            ]
        }
       // this.testing();
        //this.increaseQuantity = this.increaseQuantity.bind(this)
    }


    render(){
        const {products} = this.state;
        console.log(products)
        
        //const arr = [1,2,3,4,5]
        return(
            <div className="cart">
               {products.map((product)=>
               {
                   return <CartItem product = {product} key = {product.id}/>
               })}

            </div>
            
        );
    
    }
}



export default Cart;