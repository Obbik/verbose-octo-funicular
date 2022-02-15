import MainMap from "../../Components/MainMap/MainMap"
import Sidebar from "../../Components/Sidebar/Sidebar"

import useFetchMap from "./useFetchMap"
import { Stack } from "@mui/material"


const MainApp = () => {
  const { location } = useFetchMap()
	return (
		<>
			<Stack spacing={2} direction="row" justifyContent="center" height={"100%"}  >
				<MainMap location={location}/>
				<Sidebar location={location}/>
			</Stack>
		</>
	)
}

export default MainApp
