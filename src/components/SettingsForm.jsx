import React, { useState } from 'react';
import './SettingsForm.css';

const SettingsForm = ({ onSaveSettings, setPreset }) => {
    const [settings, setSettings] = useState({
        workTimeMinutes: 25,
        workTimeSeconds: 0,
        restTimeMinutes: 5,
        restTimeSeconds: 0,
        warmupTime: 5,
        cycles: 4,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings({
            ...settings,
            [name]: value,
        });
    };

    const handleSave = () => {
        onSaveSettings(settings);
    };

    const handlePreset = (preset) => {
        if (preset === 'drills') {
            setSettings({
                workTimeMinutes: 2,
                workTimeSeconds: 0,
                restTimeMinutes: 0,
                restTimeSeconds: 3,
                warmupTime: 5,
                cycles: 5,
            });
        } else if (preset === 'lucha') {
            setSettings({
                workTimeMinutes: 5,
                workTimeSeconds: 0,
                restTimeMinutes: 2,
                restTimeSeconds: 0,
                warmupTime: 5,
                cycles: 12,
            });
        }
        setPreset(settings);
    };

    return (
        
            <div className="settings-form">
                <h3>Work</h3>
                <div>
                    <label>min:</label>
                    <input
                        type="number"
                        name="workTimeMinutes"
                        value={settings.workTimeMinutes}
                        onChange={handleChange}
                        min="0"
                        max="59"
                    />
                    <label>sec:</label>
                    <input
                        type="number"
                        name="workTimeSeconds"
                        value={settings.workTimeSeconds}
                        onChange={handleChange}
                        min="0"
                        max="59"
                    />
                </div>
                <h3>Rest</h3>
                <div>
                    <label>min:</label>
                    <input
                        type="number"
                        name="restTimeMinutes"
                        value={settings.restTimeMinutes}
                        onChange={handleChange}
                        min="0"
                        max="59"
                    />
                    <label>sec:</label>
                    <input
                        type="number"
                        name="restTimeSeconds"
                        value={settings.restTimeSeconds}
                        onChange={handleChange}
                        min="0"
                        max="59"
                    />
                </div>
                <h3>Warmup</h3>
                <div>
                    <label>sec:</label>
                    <input
                        type="number"
                        name="warmupTime"
                        value={settings.warmupTime}
                        onChange={handleChange}
                        min="0"
                        max="59"
                    />
                    <label id='cycle'>Cycles:</label>
                    <input
                        type="number"
                        name="cycles"
                        value={settings.cycles}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div>

                </div>
                <button onClick={handleSave} className="btn">Save Settings</button>
                <button onClick={() => handlePreset('drills')} className="btn">Drills Preset</button>
                <button onClick={() => handlePreset('lucha')} className="btn">Lucha Preset</button>
            </div>
    );
};

export default SettingsForm;
