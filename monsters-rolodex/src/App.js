import React,{Component} from 'react';
import {CardList} from './components/card-list.component';
import {SearchBox} from './components/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      // string: 'Hello Z'
      monsters: [],
        //component mount edildikten sonra çalışacak event i yazacağız 3.parti bir api ile çalışıp diziyi bununla dolduracağız
        // {
        //   name: 'Frenkestein',
        //   id: 'asc1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'asr1'
        // },
        // {
        //   name: 'Zombi',
        //   id: 'as1w'
        // }
       // ],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className = "App">
        <SearchBox
        placeholder ='search monsters'
        handleChange = {(e)=> this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>

        {/* <CardList monsters =  {this.state.monsters}/> */}
        {/* <CardList name="Bu">
          <h1>sss</h1>
        </CardList>
        {
        this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        } */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt=""/>
          <p>
            {this.state.string}
          </p>
          <button onClick={()=>this.setState({string:"Hello B"})}>Change Text</button>
        </header> */}
      </div>
    );
  };
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
