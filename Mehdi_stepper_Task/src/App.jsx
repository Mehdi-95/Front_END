import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        {/* Main content will go here */}
        <h1 className="text-2xl font-bold">Main Content Area</h1>
      </div>
    </div>
  );
}

export default App;
