import { useState } from "react"
import { HomeCatalogData } from "../Home/HomeCatalogData"


export const Catalog = ()=> {

    const[search, setSearch]= useState('')

    return(
        
        <div className="catalog-container">
            <h2 className="text-center">Каталог</h2>
            <form class="catalog-search-form form-inline">
              <input class="form-control" placeholder="Поиск"/>
            </form>
            <HomeCatalogData/>
        </div>
    )
}