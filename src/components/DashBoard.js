import React from 'react';
import SoundList from './SoundList';
import SoundFilter from './SoundFilter';

const DashBoard = () => (
    <div className='container-fluid'>
        <SoundFilter />
        <SoundList />
    </div>
);

export default DashBoard;