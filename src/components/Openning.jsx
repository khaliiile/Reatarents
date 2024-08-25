import React from 'react'
import breckfastIcon from '../img/breckfastIcon.png';
import lunchIcon from '../img/lunchIcon.png';
import dinnerIcon from '../img/dinnerIcon.png'; 
import Dessert from '../img/dessertIcon.png'
export default function Openning() {
  return (
    <>
        <section id="Openning">
                  <hr></hr>
                <div className="container-fluid bg-light  text-center  py-4">
                    <h3>Time Openning</h3>

                    <div className="row p-5">
                    <div className="col-md-3">
                        <img src={breckfastIcon} alt="Breakfast"/>
                        <h3>Breakfast</h3>
                        <p>8:00 am to 10:00 am</p>
                    </div>
                    <div className="col-md-3">
                        <img src={lunchIcon} alt="Lunch"/>
                        <h3>Lunch</h3>
                        <p>4:00 pm to 7:00 pm</p>
                    </div>
                    <div className="col-md-3">
                        <img src={dinnerIcon} alt="Dinner"/>
                        <h3>Dinner</h3>
                        <p>9:00 pm to 1:00 Am</p>
                    </div>
                    <div className="col-md-3">
                        <img src={Dessert} alt="dessert"/>
                        <h3>Dessert</h3>
                        <p>All day</p>
                    </div>
     
                  </div>
                  </div>
                  <hr></hr>
            </section>

    </>
  )
}
