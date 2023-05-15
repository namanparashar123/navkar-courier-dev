import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faHouseCircleCheck,
  faTruckMoving,
  faRoad,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

export default function Services() {
  return (
    <div className="services_container">
      <div>
        <p className="intro_para">
          Navkar Courier is a shipping company that supports e-commerce delivery
          and 3rd Party Logistics operations by providing cost-effective final
          mile delivery service throughout Canada.
        </p>
      </div>
      <div className="services">
        <div className="iconSide">
          <FontAwesomeIcon className="service_icons" icon={faHouseCircleCheck} size="7x" />
          <br />
          <p>Final Mile Deliveries</p>
        </div>
        <div className="contentSide">
          7 days a week delivery available in all the cities. Express delivery
          options are also available.
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="contentSide">
          Content to be added.
        </div>
        <div className="iconSide">
          <FontAwesomeIcon className="service_icons" icon={faTruckMoving} size="7x" />
          <FontAwesomeIcon className="service_icons" icon={faRoad} size="3x" />
          <br />
          <p>Shuttle Runs</p>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="iconSide">
          <FontAwesomeIcon className="service_icons " icon={faPhoneVolume} size="7x" />
          <br />
          <p>On-Call Services</p>
        </div>
        <div className="contentSide">
          <ul>
            <li>Pick-ups</li>
            <li>Drop-offs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
