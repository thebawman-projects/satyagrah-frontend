import React from 'react'
import homeImg1 from '../../images/imgHome1.png'
import homeImg2 from '../../images/imgHome2.png'
import homeImg3 from '../../images/imgHome3.png'
import homeImg4 from '../../images/imgHome4.png'
import homeImg5 from '../../images/imgHome5.png'
import homeImg6 from '../../images/imgHome6.png'


function HomeImageCard() {
  const images = [
    { img: homeImg1 },
    { img: homeImg2 },
    { img: homeImg3 },
    { img: homeImg4 },
    { img: homeImg5 },
    { img: homeImg6 },
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
