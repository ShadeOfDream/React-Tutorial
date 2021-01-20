import React from 'react';
import './App.css';

const App = () => <PersonList/>

const PersonList = () => {
  const people = [
    {
      img:22,
      name: 'John',
      job:"Developer"
    },
    {
      img:34,
      name:"Bob",
      job:"Designer"
    },
    {
      img:56,
      name:"Peter",
      job:"Artist"
    },
    {
      img:12,
      name:"William",
      job:"Teacher"
    },
    {
      img:73,
      name:"Lucas",
      job:"Doctor"
    }
  ];
  return(
    <section>
    <Person person={people[0]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Person>
      <Person person={people[1]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Person>
      <Person person={people[2]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Person>
      <Person person={people[3]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Person>
      <Person person={people[4]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        Lorem ipsum dolor sit amet.
      </Person>
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
        <h4 className="about">{children}</h4>
      </div>
    </div>
  );
}

export default App;
