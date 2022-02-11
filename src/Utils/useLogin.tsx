import { useState, useEffect } from "react"

const useLogin = () => {
	const [isLogged, setisLogged] = useState<boolean | null>(false)

	const login = () => {
		localStorage.setItem("Logged", "true")
		return setisLogged(true)
	}

	const logout = () => {
		localStorage.removeItem("Logged")
		return setisLogged(false)
	}

	useEffect(() => {
		let readIsLogged: any = localStorage.getItem("Logged")
		setisLogged(readIsLogged)
	}, [isLogged])

	return { login, isLogged, logout }
}

export default useLogin
