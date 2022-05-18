import React from 'react'
import Headtitle from '../../common/headtitle/Headtitle'
import Card from './Card'

function Gallery() {
  return (
    <>
    <Headtitle/>
    <section className='gallaery top'>
        <div className='container grid'>
            <Card/>

        </div>

    </section>

    </>
  )
}

export default Gallery