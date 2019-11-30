import React from 'react';
import Header from '../Header/Header';
import paddyField from '../../assests/122.jpg'

const Home = (props) => {
    return (
        <div>
            <Header/>
            <div style={{backgroundImage: `url(${paddyField})`,backgroundSize: 'cover', height: '1000px' }}>
                
            </div>
        </div>
    );
};

export default Home;