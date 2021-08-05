import './App.css';
import Button from "./Button";
import SimpleCard from "./Card";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function App() {
  const styles = {margin: "10px", left: 0, position: "relative", fontSize: 25, fontWeight: 'bold' };
  const actionAdd = () => {
    alert("Tarea añadida");
};

  return (
    <div className="App">
      <main>
        <Button name="Login" />
        <Button name="Registrarse" />
        <p style={styles}>Hoy</p>
        <SimpleCard name="Reunión con Full Stack" descripcion="Reunión de repaso" hora="11:00 am"/>
        <SimpleCard name="Clase de Base de datos" descripcion="Profesor Jose Alfredo" hora="1:00 pm"/>
        <IconButton onClick={actionAdd} aria-label="addcircleicon">
            <AddCircleIcon />
        </IconButton>
      </main>
    </div>
  );
}

export default App;
