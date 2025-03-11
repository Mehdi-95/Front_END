import React from 'react';
import Homologations from './components/Homologations';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Homologations />
      </div>
    </div>
  );
}

export default App;
