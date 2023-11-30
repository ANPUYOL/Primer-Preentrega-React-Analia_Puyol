import Menu from './componentes/MENU/Menu';
import './App.css';
import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Menu />
      <ItemListContainer greeting={'Bienvenidos a Todo Cobayas'}/>
    </div>
  );
}

export default App;
