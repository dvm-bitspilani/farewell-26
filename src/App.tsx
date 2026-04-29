import { useState } from 'react'
import './App.css'
import ProfileSelection from './Profile/ProfileSelection'
import ProfileDetails from './Profile/ProfileDetails'
import BackgroundPage from './Profile/BackgroundPage'
import { type VerticalData, verticals } from './data/people'

function App() {
  const [selectedVerticalId, setSelectedVerticalId] = useState<number | null>(null);

  const selectedVertical = verticals.find(v => v.id === selectedVerticalId);

  return (
    <>
      {selectedVertical && <BackgroundPage />}
      
      {selectedVertical ? (
        <ProfileDetails 
          vertical={selectedVertical} 
          onBack={() => setSelectedVerticalId(null)} 
        />
      ) : (
        <ProfileSelection onSelect={setSelectedVerticalId} />
      )}
    </>
  )
}

export default App
