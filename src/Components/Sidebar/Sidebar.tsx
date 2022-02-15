import React from 'react'
import {Box} from "@mui/material"

interface Props {
  location: any
}

const Sidebar = ({location}: any ) => {
  const {locationData} = location
  
  return (
    <Box width={"20%"} height={"100%"} bgcolor={"#24334b"} style={{marginLeft:0}}>Sidebar</Box>
  )
}

export default Sidebar