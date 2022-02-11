import LoginPage from "./Pages/loginPage/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import "./App.css"

import useLogin from "./Utils/useLogin"
import { UserContext } from "./Context/UserContext"

function App() {
	const { isLogged, login, logout } = useLogin()
	console.log(isLogged)
	return (
		<div className="App">
			<Router>
				<UserContext.Provider value={{ isLogged, login, logout }}>
					{isLogged  ? (
						<Routes>
							<Route path="/" element={<>
							<Header />
							</>} />
						</Routes>
					) : (
						<Routes>
							<Route path="/" element={<LoginPage />} />
						</Routes>
					)}
				</UserContext.Provider>
			</Router>
		</div>
	)
}

export default App
