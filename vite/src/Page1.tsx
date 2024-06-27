import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Page 1</h1>
      <Box display="flex" flexDirection="column" gap={4}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Typography
          variant="body2"
          align="center"
        >
          This is Page 1
        </Typography>
      </Box>
    </>
  )
}

export default Page1
