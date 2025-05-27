import './App.css';
import { createUseStyles } from 'react-jss';
import Counter from './Components/Counter';


const useStyle = createUseStyles({

  html: {
    fontSize: '16px'
  },
  container: {
    width: '90%',
    maxWidth: '40rem',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#3a4346',
    color: '#f0f6f8',
    borderRadius: '6px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
  }
})


function App() {

  const style = useStyle();

  return (
    <div className={style.container}>
      <Counter />
    </div>

  );
}

export default App;
