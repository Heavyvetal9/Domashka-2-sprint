import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 200,
                color: '#52af77',
                height: 8,
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(82, 175, 119, 0.16)',
                    },
                },
                '& .MuiSlider-track': {
                    height: 8,
                    borderRadius: 4,
                },
                '& .MuiSlider-rail': {
                    height: 8,
                    borderRadius: 4,
                    opacity: 0.5,
                    backgroundColor: '#bfbfbf',
                },
                '& .MuiSlider-mark': {
                    backgroundColor: '#bfbfbf',
                    height: 8,
                    width: 1,
                    '&.MuiSlider-markActive': {
                        opacity: 1,
                        backgroundColor: 'currentColor',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange