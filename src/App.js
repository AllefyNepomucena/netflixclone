import React , {useEffect} from 'react'
import Tmdb from './Tmdb'

export default () => {

  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando a Lista TOTAL 
     let list = await Tmdb.getHomelist()
     console.log(list)
    }

    loadAll()
  },[])
  
  return (
    <div className='page'>
      
    </div>
  )
}