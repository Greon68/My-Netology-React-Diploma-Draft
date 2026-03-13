
import { HomeCatalogMenu } from "./HomeCatalogMenu"
import { HomeCatalogPreview } from "./HomeCatalogPreview"
import { useState } from "react";

export const HomeCatalog = ({categories , goodsAll})=> {
   
    // Добавляем категорию "Все" в массив категорий
    if(categories.length <= 4){
        categories.unshift({id:1 , title:"Все"}); 
    };

    // список товаров для отрисовки:
    const[ previewList , setPreviewList] = useState(goodsAll)  
    // выбранная категория товаров  
    const[ selected , setSelected] = useState({id:1, title:'Все'});
   
    const onSelectFilter = ( filter , data )=> {
        // При нажатии на кнопку меню:       
        console.log ("HomeCatalog : получен фильтр - ", filter);      
        console.log ("HomeCatalog : получены данные :  ", data)
         // 1. Фиксируем выбранный объект категории в константу select:
        setSelected(filter);
          // 2. Фиксируем объект с товарами по выбранной категории в previewList :
        setPreviewList(data)
   
    }

    console.log ('HomeCatalog previewList -', previewList );

    return (

        <section className="catalog">            
            <div className="home-catalog">  
            
                <HomeCatalogMenu  
                    categories={ categories}
                    selected={selected}
                    onSelectFilter={onSelectFilter}
                />            
                <HomeCatalogPreview previewList ={previewList}/>                   
            </div>              
        </section>
    )
}



// import { useState } from "react"
// import { useGetFetch } from "../../hook/useGetFetch"
// import { HomeCatalogMenu } from "./HomeCatalogMenu";
// import { HomeCatalogPreview } from "./HomeCatalogPreview";

// export const HomeCatalog = ({categories , goodsAll})=> {

//     // Список названий кнопок меню:
//     const[categories, loadingCategories, errorCategories ]= useGetFetch('/api/categories');

//     // первая отрисовка из каталога товаров:
//     const [goods , loadingGoods, errorGoods]= useGetFetch('/api/items')
    
//     if (categories) {
//         categories.unshift({id:1 , title:"Все"});               
//     };

//         // Выбранная кнопка
//     // const [selected, setSelected]= useState(categories[0])

//     // const onSelectCategory = (categor)=> {
//     //     setSelected(categor)
//     // }

//     console.log('HomeCatalog categories - ', categories);
//     // console.log('HomeCatalog selected - ', selected)
//     console.log('HomeCatalog goods - ', goods);

   


//     return(
//         <div className="home-catalog">
//             { categories && 
//                 <HomeCatalogMenu  
//                     categories={categories}  
//                     // selected={selected}  
//                     // onSelectCategory={onSelectCategory}                            
//                 />
//             }
//             { goods && <HomeCatalogPreview goods={goods}/>

//             }
//         </div>
//     )
// }


// import { useState } from 'react';
// import ProjectList from '../ProjectList/ProjectList.jsx';
// import Toolbar from '../Toolbar/Toolbar.jsx';
// import { list , filters } from '../../data.js';

// // filters = ["All", "Websites", "Flayers", "Business Cards"];
 
// const Portfolio = () => {
//     // Функция состояния для фильтров:
//     const [filterState, setFilter]= useState(list);
//     const [selected, setSelected]= useState(filters[0])

//     console.log ('Текущее значение фильтра -', filterState)
    
//     const onSelectFilter = (filter) => {
  
//         setSelected(filter);
//         setFilter (
//           filter === filters[0] ?
//             list :
//             list.filter( item => item.category === filter)
//         )

//     }
 
//     return (   
//         <>
//         <Toolbar
//             filters={filters}
//             selected={selected }
//             onSelectFilter={onSelectFilter}/>
            
//          < ProjectList projects = {filterState}/>
//         </>
//     )
// }


// export default Portfolio