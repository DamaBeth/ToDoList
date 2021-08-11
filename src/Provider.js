import axios from "axios";

export default async function getList(){
    //const url = "https://pokeapi.co/api/v2/pokemon";
    /*
    const response = await axios.get(url, { params: { offset: 20, limit:20 } });
    console.log(response);
    return response;
    */
   const url = "https://demo6193376.mockable.io/todos";
   return axios.get(url, { params: { offset: 20, limit: 20 } });
}