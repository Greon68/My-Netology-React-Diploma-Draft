import './style.scss'

export const OrderInfoMessage =(props)=> {
    console.log("OrderInfo props-", props);

    const{selectedSize, count}= props;
    

    return (     
         <p className='order-info'> 
            Товар с размером <b>{selectedSize}</b>  отправлен в корзину 
            {/* Вариант ниже может выводить ложную информацию ,
            при изменениеи count новое значение в корзине не появится */}
            {/* Товар с размером <b>{selectedSize}</b> в количестве {count} шт. отправлен в корзину */}
         </p>    
    )
}