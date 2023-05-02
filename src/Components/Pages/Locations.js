import React from 'react';

import './Locations.css';

const Locations = () => {
    return <div className='locations_container'>
        <h1 className='locations'>Our Locations</h1>
        <div className='locations_list'>
            <ul>
                <li>Winnipeg (and towns within 100 kms)</li>
                <li>Brandon</li>
                <li>Kenora</li>
                <li>London</li>
                <li>Toronto</li>
            </ul>
        </div>
    </div>
};

export default Locations;