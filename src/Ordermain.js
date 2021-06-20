import React, { useState } from 'react';
import Menu from './Menu';

const allCartValues = [...new Set(Menu.map((values) => values.category)), 'all'];
//console.log(allCartValues);

const Ordermain = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (myCategory) => {
        //console.log(myCategory);
        const updateItems = Menu.filter((value) => value.category === myCategory)
        return setItems(updateItems);
    }

    console.log(process.env.PUBLIC_URL + '/yourPathHere.jpg');

    return (
        <>
            	 <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        allCartValues.map((curElem, index) => {
                            if(curElem === 'all'){
                                return <button key={index} className="btn btn-warning" onClick={() => setItems(Menu)}>{ curElem }</button>
                            }else{
                                return <button key={index} className="btn btn-warning" onClick={() => filterItem(curElem)}>{ curElem }</button>
                            }
                        })
                        
                    }
                </div>
            </div>

            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">                            
                                                {
                                                    items.map((value) => {
                                                       // console.log(value)
                                                        return(
                                                            <div key={value.id} className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                                            <div className="row Item-inside">  
                                                            <div className="col-12 col-md-12 col-lg-4 img-div">
                                                                <img src={process.env.PUBLIC_URL + "/" +value.image} alt={value.name} className="img-fluid"/>
                                                            </div>
            
                                                            <div className="col-12 col-md-12 col-lg-8">
                                                                <div className="main-title pt-2 pb-2">
                                                                    <h2 className="text-capitalize">{value.name}</h2>
                                                                    <p>Instant Making Food</p>
                                                                </div>
                                                                <div className="menu-price-book">
                                                                    <div className="price-book-divide d-flex justify-content-between ">
                                                                        <h2>{value.price}</h2>
                                                                        <a href="#">
                                                                            <button className="btn btn-primary">Order Now</button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        )
                                                    })
                                                }
                                                
                                                
                                                
                                           


                                            
                                        
                        </div>
                    </div>
                </div>
            </div>
	
        </>
    )
}

export default Ordermain
