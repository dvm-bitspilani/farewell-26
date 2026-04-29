import { useState } from 'react'
import './App.css'
import ProfileSelection from './Profile/ProfileSelection'
import ProfileDetails from './Profile/ProfileDetails'
import Navbar from './components/Navbar'
import BackgroundPage from './Profile/BackgroundPage'
import { verticals } from './data/people'

function App() {
  const [selectedVerticalId, setSelectedVerticalId] = useState<number | null>(null);
  const [view, setView] = useState<'selection' | 'details'>('selection');

  const selectedVertical = verticals.find(v => v.id === selectedVerticalId);

  const handleVerticalSelect = (id: number) => {
    setSelectedVerticalId(id);
    setView('details');
  };

  return (
    <div className="app-container">
      {view !== 'selection' && (
        <Navbar currentView={view} vertical={selectedVertical} />
      )}
      
      {view === 'details' && selectedVertical ? (
        <ProfileDetails 
          vertical={selectedVertical} 
          onBack={() => setView('selection')} 
        />
      ) : (
        <ProfileSelection onSelect={handleVerticalSelect} />
      )}
      
      {view === 'details' && selectedVertical && (
        <BackgroundPage vertical={selectedVertical} />
      )}
    </div>
  )
}

export default App
