
import '../App.css';
import Counter from '../components/Counter';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen w-screen">
      <h1 className='border border-slate-800 rounded-2xl p-3 text-3xl font-bold uppercase'>
        Counter App
      </h1>
      <Counter />
    </div>
  );
}

export default App;
