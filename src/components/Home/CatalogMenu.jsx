import { BASE_URL } from "../../config/api";

export const CatalogMenu =(props)=> {

    // console.log('CatalogMenu props -', props);
    const {categories, selected, onSelectFilter} = props;

    // По клику по кнопке фиксируем выбранную категорию 
    // и загружаем данные для этой категории:
    const handleClick = async (item)=> {
        if(item.id!==1) {
            const resp = await fetch(BASE_URL + `/api/items?categoryId=${item.id}`);
            // data-массив объектов товаров для выбранной категории:
            const data = await resp.json();
            onSelectFilter(item, data)
        } else {
            const resp = await fetch(BASE_URL + `/api/items`);
            // data- массив объектов ВСЕХ товаров :
            const data = await resp.json();
            // item - объект выбранной кнопки ( напр.: { id:12 , title:"Женская обувь"})
            onSelectFilter(item, data)
        }      
    }

    // console.log('CatalogMenu categories -', categories);
    return (
        <ul className="home-catalog-menu">
            {
                categories.map ( elem => 
                    <li key={elem.id}
                        className = { elem.title === selected.title ? 'active  menu-button ': ' menu-button'}
                        onClick={()=>handleClick(elem)}            
                    > 
                        {elem.title}            
                    </li>
                )
            }
        </ul>
    )
}