  import {Route} from 'react-router-dom';
  import Welcome from './pages/Welcome';

  import Products from './pages/Products';
  import MainHeader from './Components/MainHeader';

  function App() {
    return (
      <div>
        <MainHeader />
      <Route path="/Welcome">

      <Welcome/>
      </Route>
      <Route path="/Products">

        <Products/>
        </Route>
      </div>
    );
  }

  export default App;
