  import {Route} from 'react-router-dom';
  import Welcome from './pages/Welcome';

  import Products from './pages/Products';
  import MainHeader from './Components/MainHeader';

  function App() {
    return (
      <div>
        
        <MainHeader />
        <main>
      <Route path="/Welcome">
       <Welcome/>
      </Route>

      <Route path="/Products">
       <Products/>
        </Route>
        </main>
      </div>
      
    );
  }

  export default App;
