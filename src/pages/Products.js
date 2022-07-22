import {Link} from 'react-router-dom';
const Products =()=>{
    return<section >
     <h1>The Product Page</h1>   
   <li><Link to='/Product/p1'>A book</Link></li>
   <li><Link to='/Product/p2'>A carpet</Link></li>
   <li><Link to='/Product/p3'>A house</Link></li>

   
    
    </section>
    }
    export default Products;