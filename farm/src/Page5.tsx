import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image from "./assets/bruno-ramos-lara-sz3AWACktLc-unsplash.jpg"

function Page5() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Page 5</h1>
      <Box display="flex" flexDirection="column" gap={4}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Typography
          variant="body2"
          align="center"
        >
          This is Page 5
        </Typography>
        <img src={image} alt=""/>
      </Box>
    </>
  )
}

export default Page5
