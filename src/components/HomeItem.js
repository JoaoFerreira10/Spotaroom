import React from 'react';
import './HomeItem.css';

const HomeItem = ({item}) => {
    return (<div className="row home-item">
                <div className="col-lg-3 col-md-3 col-xs-12">
                    <img className="img img-responsive center" src={item.photoUrls.homecardHidpi} alt={item}/>
                </div>
                <div className="col-lg-9 col-md-9 col-xs-12">
                    <div className="home-body">
                        <h5 className="card-title">{item.title}</h5>
                        <span className="price">{item.pricePerMonth}€</span>
                    </div>
                    <div className="home-options">
                        <a href="#" onClick= {e => e.preventDefault()} className="btn btn-options btn-primary btn-book">Book now!</a>
                        <a href="#" onClick= {e => e.preventDefault()}  className="btn btn-options btn-details">More details</a>
                    </div>
                </div>
            </div>);
}

export default HomeItem;