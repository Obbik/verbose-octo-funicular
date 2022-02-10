import { useState, useEffect, useContext } from "react"
import { UserContext } from "../Context/UserContext"

const useLogin = () => {
	const x = useContext(UserContext)
	const [isLogged, setisLogged] = useState<boolean | null>(false)

	const login = () => {
		localStorage.setItem("Logged", "true")
		return setisLogged(true)
	}

	const logout = () => {
		localStorage.setItem("Logged", "false")
		return setisLogged(false)
	}

	useEffect(() => {
		let readIsLogged: any = localStorage.getItem("Logged")
		setisLogged(readIsLogged)
	}, [isLogged])

	return { login, isLogged, logout }
}

export default useLogin
