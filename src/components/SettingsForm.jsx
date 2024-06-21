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

    const increment = (name, max = 59) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: prevSettings[name] < max ? prevSettings[name] + 1 : max,
        }));
    };

    const decrement = (name, min = 0) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: prevSettings[name] > min ? prevSettings[name] - 1 : min,
        }));
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
           
            <div className="setting">
                <label>Lucha Min</label>
                <div className="control-group">
                    <span>{settings.workTimeMinutes}</span>
                    <button onClick={() => increment('workTimeMinutes', 59)}>▲</button>
                    <button onClick={() => decrement('workTimeMinutes', 0)}>▼</button>
                </div>
            </div>
            <div className="setting">
                <label>Lucha Seg</label>
                <div className="control-group">
                    <span>{settings.workTimeSeconds}</span>
                    <button onClick={() => increment('workTimeSeconds', 59)}>▲</button>
                    <button onClick={() => decrement('workTimeSeconds', 0)}>▼</button>
                </div>
            </div>
            <div className="setting">
                <label>Descanso Min</label>
                <div className="control-group">
                    <span>{settings.restTimeMinutes}</span>
                    <button onClick={() => increment('restTimeMinutes', 59)}>▲</button>
                    <button onClick={() => decrement('restTimeMinutes', 0)}>▼</button>
                </div>
            </div>
            <div className="setting">
                <label>Descanso Seg</label>
                <div className="control-group">
                    <span>{settings.restTimeSeconds}</span>
                    <button onClick={() => increment('restTimeSeconds', 59)}>▲</button>
                    <button onClick={() => decrement('restTimeSeconds', 0)}>▼</button>
                </div>
            </div>
            <div className="setting">
                <label>Calentar Seg</label>
                <div className="control-group">
                    <span>{settings.warmupTime}</span>
                    <button onClick={() => increment('warmupTime', 59)}>▲</button>
                    <button onClick={() => decrement('warmupTime', 0)}>▼</button>
                </div>
            </div>
            <div className="setting">
                <label id="cycles">Repeticiones</label>
                <div className="control-group">
                    <span>{settings.cycles}</span>
                    <button onClick={() => increment('cycles')}>▲</button>
                    <button onClick={() => decrement('cycles', 1)}>▼</button>
                </div>
            </div>
            <div className="button-group">
                <button onClick={handleSave} className="btn">Save</button>
                <button onClick={() => handlePreset('drills')} className="btn">Drills</button>
                <button onClick={() => handlePreset('lucha')} className="btn">Lucha</button>
            </div>
        </div>
    );
};

export default SettingsForm;
