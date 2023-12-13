import { Outlet, Link } from "react-router-dom";

const Layout =() =>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/java">JAVA</Link>
                </li>
                <li>
                    <Link to="/python">PYTHON</Link>
                </li>
                <li>
                    <Link to="/sql">SQL</Link>
                </li>
                <li>
                    <Link to="/html">HTML</Link>
                </li>
                <li>
                    <Link to="/javascrip">JAVASCRIP</Link>
                </li>
                <li>
                    <Link to="/cmas">C++</Link>
                </li>
                <li>
                    <Link to="/php">PHP</Link>
                </li>
            </ul>
        </nav>
       <hr/>
       <Outlet/>
    </div>
}
export default Layout;