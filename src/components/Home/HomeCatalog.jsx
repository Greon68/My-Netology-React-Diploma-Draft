
import { HomeCatalogMenu } from "./HomeCatalogMenu"
import { HomeCatalogPreview } from "./HomeCatalogPreview"
import { useState } from "react";
import { BASE_URL } from "../../config/api";

// Количество загружаемых товаров по клику по кнопке "Загрузить ещё":
const countFetchGoods = 6 ;

export const HomeCatalog = ({categories , goodsAll})=> {
   
    // Добавляем категорию "Все" в массив категорий
    if(categories.length <= 4){
        categories.unshift({id:1 , title:"Все"}); 
    };

    // список товаров для отрисовки:
    const[ previewList , setPreviewList] = useState(goodsAll)  
    // выбранная категория товаров  
    const[ selected , setSelected] = useState({id:1, title:'Все'});


    // Данные для показа/скрытия кнопки "Загрузить ещё".
    // Сохраняем  в состоянии длину массива подгружаемых данных:
    const [countCurrentGoods , setCountCurrentGoods]= useState(countFetchGoods);
   
    const onSelectFilter = ( filter , data )=> {
        // При нажатии на кнопку меню:       
        console.log ("HomeCatalog : получен фильтр - ", filter);      
        console.log ("HomeCatalog : получены данные :  ", data)
         // 1. Фиксируем выбранный объект категории в константу select:
        setSelected(filter);
          // 2. Фиксируем объект с товарами по выбранной категории в previewList :
        setPreviewList(data)
        // 3. Обновляем состояние для кнопки "Загрузить ещё"
        setCountCurrentGoods(countFetchGoods)
    }

    // **********************************************
    // Подгрузка данных ( кнопка "Загрузить ещё"):
 
    // счётчик догрузки данных
    const [next , setNext] = useState(countFetchGoods);

    // Функция догрузки товаров для ВСЕГО списка (/api/items?offset=6):
    const addGoodsAll = async (nextOffset) => {
        const resp = await fetch(BASE_URL + `/api/items?offset=${nextOffset}`);
        const data = await resp.json();
        console.log( "Догружены данные - ", data);
        // дополняем массив с товарами новыми данными:
        const newGoods = [ ...previewList, ...data];
        console.log( " data length - " , data.length)
        // сохраняем длину массива новых данных
        setCountCurrentGoods(data.length)
        // сохраняем новый , дополненный массив в константу в состоянии .
        setPreviewList(newGoods);
        
    }

    // Функция догрузки товаров ПО КАТЕГОРИЯМ : /api/items?categoryId=X&offset=6
    const addGoodsCaregory = async (categoryId, nextOffset) => {
        const url = BASE_URL + `/api/items?categoryId=${categoryId}&offset=${nextOffset}`;
        console.log ('Url загрузки - ', url)
        const resp = await fetch(url);
        const data = await resp.json();
        console.log( "Догружены данные - ", data);
        const newGoods = [ ...previewList, ...data];
        console.log( " data length - " , data.length)
        setCountCurrentGoods(data.length)
        setPreviewList(newGoods);
        
    }

    // Обработчик клика по кнопке "Загрузить ещё"
    const handleButtonClick = (currentCategoryId)=>{
        console.log("currentCategoryId - ", currentCategoryId);

        if(currentCategoryId === 1) {
            addGoodsAll(next);
        } else {
            addGoodsCaregory(currentCategoryId, next)
        };
       
        setNext( next + countFetchGoods)
    }


    // ********************************

    // список товаров на отрисовку:
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

                <div className="text-center">
                <button     
                    style={{ visibility: (countCurrentGoods < countFetchGoods) || 
                        (previewList.length < countFetchGoods) ? 'hidden' :  'visible' }}
                    className="button-more"
                    onClick={()=>handleButtonClick(selected.id)}>
                        Загрузить ещё
                 </button>   
                </div>
              
            </div>              
        </section>
    )
}



