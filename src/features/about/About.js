import React from 'react';
import AboutStyle from './About.module.css';
import systemDiagramImage from './../../pictures/system_diagram.png';
import controlRoomImage from './../../pictures/control_room.png';
import sprinklerImage from './../../pictures/sprinkler.png';
import webAppImage from './../../pictures/webapp.png';

function About() {
  return (
    <div className={AboutStyle.about}>
      <div className={AboutStyle.box}>
        <h1>General concept</h1>
        <br />
        <img src={systemDiagramImage} alt="systemDiagramImage"></img>
        <br />
        <br />
        <p>
          This project is based on Raspberry Pi Zero WH 512 MB RAM - Wi-Fi + BT
          4.1. There is a server, control room, website and stm32 handler
          (weather station, valve controller, led controller). Through the
          website users can control lighting, garden sprinklers and receive
          weather information. Connections between Raspberry Pi and STM are
          established via Bluetooth.
        </p>
      </div>
      <div className={AboutStyle.box}>
        <h1>Control room</h1>
        <br />
        <img src={controlRoomImage} alt="controlRoomImage"></img>
        <br />
        <br />
        <p>
          Pilothouse is the part of the system where requests from the website
          to the periphery and information from the periphery to the website are
          processed.
        </p>
      </div>
      <div className={AboutStyle.box}>
        <h1>Peripherals</h1>
        <br />
        <p>
          <li>
            Weather station - device collect weather information like
            temperature, air humidity, brightness and rainfall.
          </li>
          <li>
            Valve controller - user throught web application can turn on and off
            solenoid valve.
          </li>
          <li>Led controller - temporary unavaliable due to range issue.</li>
        </p>
        <br />
        <br />
        <img src={sprinklerImage} alt="sprinklerImage"></img>
      </div>
      <div className={AboutStyle.box}>
        <h1>WebApp</h1>
        <br />
        <p>
          The website ensures safe management of the system - login in is
          required. The user can display the weather and control the solenoid
          valves.
        </p>
        <br />
        <br />
        <img src={webAppImage} alt="webAppImage"></img>
      </div>
    </div>
  );
}

export default About;
