import React from 'react'
import about from '../img/about_img.png'
export default function About() {
  return (
    <>
        <section id="about" className='mb-5'>
            <div className="container-fluid bg-light p-5">
                <div className="text-center mb-4">
                    <h2>The Food Lover History</h2>
                    <p className="p-2">More than 25+ years of experience</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quibusdam saepe natus numquam dolorum aliquam ducimus molestias tenetur? Quaerat, atque blanditiis. Debitis voluptatem sequi quibusdam nihil eveniet obcaecati soluta rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt aspernatur earum sequi consequatur, quasi iste quod nam esse adipisci neque commodi voluptate deserunt architecto rerum. Blanditiis labore sed sapiente.</p>
                        <a  className="btn btn-secondary" href='/'>LEARN MORE</a>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className="img-fluid" src={about} alt="Pizza"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
