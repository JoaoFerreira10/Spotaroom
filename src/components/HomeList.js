import React from 'react';
import HomeItem from './HomeItem';
import './HomeList.css';

const HomeList = ({ data }) => {

    if(!data)
        return <div>No data</div>;  
     
    const homeItems = data.map((elem, index) => {

        return <HomeItem key={index} item={elem} />
    });

    return <div className="home-list">{homeItems}</div>;
}

export default HomeList;