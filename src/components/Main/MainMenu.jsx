
import { Link, NavLink} from "react-router"
import { Image } from "../../../img/Image"
import { ABOUTE_ROUT, CATALOG_ROUT, CONTACTS_ROUT } from "../../router/routes"


export const MainMenu =()=> {

    return (
        <div className="main-menu">
            <div className="main-menu-left">
                <Link className="main-menu-item" to={'/'}>{< img src="../../../img/header-logo.png"/>}</Link>
                <Link className="main-menu-item" to={'/'}>Главная</Link>
                <NavLink  to={CATALOG_ROUT} className="main-menu-item">Каталог</NavLink>
                <NavLink to={ABOUTE_ROUT} className="main-menu-item">О магазине</NavLink>
                <NavLink className="main-menu-item" to={CONTACTS_ROUT}>Контакты</NavLink>
            </div>
            <div className="main-menu-right">
            <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск"/>
                </form>
            </div>

           
        </div>

    )


}

