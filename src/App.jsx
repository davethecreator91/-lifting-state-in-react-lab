// ------------------------imports-------------------------------
import './App.css';
import 'src/components/IngredientList.jsx'
import 'src/components/BurgerStack.jsx'
import IngredientList from './components/IngredientList';
import { useState } from 'react';

//----------------------------arrays-----------------------------
export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];



const App = () => {
  const [stack, setStack] = useState();


  const addToBurger = (newBurger) => {
    props.preventDefault();
    setStack([...stack, newBurger])
  }

  const removeFromBurger = () => {

  }


  return (
    <>
    
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />
        <BurgerStack addToBurger={addToBurger} />
        <ul>
      {stack.map((stack, index) => {
        return <li key={index}>{todo}</li>;
      })};
    </ul>
      </section>
    </main>
    </>
  );
};

export default App;
