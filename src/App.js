  import {Route,Switch} from 'react-router-dom';
  import Welcome from './pages/Welcome';
  import ProductDetails from './pages/ProductDetails'

  import Products from './pages/Products';
  import MainHeader from './Components/MainHeader';

  function App() {
    return (
      <div>
        
        <MainHeader />
        <main>
          <Switch>
      <Route path="/Welcome">
       <Welcome/>
      </Route>

      <Route path ='/Products/:productId'>
          <ProductDetails/>
        </Route>

      <Route path="/Products" exact>
       <Products/>
        </Route>


        </Switch>
        </main>
      </div>

      
    );
  }

  export default App;
