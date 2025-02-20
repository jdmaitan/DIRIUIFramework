import { useEffect, useState } from 'react'
import Clock from './Clock';
import SaveButton from './SaveButton';
import TimeList from './TimeList';
import './App.css'

function App()
{
  const [savedTimes, setSavedTimes] = useState<string[]>([]);

  useEffect(() =>
  {
    const savedTimesFromLocalStorage = localStorage.getItem('savedTimes');
    if (savedTimesFromLocalStorage)
    {
      setSavedTimes(JSON.parse(savedTimesFromLocalStorage));
    }
  }, []);

  const saveTime = () =>
  {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    setSavedTimes([...savedTimes, formattedTime]);
    localStorage.setItem('savedTimes', JSON.stringify(savedTimes));
  };

  const deleteTime = (index: number) =>
  {
    const newSavedTimes = [...savedTimes];
    newSavedTimes.splice(index, 1);
    setSavedTimes(newSavedTimes);
    localStorage.setItem('savedTimes', JSON.stringify(newSavedTimes));
  };

  return (
    <div className="app-container">

      <div className="clock-container">
        <h1>Reloj React</h1>
        <Clock />
        <SaveButton saveTime={saveTime} />
      </div>

      <div className="time-list-container">
        <TimeList savedTimes={savedTimes} deleteTime={deleteTime}/>
      </div>
    </div>
  );
}

export default App;