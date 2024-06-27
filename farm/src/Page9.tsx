import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image from "./assets/rodion-kutsaiev-F573ZRbKOEw-unsplash.jpg"
import "./page9.css"

function Page9() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Page 9</h1>
      <Box display="flex" flexDirection="column" gap={4}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Typography
          variant="body2"
          align="center"
        >
          This is Page 9
        </Typography>
        <img src={image} alt=""/>
      </Box>
    </>
  )
}

export default Page9