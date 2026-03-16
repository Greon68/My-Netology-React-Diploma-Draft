import { BASE_URL } from "../../config/api";

export const HomeCatalogMenu =(props)=> {

    // console.log('HomeCatalogMenu props -', props);
    const {categories, selected, onSelectFilter} = props;

    // По клику по кнопке фиксируем выбранную категорию 
    // и загружаем данные для этой категории:
    const handleClick = async (item)=> {
        if(item.id!==1) {
            const resp = await fetch(BASE_URL + `/api/items?categoryId=${item.id}`);
            const data = await resp.json();
            onSelectFilter(item, data)
        } else {
            const resp = await fetch(BASE_URL + `/api/items`);
            const data = await resp.json();
            onSelectFilter(item, data)
        }      
    }

    // console.log('HomeCatalogMenu categories -', categories);
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