import React, { Component } from 'react';
import Button from './Button';

class Book extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            count: 0
            // name: "Zeki",
            // age:"36"
        };
        
        // this.handleClick = this.handleClick.bind(this)
    }
    addCount= ()=> {
        this.setState({
            count: this.state.count + 1            
        });     
    }
    lowerCount= ()=> {
        this.setState({
            count: this.state.count - 1            
        });
        
    }
    resetCount= ()=> {
        this.setState({
            count: 0          
        });  
    }
    
    // handleClick= ()=> {
    //     this.setState({
    //         count: this.state.count + 1,
    //         name: "Mustafa"
    //     })
    //     // console.log("Bana Tıkla!");
    //     // console.log(this.state.count);
    // }
    //handle -state important

    render() {
        const {img,title,author} = this.props.info;
        return (
            <div className ="book">
                <img src={img} width="150px" alt="Book"/>
                <div>
                    <h4>Title: {title}</h4>
                    <h6>BY: {author}</h6> 
                    <button onClick={this.addCount}>Add Count</button> 
                    {/* <button onClick={this.state.lowerCount}>Lower Count</button> 
                    <button onClick={this.state.reserCount}>Reset Count</button>  */}
                    <h1>Count: {this.state.count}</h1> 
                    <Button/>
                    {/* <h3>Name: {this.state.name}</h3>              */}
                </div>
              {/* <h3>hello from Book!</h3>   */}
            </div>
        );
    }
}

export default Book;

//1
// import React from 'react';

// const Book = () => <h3>Hello from book</h3>

// export default Book;