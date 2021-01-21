import React, {Component} from 'react';
import Book from './Book';
import booksData from './data';

//rcc enter 
class Booklist extends Component {
    constructor(props) {
        super(props);

        this.state={
            books : booksData
        };
    }
    handleClick=()=>{
        console.log("Ben Lower Button Habercisi");
    }   


    render() {
        // const example = this.state.books.map(item => item.book)
        // console.log(example);
        return(
            <div>
                <h2>Bu Haftanın En Çok Satılan Kitapları</h2>
                {this.state.books.map((book) => (
                        <Book key = {book.id} info ={book}/>
                ))}
                <button onClick={this.handleClick}/>
                <button onClick={this.handleClick}>Tıklandı</button>
                {/* <Book info = {this.state.books[0]}/>
                <Book info = {this.state.books[1]}/>
                <Book info = {this.state.books[2]}/> */}
            </div>
        )
    }
}

export default Booklist;









//1
// import React from 'react';
// import Book from './Book';

// const Booklist = ()=>(
//     <div>
//         <h2>Hello from booklist</h2>

//         <Book/>
//     </div>
// );

// export default BookList