import { useState } from "react"

interface formData {
	login: string | undefined
	password: string | undefined
}

const ValidateLogin = ({login, logout}: any ) => {
	const [formData, setFormData] = useState<formData>({
		login: "",
		password: "",
	})

	let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}
  const handleSubmit = (event: React.SyntheticEvent) =>{
    event.preventDefault()
    login()
  }

	return { formData, handleChange, handleSubmit }
}

export default ValidateLogin
