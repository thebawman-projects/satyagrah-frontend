import React from 'react'
import homeImg1 from '../../images/homesliderimg1.jpeg'
import homeImg2 from '../../images/homesliderimg2.jpeg'
import homeImg3 from '../../images/homesliderimg3.jpeg'
import homeImg4 from '../../images/homesliderimg4.jpeg'
import homeImg6 from '../../images/homesliderimg6.jpeg'
import homeImg7 from '../../images/homesliderimg7.jpeg'

import homeImg9 from '../../images/homesliderimg9.jpeg'
import homeImg10 from '../../images/homesliderimg10.jpeg'

import homeImg11 from '../../images/homesliderimg11.jpeg'
import homeImg12 from '../../images/homesliderimg12.jpeg'
import homeImg13 from '../../images/homesliderimg13.jpeg'

import homeImg21 from '../../images/homesliderimg21.jpeg'

import homeImg14 from '../../images/homesliderimg14.jpeg'
import homeImg15 from '../../images/homesliderimg15.jpeg'
import homeImg16 from '../../images/homesliderimg16.jpeg'
import homeImg17 from '../../images/homesliderimg17.jpeg'
import homeImg18 from '../../images/homesliderimg18.jpeg'


function HomeImageCard() {
  const images = [
    { img: homeImg1 },
    { img: homeImg2 },
    { img: homeImg3 },
   
    { img: homeImg7 },

    { img: homeImg9 },
    { img: homeImg4 },
   
    { img: homeImg6 },

    { img: homeImg11 },
    { img: homeImg10 },
    { img: homeImg12 },
    { img: homeImg21 },
    { img: homeImg13 },
    { img: homeImg14 },
    { img: homeImg15 },
    { img: homeImg16 },
    { img: homeImg17 },
    { img: homeImg18 },


  ]

  return (
    <section className="md:h-full flex lg:mt-[-1rem] items-center text-white pb-4">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-black font-semibold">
            Gallery
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {images.map((item, index) => {
            return (
              <div className="p-4 sm:w-1/2 lg:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={item.img}
                    alt="Gallery"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeImageCard