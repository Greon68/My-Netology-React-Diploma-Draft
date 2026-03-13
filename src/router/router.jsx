import { createBrowserRouter } from "react-router";
import { About } from "../components/About/About";
import { Catalog } from "../components/Catalog/Catalog";
import { Contacts } from "../components/Contacts/Contacts";
import { HomePage } from "../components/Home/HomePage";
import { MainTemplate } from "../components/Main/MainTemplate";
import { NodFound } from "../components/NodFound/NodFound";
import { ABOUTE_ROUT, CATALOG_ROUT, CONTACTS_ROUT } from "./routes";

// export const HOME_ROUT = '/';
// export const CONTACTS_ROUT = '/contacts';
// export const CATALOG_ROUT = '/catalog';
// export const ABOUTE_ROUT='/about'
// export const NOD_FOUND_ROUT = '*';

// export const router = createBrowserRouter([
//     {
//       path: "/", Component : MainTemplate,
//         children : [
//             { index:true , Component : HomePage},
//             {path:'/contacts', Component: Contacts},

//             {
//                 path:'/recipes',
//                     children : [
//                         {index:true , Component : RecipesList},
//                         {path:':id', Component: RecipePreview},
//                     ]
//             },
//             {
//                 path:'/cats',
//                     children : [
//                         {index:true , Component : Cats},
//                         {path:':id', Component: Cat},
//                     ]
//             },



//             {path:'*', Component: NodFound},
//         ]
      
//     },
//   ]);
export const router = createBrowserRouter([
    {
      path: "/", Component: MainTemplate ,
        children: [

            {index:true , Component : HomePage},

            {path: CATALOG_ROUT, Component: Catalog},

            {path: ABOUTE_ROUT, Component: About},

            {path: CONTACTS_ROUT, Component: Contacts},

            {path:'*', Component: NodFound},
        ]
      
    },
  ]);