import React from 'react';
import Box from '@mui/material/Box';
const CardPokemon = ({pokemon}) => {
    return (
        <div className='cardPoke'>
            {/* box from MUI */}
            <Box sx={{  
                color: 'white',
            }}>
            <h2>{pokemon.name}</h2>
            </Box>
        </div>
    );
}; 
 
export default CardPokemon;