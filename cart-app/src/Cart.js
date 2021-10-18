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

    handleIncreaseQuantity = (product) => {
        console.log('Hey please increase the qty of',product)

        const {products} = this.state;
        //console.log(products);

        const index = products.indexOf(product)
        products[index].qty += 1;

        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hey please decrease the qty of',product)
        
        const {products} = this.state;
        console.log(products);

        const index = products.indexOf(product);
        console.log(index);
        products[index].qty -= 1;

        this.setState({
            products:products
        })

    }


    render(){
        const {products} = this.state;
        console.log(products)
        
        //const arr = [1,2,3,4,5]
        return(
            <div className="cart">
               {products.map((product)=>
               {
                   return (
                   <CartItem 
                   product = {product} 
                   key = {product.id}
                   onIncreaseQuantity = {this.handleIncreaseQuantity}
                   onDecreaseQuantity = {this.handleDecreaseQuantity} />
                   
                   )
               })}

            </div>
            
        );
    
    }
}



export default Cart;