import React from "react"
import "./loginPage.css"
import { TextField, Button, Stack } from "@mui/material"
import ValidateLogin from "./ValidateLogin"
import useLogin from "../Utils/useLogin"

const LoginPage: React.FC = () => {
	const { handleChange, handleSubmit } = ValidateLogin()
	return (
		<div className="LoginContainer">
			<form onSubmit={handleSubmit}>
				<Stack spacing={2} direction="column" justifyContent="center" className="LoginStack">
					<div> Login </div>
					<Stack spacing={1} direction="column" textAlign="left">
						<label htmlFor="login">Login</label>
						<TextField id="login" name="login" onChange={handleChange} />
					</Stack>
					<Stack spacing={1} direction="column" textAlign="left">
						<label htmlFor="password">Password</label>
						<TextField id="password" type="password" name="password" onChange={handleChange} />
					</Stack>
					<Stack spacing={1} direction="row" justifyContent="center">
						<Button variant="contained" fullWidth>
							Register{" "}
						</Button>
						<Button variant="contained" type="submit" fullWidth >
							Submit
						</Button>
					</Stack>
					<div>Forgot Password ?</div>
				</Stack>
			</form>
		</div>
	)
}

export default LoginPage
