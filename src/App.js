import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views';
import ChoiceBread from './views/ChoiceBread';
import MeatChoice from './views/ChoiceMeat';
import IngredientsChoice from './views/ChoiceIngredients';
import SauceChoice from './views/ChoiceSauce';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/choice-bread' component={ChoiceBread} />
        <Route exact path='/choice-meat' component={MeatChoice} />
        <Route exact path='/choice-ingredients' component={IngredientsChoice} />
        <Route exact path='/choice-sauce' component={SauceChoice} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
