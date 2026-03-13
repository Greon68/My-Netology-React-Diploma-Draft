import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";

export const useGetFetch = ( path='/') => {
    const[data, setData]= useState('');
    const[loading, setLoading]= useState(false);
    const[error, setError]=useState('');

    const fetchData = async ()=> {
        setLoading(true);
        setError('');
        try {
          const response = await fetch (BASE_URL + path);
          
          const result = await response.json();

          console.log('useGetFetch result: ', result);

          if(response.status > 399){
            throw result
          }

          setData(result)

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    // },[path])
    },[])

    // return { data , loading, error}
    return[data, loading, error]

}

// Вызов:

// export const Slide = () => {
//     const { slideNumber } = useContext(SliderContext);
//     const {data, loading, error} = useGetFetch(`cat/${slideNumber}`, {})
  
//     return (
//       <div className="slide-list">
//           <div className="slide">
//               {loading && <div>Загрузка...</div>}
//               {error && <div>Ошибка...</div>}
//               {data && <img src={data} alt='cat' className="slide-image"/>}
//           </div>
//       </div>
//     );
//   }