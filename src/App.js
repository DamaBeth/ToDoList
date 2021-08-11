import './App.css';
import React from 'react';
import LeftBar from "./LeftBar";
import getList from "./Provider";
import { useDispatch, useSelector, useEffect} from "react-redux";
import { setPokemons } from "./redux/reducers/pokemonReducer";

function App() {
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  console.table(pokemons);

  const getListUI = async () => {
    const response = await getList();
    dispatch(setPokemons(response.data.results));
  };

  useEffect(() => {
    getListUI();
  }, []);

  return (
    <div className="App">
      <LeftBar/>
    </div>
  );
}

export default App;
