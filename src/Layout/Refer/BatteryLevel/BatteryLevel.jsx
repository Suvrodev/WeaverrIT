import React, { useEffect, useState } from 'react';
import './BatteryLevel.css'

const BatteryLevel = () => {
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




    // const styles = {
    //     totalBattery: {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       width: '30px',
    //     //   border: '2px solid gray'
    //     },
    //     // matha: {
    //     //   width: '10px',
    //     //   height: '5px',
    //     //   backgroundColor: 'yellow',
    //     // //   margin:'auto'
    //     // },
    //     batteryBody: {
    //       width: '15px',
    //       height: '30px',
    //       backgroundColor: 'gray',
    //       position: 'relative'
    //     },
    //     charge: {
    //       position: 'absolute',
    //       width: '20px',
    //       height: `calc(${batteryLevel}%)`,
    //       backgroundColor: 'green',
    //       bottom: 0
    //     }
    //   };

    const styles = {
        totalBattery: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '55px'
        },
        matha: {
          width: '8px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '5px'
        },
        batteryBody: {
          width: '25px',
          height: '15px',
          backgroundColor: 'skyblue',
          position: 'relative',
          borderRadius: '2px'
        },
        charge: {
          position: 'absolute',
          width: `calc(${batteryLevel}%)`,
          height: '15px',
          backgroundColor: 'green',
          right: 0
        }
      };

    return (
        
        <div className=''>
            {batteryLevel !== null ? (
               <div className='flex items-center'>  <div className='' style={styles.totalBattery}> <div className='' style={styles.matha}></div><div className='' style={styles.batteryBody}><div className=''style={styles.charge}  ></div></div></div> {batteryLevel.toFixed(0)}%</div>
            ) : (
                <p>Checking battery level...</p>
            )}
        </div>
    );
};

export default BatteryLevel;