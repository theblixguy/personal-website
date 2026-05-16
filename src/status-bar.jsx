import { useState, useEffect } from 'react';
import {
  IoBatteryCharging,
  IoBatteryFull,
  IoBatteryHalf,
  IoBatteryDead,
} from 'react-icons/io5';

const formatTime = (date) =>
  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const StatusBar = () => {
  const [time, setTime] = useState(() => formatTime(new Date()));
  const [batteryData, setBatteryData] = useState({
    level: null,
    charging: false,
  });

  useEffect(() => {
    let timeoutId;

    const tick = () => {
      const now = new Date();
      setTime(formatTime(now));
      const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
      timeoutId = setTimeout(tick, msToNextMinute);
    };

    tick();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!('getBattery' in navigator)) {
      console.debug('Battery API not supported');
      return;
    }

    let cancelled = false;
    let battery = null;

    const updateBatteryInfo = () => {
      if (!battery) return;
      setBatteryData({
        level: Math.floor(battery.level * 100),
        charging: battery.charging,
      });
    };

    navigator.getBattery().then((b) => {
      if (cancelled) return;
      battery = b;
      updateBatteryInfo();
      battery.addEventListener('levelchange', updateBatteryInfo);
      battery.addEventListener('chargingchange', updateBatteryInfo);
    }).catch(() => {
      console.debug('Battery API not available');
    });

    return () => {
      cancelled = true;
      if (battery) {
        battery.removeEventListener('levelchange', updateBatteryInfo);
        battery.removeEventListener('chargingchange', updateBatteryInfo);
      }
    };
  }, []);

  const getBatteryIcon = () => {
    if (batteryData.level === null) {
      return <IoBatteryFull role="presentation" className="battery-icon" />;
    }
    if (batteryData.level >= 80) {
      return batteryData.charging ?
        <IoBatteryCharging role="presentation" className="battery-icon" /> :
        <IoBatteryFull role="presentation" className="battery-icon" />;
    } else if (batteryData.level >= 50) {
      return <IoBatteryHalf role="presentation" className="battery-icon" />;
    } else {
      return <IoBatteryDead role="presentation" className="battery-icon" />;
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
