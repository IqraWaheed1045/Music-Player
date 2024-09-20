import React, { createContext } from "react";
export const SongContext=createContext(null);
import all_songs from "../assets/all_songs";


const SongContextProvider=(props)=>{
    const contextValue={all_songs};
    return(
        <SongContext.Provider value={contextValue}>
            {props.children}
        </SongContext.Provider>
    )
}
export default SongContextProvider;