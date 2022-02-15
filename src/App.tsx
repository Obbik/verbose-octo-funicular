import LoginPage from "./Pages/loginPage/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainApp from "./Pages/MainApp/MainApp"
import Header from "./Components/Header/Header"
import useLogin from "./Utils/useLogin"
import "./App.css"

import { UserContext } from "./Context/UserContext"

function App() {
	const { isLogged, login, logout } = useLogin()

	return (
		<div className="App">
			<Router>
				<UserContext.Provider value={{ isLogged, login, logout }}>
					{isLogged  ? (
						<Routes>
							<Route path="/" element={
							<>
								<Header />
								<MainApp />
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
