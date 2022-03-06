import React , {useEffect,useState} from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './componets/MovieRow'
import FeaturedMovie from './componets/FeaturedMovie'

export default () => {

  const [movieList , setMovieList] = useState([])
  const [FeaturedData , setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () =>{

      //Pegando a Lista TOTAL  

     let list = await Tmdb.getHomelist()
    setMovieList(list)
    
    // Pegando o Featured
   
     let originals = list.filter(i=>i.slug === 'originals')
     let randomChosen = Math.floor(Math.random() * (originals[0].items.results.leght - 1))
     let chosen = originals[0].items.results[randomChosen]

    console.log(chosen)

    }

    loadAll()
  },[])
  
  return (
    <div className='page'>

   {FeaturedData && 
   <FeaturedMovie item={FeaturedData} />}

    <section className='lists'>
     {movieList.map((item, key)=>(
     <MovieRow key={key} title={item.title} items={item.items}/>
     ))}
    </section>

      
    </div>
  )
}