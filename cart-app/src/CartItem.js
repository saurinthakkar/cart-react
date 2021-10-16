import React from "react";


class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'New phone',
            qty: 1,
            img: ''
        }
       // this.testing();
        this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    testing(){
        const promise = new Promise((resolve,reject) => {
            setTimeout (() => {
                resolve('done')
            },5000);
    })

    promise.then(() => {

        this.setState({qty:this.state.qty+10});
        this.setState({qty:this.state.qty+10});
        this.setState({qty:this.state.qty+10});

        console.log('state',this.state);
    });

}

    

    increaseQuantity = () => {
        //console.log("this",this.state);
        
        //setState method-1
        // this.setState({
        //     qty : this.state.qty + 1
        // },() => {
        //     console.log('this.state',this.state);
        // });
  
        //setState method-2

        // this.setState((prevState) => {

        //         return {
        //             qty : prevState.qty + 1
        //         }
    
        // },() => {
        //     console.log('this.state',this.state);
        
        // });
        //hello
       
      
        
}
        
        
        
    

    decreaseQuantity = () => {
        this.setState((prevState) => {

            if(prevState.qty > 0){
                return {
                    qty : prevState.qty - 1
                }

            }
            else {
                return null
            }
           
        });
    }

    render(){
        console.log("render")
        const {price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>

                </div>
                <div className="right-block">
                    <div style = { {fontSize:25} } > {title}</div>
                    <div style = { {color:'#777',fontSize:15 }} > {price}</div>
                    <div style = { {color:'#777',fontSize:15}}  > {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className = "action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={this.increaseQuantity}>

                        </img>
                        <img alt="decrease" className = "action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQuantity}></img>
                        <img alt="delete" className = "action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"></img>

                    </div>

                </div>

            </div>
        );
    }
}

const styles = {
    image : {
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;