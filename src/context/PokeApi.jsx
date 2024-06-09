import React, { useEffect, useState,createContext } from 'react';
import axios from 'axios';


export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  

  return (
    <PokemonContext.Provider value={{  }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider; 

  

