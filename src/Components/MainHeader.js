import { NavLink } from "react-router-dom";
import classes from './MainHeader.css';

const MainHeader = () =>
{
<header className={classes.header}>
<nav>
    <ul>
        <li>
            <NavLink activeClassName="={classes.active" to ="/Welcome">Welcome</NavLink>
        </li>

        <li>
        <NavLink activeClassName="={classes.active" to ="/Products">Products</NavLink> 
        </li>
    
    </ul>
</nav>
</header>
}
export default MainHeader;