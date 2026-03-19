import {useParams, useNavigate} from "react-router";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/api";


export const Product = ()=>{
    const{id} = useParams();
    const [product, setProduct]= useState({});
    const [count , setCount]=useState(1)

    const getProduct = async()=> {
        const resp = await fetch(`${BASE_URL}/api/items/${id}`);
        if(resp.ok){
            const data = await resp.json();
            setProduct(data)
        }
    }

    useEffect(()=> {
        getProduct()
    },[id])

    const add = ()=> {
        setCount( prev => prev + 1);
        if(count>=10){ setCount(10)}
    }

    const dec = ()=> {
        setCount(prev => prev -1);
        if(count<=1){setCount(1)}
    }

    console.log(" Product product", product);
    console.log(" Product product.images- ", product.images)
    // 'https://raw.githubusercontent.com/netology-code/ra…iploma/master/html/img/products/tufli_labuten.jpg',
    //  'https://raw.githubusercontent.com/netology-code/ra…loma/master/html/img/products/tufli_labuten_2.jpg'
 
    return (
        <> 
        { product && 

            <section className="catalog-item">
                <h2 className="text-center">{product.title}</h2>
                <div className="row">
                    <div className="col-5">
                       {product.images && 
                       <img src={product.images[0]} className="img-fluid" alt={product.title}/>} 
                    </div>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Артикул </td>
                                    <td> {product.sku}</td>
                                </tr>
                                <tr>
                                    <td>Производитель </td>
                                    <td> {product.manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>Цвет </td>
                                    <td>{product.color}</td>
                                </tr>
                                <tr>
                                    <td>Материалы </td>
                                    <td> {product.material}</td>
                                </tr>
                                <tr>
                                    <td>Сезон </td>
                                    <td> {product.season}</td>
                                </tr>
                                <tr>
                                    <td>Повод</td>
                                    <td>{product.reason}</td>
                                </tr>
                            </tbody>
                        </table>
                       
                            <div className="text-center product-info">Размеры в наличии : 
                                <span className="catalog-item-size selected"> 18 US </span>
                                 <span className="catalog-item-size"> 20 US </span>
                            </div> 
                            <div className="text-center product-info">Количество :
                                 <span className="btn-group btn-group-sm pl-2">
                                    <button 
                                        className="btn btn-secondary"
                                        onClick ={dec}
                                        >-</button>
                                    <span className="btn btn-outline-primary">{count}</span>
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={add}

                                     >+</button>
                                </span>
                            </div>
                        <div className="text-center btn-my">
                            <button className=" btn-danger ">В корзину</button>
                        </div>
                        
                    </div> 
                </div>

            </section>

        }
           
            

        </>
    )
}


// {
//     "id": 33,
//     "category": 13,
//     "title": "Знаменитые лабутэны",
//     "images": [
//       "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/tufli_labuten.jpg",
//       "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/tufli_labuten_2.jpg"
//     ],
//     "sku": "1000013",
//     "manufacturer": "Christian Louboutin",
//     "color": "Черный",
//     "material": "Лак",
//     "reason": "Высокая мода",
//     "season": "Лето",
//     "heelSize": "9 см.",
//     "price": 56000,
//     "sizes": [
//       {
//         "size": "12 US",
//         "available": true
//       },
//       {
//         "size": "14 US",
//         "available": false
//       }
//     ]
//   }



{/* <section class="catalog-item">
        <h2 class="text-center">Босоножки 'MYER'</h2>
        <div class="row">
            <div class="col-5">
                <img src=".././img/products/sandals_myer.jpg"
                    class="img-fluid" alt="">
            </div>
            <div class="col-7">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>1000046</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>PAUL ANDREW</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>Чёрный</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>Кожа</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>Лето</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>Прогулка</td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <p>Размеры в наличии: <span class="catalog-item-size selected">18 US</span> <span class="catalog-item-size">20 US</span></p>
                    <p>Количество: <span class="btn-group btn-group-sm pl-2">
                            <button class="btn btn-secondary">-</button>
                            <span class="btn btn-outline-primary">1</span>
                            <button class="btn btn-secondary">+</button>
                        </span>
                    </p>
                </div>
                <button class="btn btn-danger btn-block btn-lg">В корзину</button>
            </div>
        </div>
    </section> */}