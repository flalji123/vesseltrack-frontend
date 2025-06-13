import React from 'react';
import './index.css';
function App() {
  return (
    <div className='min-h-screen flex'>
      <aside className='w-64 bg-gray-900 text-white p-4'>
        <h1 className='text-xl font-bold mb-4'>VesselTrack AI</h1>
        <nav>
          <ul className='space-y-2'>
            <li>Dashboard</li>
            <li>Vessel Map</li>
            <li>Search</li>
            <li>Cargo</li>
            <li>Uploads</li>
          </ul>
        </nav>
      </aside>
      <main className='flex-1 p-8'>
        <h2 className='text-2xl font-semibold'>Welcome to Commodify Vessel Intelligence</h2>
        <p className='mt-4 text-gray-700'>Your platform for live tracking, ownership data, and cargo prediction.</p>
      </main>
    </div>
  );
}
export default App;