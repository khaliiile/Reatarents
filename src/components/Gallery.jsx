import React from 'react'
import gallery1 from '../img/gallery1.jpeg'
import gallery2 from '../img/gallery2.jpeg'
import gallery3 from '../img/gallery3.jpeg'
import gallery4 from '../img/gallery4.jpeg'
export default function Gallery() {
  return (
    <>
              <section id="gallery">
                    <div class="d-flex justify-content-center">
                        <div class="text-center mt-4">
                        <h2>Our Food Gallery</h2>
                        <div class="p-5">
                            <img  src={gallery1} alt="gallery1"/>
                            <img src={gallery2} alt="gallery2"/>
                            <img src={gallery3} alt="gallery3"/>
                            <img src={gallery4} alt="gallery4"/>
                          
                        </div>  
                        </div>
                    </div>
             </section>
    </>
  )
}
