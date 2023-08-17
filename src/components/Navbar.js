import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        background : 'purple',
        color: 'white'
    };

    return(
        <div>
            <ul>
                <li><NavLink to="/main" style={ ({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/about" style={ ({isActive}) => isActive? activeStyle: undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={ ({isActive}) => isActive? activeStyle: undefined}>포켓몬 목록</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;