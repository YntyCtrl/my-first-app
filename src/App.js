
import Age from './components/Age';
import Book from './components/Book';
import ByeWorld from './components/Bye';
import Cunga from './components/Cunga';
import HelloWorld from './components/HelloWorld';
import Hochu from './components/Hochu';
import Length from './components/Length';
import Lowercase from './components/Lowercase';
import Round from './components/Round';
import Song from './components/Song';
import Sum from './components/Sum';
import Uppercase from './components/Uppercase';
import Water from './components/Water';
import Year from './components/Year';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      
      <ByeWorld/>
      
      <Cunga/>
      
      <Hochu v="dubai"/>

      <Book name="Control" author="Yntymak"/>
      <Song name="Despasito" artist="Luck"/>
      <Length string="Yntymak"/>
      <Uppercase>HFNF</Uppercase>
      <Lowercase>sdfsdf</Lowercase>
      <Age year={1998}/>
      <Year age={23}/>
      <Round number={45.2342342}/>
      <Water frozen={true}/>
      <Water frozen={false}/>
      <Sum a={4} b={5}/>
      <Sum a={-356} b={181}/>
    </div>
  );
}

export default App;
