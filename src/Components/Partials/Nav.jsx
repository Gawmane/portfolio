import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import { useState } from "react";


export const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.ulwrapper}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export function BurgerMenu() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? style.burgerMenuActive : style.burgerMenu} onClick={handleToggle}>
                <AiFillHome className={style.burgerMenuHome} />
                <AiOutlineClose className={style.burgerMenuClose} />
            </div>

            <ul className={isActive ? style.activeMenu : style.menu}>
                <li><NavLink className={style.navigationLinks} to="/" onClick={handleToggle}>Forside</NavLink></li>
                <li><NavLink className={style.navigationLinks} to="/login" onClick={handleToggle}>Login</NavLink></li>
            </ul>
        </>
    )
}