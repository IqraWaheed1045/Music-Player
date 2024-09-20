import React, { useContext, useEffect, useRef } from 'react'
import { SongContext } from '../Context/Context'


const SongDisplay = ({ music }) => {
  const { all_songs } = useContext(SongContext);
  const audioRef = useRef(null);
  const selectedSong = all_songs.find(song => song.name == music)


  useEffect(() => {
    if (audioRef.current && selectedSong) {
      audioRef.current.play();
    }
  }, [selectedSong]);
  return (
    <div className='w-full h-screen bg-black'>
      {selectedSong ? (
        <div className='w-[100%] h-[100%]  relative flex flex-col items-center justify-center' >
          <h2 className='z-20 absolute md:top-14 top-[16%] text-white font-Dancing-Script font-bold lg:text-[40px] text-[60px] w-full mx-auto text-center'>{selectedSong.name}</h2>
          <div className='lg:w-[250px] lg:h-[250px] w-[400px] h-[250px]  pl-2 pr-2'>
            <img src={selectedSong.bgimg} alt="song image" className='w-full h-[100%] object-cover' />
          </div>
          {/* Audio player */}
          <div className=' relative lg:top-10 top-16 lg:w-[30%] w-[40%] '>

            <audio ref={audioRef} controls className='w-full'>
              <source src={selectedSong.song} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      ) : (
        <p>Song not found.</p>
      )}
    </div>
  )
}

export default SongDisplay
