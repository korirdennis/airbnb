import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card
          img="/Zarefes.png"	
          rating={4}
          reviewCount={6}
          country="USA"
          price={100}
          title="The best place to stay"

      
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
    </div>
  );
}

export default App;



