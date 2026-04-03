
import { Link, NavLink} from "react-router"
import { Image } from "../../../img/Image"
import { ABOUTE_ROUT, CATALOG_ROUT, CONTACTS_ROUT, CART_ROUT } from "../../router/routes"


export const MainMenu =()=> {

    return (
      <div className="main-container">

        <div className="main-menu">
            <div className="main-menu-left">
                <Link className="main-menu-item" to={'/'}>{< img src="../../../img/header-logo.png"/>}</Link>
                <Link className="main-menu-item" to={'/'}>Главная</Link>
                <NavLink  to={CATALOG_ROUT} className="main-menu-item">Каталог</NavLink>
                <NavLink to={ABOUTE_ROUT} className="main-menu-item">О магазине</NavLink>
                <NavLink className="main-menu-item" to={CONTACTS_ROUT}>Контакты</NavLink>
            </div>
            <div className="main-menu-right">
              {/* <img src="../../../img/header-controls-sprite.png" alt="" /> */}
                <div className="header-controls-pics">
                  {/* ЛУПА */}
                  <div data-id="search-expander" 
                        className="header-controls-pic header-controls-search"
                        onClick={()=>{console.log("Клик по лупе")}}
                        >
                  </div>
                  
                  {/* КОРЗИНА */}
                  <Link 
                      className="header-controls-pic header-controls-cart" 
                      to={CART_ROUT}
                      onClick={()=> console.log("Клик по корзине")}
                      > 
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>

                  </Link>
                  {/* <div 
                    className="header-controls-pic header-controls-cart"
                    onClick={()=> console.log("Клик по корзине")}
                    >
                      Выполняйте программную навигацию по щелчку мыши, чтобы /cart.html 
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div> */}

                </div>
                {/* ПОЛЕ ПОИСКА - Форма */}
                <form 
                  data-id="search-form" 
                  className="header-controls-search-form form-inline invisible">
                    <input 
                    className="form-control"
                    id="search-field" 
                    name="search-field"
                    placeholder="Поиск"/>
                </form>
            </div>         
        </div>

        <div className="banner">
                <img  src="../../../img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
                <h2 className="banner-header">К весне готовы!</h2>
        </div>    

      </div>
    )


}

