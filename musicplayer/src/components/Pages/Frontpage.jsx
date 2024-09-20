import React, { useContext } from 'react'
import { SongContext } from '../Context/Context';
import { Link } from 'react-router-dom';

const Frontpage = () => {
  const { all_songs } = useContext(SongContext);
  return (
   
      <div className='w-full  p-1 bg-black'>
        <div className='w-full flex flex-col items-center justify-center my-3 '>
          <h2 className='text-white font-Yanone-Kaffeesatz text-[45px] font-semibold'>Entertainment</h2>
          <p className='text-white font-Dancing-Script text-[35px] font-semibold'>Choose the music which like!</p>
        </div>
        <div className='w-full '>
          <ul className='w-full flex flex-col items-center justify-center my-6'>
            {
              all_songs.map((item, i) => {
                return (
                  <li className='w-[40%] my-2 ' key={i}>
                    <Link to={`song${item.id}`}>

                      <div className='w-full bg-gray-400 rounded-lg shadow-md flex items-center gap-2'>
                        <div className='w-[100px] h-[100px] p-2'>
                          <img src={item.bgimg} alt="img" className='w-full h-[100%] object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col text-[20px]'>
                          {`${item.name}`}
                          {/* {`Artist:${item.artist}`} */}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
   
  )
}

export default Frontpage
