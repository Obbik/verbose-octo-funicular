import LoginPage from "./Pages/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import useLogin from "./Utils/useLogin"
import { UserContext } from "./Context/UserContext"

function App() {
	const { isLogged } = useLogin()
	return (
		<div className="App">
			<Router>
				<UserContext.Provider value={{ isLogged }}>
					<Routes>
						<Route path="/" element={<LoginPage />} />
					</Routes>
				</UserContext.Provider>
			</Router>
		</div>
	)
}

export default App
