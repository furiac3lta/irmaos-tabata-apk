import React, { useState } from 'react';
import SettingsForm from '../components/SettingsForm';
import { useNavigate, useLocation } from 'react-router-dom';

const Settings = () => {
  const location = useLocation();
  const initialSettings = location.state?.settings || {
    workTimeMinutes: 25,
    workTimeSeconds: 0,
    restTimeMinutes: 5,
    restTimeSeconds: 0,
    warmupTime: 5,
    cycles: 4,
  };

  const navigate = useNavigate();
  const [settings, setSettings] = useState(initialSettings);

  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
    navigate('/', { state: { settings: newSettings } });
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <SettingsForm onSaveSettings={handleSaveSettings} setPreset={setSettings} />
    </div>
  );
};

export default Settings;
