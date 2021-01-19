import React from 'react';
import './App.css';

const App = () => <PersonList/>

const PersonList = () => {
  const people = [
    {
      img:22,
      name: 'John',
      job:"developer"
    },
    {
      img:34,
      name:"bob",
      job:"designer"
    },
    {
      img:56,
      name:"peter",
      job:"artist"
    },
    {
      img:12,
      name:"bob",
      job:"designer"
    },
    {
      img:73,
      name:"peter",
      job:"artist"
    }
  ];
  return(
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </Person>
      <Person person={people[2]}/>
      <Person person={people[3]}/>
      <Person person={people[4]}/>
    </section>
  );
  // return <Person></Person>
};

const Person = (props) => {
  const {img, name, job} = props.person;
  const {children} = props;
  // return <div> Merhaba Deeplab.Bootcamp </div>
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <div className="person">
      <img src={url} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h4>{children}</h4>
      </div>
    </div>
  );
}

export default App;
