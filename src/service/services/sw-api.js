
export async function getAllStarships(){
  const endpoint = "https://swapi.dev/api/starships/"
   let result = await fetch(endpoint)
   let json = await result.json()
   return json
}

