import { Link, NavLink } from "react-router";
import { CART_ROUT } from "../../router/routes";
import { CountOrders } from "./CountOrders";

// export const MainMenuRight = () => {
//   return (
//     <div className="main-menu-right">
//       <img src="../../../img/header-controls-sprite.png" alt="" />
//       <div className="header-controls-pics">
//         ЛУПА
//         <div
//           data-id="search-expander"
//           className="header-controls-pic header-controls-search"
//           onClick={() => {
//             console.log("Клик по лупе");
//           }}
//         ></div>

//         КОРЗИНА
//         <Link
//           className="header-controls-pic header-controls-cart"
//           to={CART_ROUT}
//           onClick={() => console.log("Клик по корзине")}
//         >
//           <CountOrders />
         
//         </Link>
//       </div>
//       ПОЛЕ ПОИСКА - Форма
//       <form
//         data-id="search-form"
//         className="header-controls-search-form form-inline invisible"
//       >
//         <input
//           className="form-control"
//           id="search-field"
//           name="search-field"
//           placeholder="Поиск"
//         />
//       </form>
//     </div>
//   );
// };

// Вношу изменения:
export const MainMenuRight = () => {
  return (
    <div className="main-menu-right">
      
      {/* ПОЛЕ ПОИСКА - Форма */}
      <form
        data-id="search-form"
        className="header-controls-search-form form-inline invisible"
      >
        <input
          className="form-control"
          id="search-field"
          name="search-field"
          placeholder="Поиск"
        />
      </form>

      <div className="header-controls-pics">
        {/* ЛУПА */}
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={() => {
            console.log("Клик по лупе");
          }}
        ></div>

        {/* КОРЗИНА */}
        <Link
          className="header-controls-pic header-controls-cart"
          to={CART_ROUT}
          onClick={() => console.log("Клик по корзине")}
        >
          <CountOrders />
        </Link>
      </div>
    </div>
  );
};
