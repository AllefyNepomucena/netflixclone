const API_KEY = '0e0f346a7b691b3310166d71d5a076ce'
const API_BASE = 'https://api.themoviedb.org/3'
/**MINUTO 28:05 */

export default {
   getHomelist : async () =>{
       return [
           {
               slug: 'originals',
               title: 'Originais da Netflix',
               items: []
           },
           {
               slug: 'trending',
               title: 'Recomendados para Você'
           },
           {
               slug: 'toprated',
               title: 'Em Alta'
           },
           {
               slug: 'action',
               title: 'Ação'
           },
           {
               slug: 'comedy',
               title: 'Comédia'
           },
           {
               slug: 'horror',
               title: 'Terror'
           },
           {
               slug: 'romance',
               title: 'romance'
           },
           {
               slug: 'Drama',
               title: 'Drama'
           },
           
          
       ]
   }
}