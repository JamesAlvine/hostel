import React from 'react'
import Card from '../gallery/Card'
import Tdata from './Tdata'
import './Testimonial.css'

function AllItem() {
    return (
        <>
            <section className='Testimonial mtop'>
                <div className='container grid1'>
                    {Tdata.map((value, index) => {
                        return <Card key={index} {...value} />
                    })}
                </div>
            </section>
        </>
    )
}

export default AllItem