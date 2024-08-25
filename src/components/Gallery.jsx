import React from 'react'
import gallery1 from '../img/gallery1.jpeg'
import gallery2 from '../img/gallery2.jpeg'
import gallery3 from '../img/gallery3.jpeg'
import gallery4 from '../img/gallery4.jpeg'
export default function Gallery() {
  return (
    <>
              <section id="gallery">
                    <div className="d-flex justify-content-center mt-5">
                        <div className="text-center mt-5">
                        <h2>Our Food Gallery</h2>
                        <div className="p-4 ">
                            <img className='p-1 mx-5'  src={gallery1} alt="gallery1"/>
                            <img   className='p-1 mx-5' src={gallery2} alt="gallery2"/>
                            <img   className='p-1 mx-5' src={gallery3} alt="gallery3"/>
                            <img  className='p-1 mx-5' src={gallery4} alt="gallery4"/>
                          
                        </div>  
                        </div>
                    </div>
             </section>
    </>
  )
}
