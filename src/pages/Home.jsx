import React, { useState } from 'react';
import Timer from '../components/Timer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const initialSettings = location.state?.settings || {
    workTimeMinutes: 25,
    workTimeSeconds: 0,
    restTimeMinutes: 5,
    restTimeSeconds: 0,
    warmupTime: 5,
    cycles: 4,
  };

  const [settings, setSettings] = useState(initialSettings);

  return (
    <div className="home">
      <Timer settings={settings} />
    </div>
  );
};

export default Home;
