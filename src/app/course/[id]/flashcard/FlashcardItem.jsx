import React from 'react'
import ReactCardFlip from 'react-card-flip'

function FlashcardItem({isFlipped , handleClick,flashcard}) {
  return (
    <div className='flex justify-center xl:mt-24 lg:mt-24 md:mt-24 mt-12'>      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div className='p-4 bg-blue-500 text-white flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px]' onClick={handleClick}>
     <div className='text-white text-center'>{flashcard.front}</div>
    </div>

    <div className='p-4 bg-blue-500 text-white flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px]'  onClick={handleClick} >
     <div className='text-white text-center'>{flashcard.back}</div>
    </div>
  </ReactCardFlip></div>
  )
}

export default FlashcardItem