import {Route} from 'react-router-dom';
import Welcome from './components/Welcome';

import Products from './components/Products';
function App() {
  return (
    <div>
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
