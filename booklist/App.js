import React, {Component} from  'react';
import './App.css';
import Book from './components/Book';
import Booklist from './components/Booklist';
// import Orange from '.components/Booklist';
import {name,age} from './components/data';

//Stateless
// function App(){
//   return(
//     <div>
//       hello from app
//       <Booklist/>
//     </div>
//   );
// }

//class based || state || life cycle
// class App1 extends Componnet {

class App extends Component {
  render(){
    return(
      <div>
        hello from app
        <Booklist/>
      </div>
    );
  }
}

 
// //Fonksiyonel Komponent
// function App(){
//   return(
//     <div>
//       Hello from App
//       <Orange/>
//       <p>{name}</p>
//       <p>{age}</p>
//     </div>
//   );
// }
export default App;
