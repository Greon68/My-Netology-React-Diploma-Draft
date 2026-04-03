

export const SizesListPreview = (props)=> {

    console.log('SizesListPreview props-',props);

    const {sizeList, onSelectedSize, selectedSize}= props;

    return (
        <>        
        <p >Для заказа товара выберите нужный размер</p>  

        <div className="text-center product-info">Размеры в наличии :                            
                {
                    sizeList.map( item => 
                        <span key={item}
                            className={ item === selectedSize ? 'catalog-item-size selected'
                                        : 'catalog-item-size'}
                            onClick= {()=> onSelectedSize(item)}           
                        >
                            {item}
                        </span>
                        )
                }
        </div> 
        </>
    )


}

{/* <div class="text-center">
<p>Размеры в наличии: <span class="catalog-item-size selected">18 US</span>
 <span class="catalog-item-size">20 US</span></p>

</div> */}