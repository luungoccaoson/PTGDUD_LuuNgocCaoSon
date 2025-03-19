import { useState } from 'react';
import './App.css';
import Bai1 from './components/bai1';
import Bai2 from './components/bai2';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('Bai1');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Bai1':
        return <Bai1 />;
      case 'Bai2':
        return <Bai2 />;
      default:
        return <Bai1 />;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setSelectedComponent('Bai1')}>Bài 1</button>
        <button onClick={() => setSelectedComponent('Bai2')}>Bài 2</button>
      </nav>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
