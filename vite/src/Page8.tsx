import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image from "./assets/jr-korpa-c7I2PHVT1vU-unsplash.jpg"
import "./page8.css"

function Page8() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Page 8</h1>
      <Box display="flex" flexDirection="column" gap={4}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Typography
          variant="body2"
          align="center"
        >
          This is Page 8
        </Typography>
        <img src={image} alt=""/>
      </Box>
    </>
  )
}

export default Page8
