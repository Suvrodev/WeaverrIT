import React, { useEffect, useState } from 'react';
import './Contact.css'

const Contact = () => {

    const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    // Check if the Battery Status API is supported
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        // Update the battery level in the state
        setBatteryLevel(battery.level * 100);

        // Add an event listener to update the battery level when it changes
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(battery.level * 100);
        });
      });
    } else {
      // The Battery Status API is not supported
      console.error('Battery Status API is not supported in this browser');
    }
  }, []);

    return (
        <div>
            <h1>This is Contact Page</h1>
            {batteryLevel !== null ? (
                <p>Battery Level: {batteryLevel.toFixed(2)}%</p>
            ) : (
                <p>Checking battery level...</p>
            )}
            
            <div className='design'>
              <p>This is Design</p>
            </div>
        </div>
    );
};

export default Contact;