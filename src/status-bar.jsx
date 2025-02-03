import React, { useState, useEffect } from 'react';
import { 
  IoBatteryCharging,
  IoBatteryFull,
  IoBatteryHalf,
  IoBatteryDead
} from 'react-icons/io5';

const StatusBar = () => {
  const [time, setTime] = useState('');
  const [batteryData, setBatteryData] = useState({
    level: null,
    charging: false,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getBatteryInfo = async () => {
      try {
        if ('getBattery' in navigator) {
          const battery = await navigator.getBattery();
          
          const updateBatteryInfo = () => {
            setBatteryData({
              level: Math.floor(battery.level * 100),
              charging: battery.charging,
            });
          };

          updateBatteryInfo();
          battery.addEventListener('levelchange', updateBatteryInfo);
          battery.addEventListener('chargingchange', updateBatteryInfo);

          return () => {
            battery.removeEventListener('levelchange', updateBatteryInfo);
            battery.removeEventListener('chargingchange', updateBatteryInfo);
          };
        }
      } catch (error) {
        console.log('Battery API not supported');
      }
    };

    getBatteryInfo();
  }, []);

  const getBatteryIcon = () => {
    if (batteryData.level === null) {
      return <IoBatteryFull className="battery-icon" />;
    }
    if (batteryData.level >= 80) {
      return batteryData.charging ? 
        <IoBatteryCharging className="battery-icon" /> : 
        <IoBatteryFull className="battery-icon" />;
    } else if (batteryData.level >= 50) {
      return <IoBatteryHalf className="battery-icon" />;
    } else {
      return <IoBatteryDead className="battery-icon" />;
    }
  };

  return (
    <div className="status-bar">
      <div className="time">{time}</div>
      <div className="battery-container">
        {getBatteryIcon()}
      </div>
    </div>
  );
};

export default StatusBar;