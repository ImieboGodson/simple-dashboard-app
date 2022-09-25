import './App.css';
import Form from './components/Form/Form';
import TableDisplay from './components/TableDisplay/TableDisplay';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="app">
      <section className='left-section'>
        <Form />
      </section>
      <section className='right-section'>
        <Topbar />
        <main className='main-section'>
          <TableDisplay />
        </main>
      </section>
    </div>
  );
}

export default App;
