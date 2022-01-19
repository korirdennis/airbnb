import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Joke from './components/Joke';
import Navbar from './components/Navbar';
import Test from './components/Test';

import JokesData from '../src/JokesData';
import Contacts from './components/Contacts';
import ContactDetails from '../src/ContactDetailsData';

import CardData from '../src/data';
import User from './components/User';
import usersData from '../src/usersData';


function App() {

  const UserDataElements = usersData.map(user => {
    return (
      <User
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        address={user.address.street}
        phone={user.phone}
        website={user.website}
        company={user.company.name}
        catchPhrase={user.company.catchPhrase}

      />
    )
  });



  const CardDataElements = CardData.map(card => {
    return <Card 
                key={card.id}
                img={card.coverImage}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                country={card.location}
                price={card.price}
            />
  }); 
  

   const JokeElements = JokesData.map(joke => {
     return <Joke     
     setup={joke.setup} 
     punchline={joke.punchline} />  
    });

    const contactElements = ContactDetails.map(contact => {
      return <Contacts
      name={contact.name}
      age={contact.age}
      city={contact.city}
      Country={contact.Country}
      />  
    });



  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      
      <Card

          img='http://placekitten.com/200/300'
          rating={4}
          reviewCount={6}
          country="USA"
          price={100}
          title="The best place to stay"

      
      />
      <Card

        img='http://placekitten.com/g/200/300'
        rating={5}
        reviewCount={10}
        country="USA"
        price={135}
        title="The best place to stay in the world"


        />

      <Test/>
      <div className='contacts'>
        <Contact
          name='Mr. Whiskerson'
          imgUrl='http://placekitten.com/200/300'
          phone='123-456-7891'
          email='whiskerson@cat.moew'
          
        />
        <Contact
          name='Fluffykins'
          imgUrl='http://placekitten.com/g/200/300'
          phone='123-456-7892'
          email='fluffy@cat.moew'

        />
        <Contact
          name='Destroyer'
          imgUrl='http://placekitten.com/200/300'
          phone='123-456-7893'
          email='destroyer@cat.moew'

        />
        <Contact
          name='Catwoman'
          imgUrl='http://placekitten.com/g/200/300'
          phone='123-456-7894'
          email='catwoman@cat.moew'

        />

      </div>
      {JokeElements}
      {contactElements}
      {CardDataElements}
      {UserDataElements}
    </div>
  );
}

export default App;



