const API_KEY = '0e0f346a7b691b3310166d71d5a076ce'
const API_BASE = 'https://api.themoviedb.org/3'
/**MINUTO 28:05 */

const basicFetch = async (endpoint) => {
    const req = await  fetch (`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json

}

export default {
   getHomelist : async () =>{
       return [
           {
               slug: 'originals',
               title: 'Originais da Netflix',
               items: await basicFetch (`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
           },
            {
               slug: 'trending',
               title: 'Recomendados para Você',
               items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

           },
           {
               slug: 'toprated',
               title: 'Em Alta',
               items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

           },
           {
               slug: 'action',
               title: 'Ação',
               items: await basicFetch(`/discover/movie?with_genres=28&languege=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'comedy',
               title: 'Comédia',
               items: await basicFetch(`/discover/movie?with_genres=35&languege=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'horror',
               title: 'Terror',
               items: await basicFetch(`/discover/movie?with_genres=27&languege=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'romance',
               title: 'Romance',
               items: await basicFetch(`/discover/movie?with_genres=10749&languege=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'Drama',
               title: 'Drama',
               items: await basicFetch(`/discover/movie?with_genres=18&languege=pt-BR&api_key=${API_KEY}`)
           },
           
          
       ]
   }
}