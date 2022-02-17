import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
	location: any
}
interface locationData {
	city: string
	description: string
	image: string
	lat: number
	lng: number
	name: string
	phone: string
	postalCode: string
}

const Sidebar = ({ location }: Props) => {
	const { locationData } = location
	const locationDataDisplay = () => {
		return locationData?.map((item: locationData, key:number) => (
			<Card key={key} style={{marginBottom: "10px"}}>
				<CardContent>
					<Stack direction="row">
						<Box>
							<img src={item.image} height={"180px"} width={"220px"} alt={item.name} />
						</Box>
						<Box>
						<Stack direction="column" marginLeft={"20px"}>
							<Typography align="left" variant="h5">{item.name}</Typography>
							<Typography align="left">{item.description}</Typography>
							<Typography align="right">{item.phone}</Typography>
							<Typography align="right">{item.postalCode}</Typography>
							</Stack>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		))
	}
	return (
		<Box width={"40%"} height={"100%"} bgcolor={"#24334b"} style={{ marginLeft: 0, overflowY: "scroll" }}>
			{locationDataDisplay()}
		</Box>
	)
}

export default Sidebar
