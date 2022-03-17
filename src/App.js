import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages"
import Comic from "./pages/Comic"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div className="wrapper">
							<HomePage />
						</div>
					}
				></Route>
				<Route
					path="/comic"
					element={
						<div className="wrapper">
							<Comic />
						</div>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
