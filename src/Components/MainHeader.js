import { Link } from "react-router-dom";

const MainHeader = () =>
{

<nav>
    <ul>
        <li>
            <Link to ="/Welcome">Welcome</Link>
        </li>

        <li>
        <Link to ="/Products">Products</Link> 
        </li>
    
    </ul>
</nav>
}
export default MainHeader;