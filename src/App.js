import './App.css';
import React from "react";
import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import AppFooter from "./Components/Footer/Footer";
import MessagesPage from "./Components/MessagesPage/MessagesPage";
import LoginWithRedux from "./Components/Login/LoginWithRedux";
import AppHeader from "./Components/Header/Header";

// const Login = React.lazy(() => import ("./Components/Login/Login"));
const UserPage = React.lazy(() => import ("./Components/UserPage/UserPage"));

function App() {
	return (
		// styling
		// <ConfigProvider
		// 	theme={{
		// 		token: {
		// 			colorPrimary: '#00b96b',
		// 		},
		// 	}}
		// >

		// HashRouter only for GitHub pages
		// <BrowserRouter basename={process.env.PUBLIC_URL}> // use instead HashRouter in real project
		<HashRouter>
			<Layout className="main-wrapper">
				<AppHeader/>
				<Content>
					<React.Suspense fallback={<div>loading</div>}>
						<Routes>
							<Route path="/" element={<Navigate to="/profile"/>}/>
							<Route path="/profile" element={<UserPage/>}/>
							<Route path="/messages" element={<MessagesPage/>}/>
							{/*<Route path="/login" element={<Login/>}/>*/}
							<Route path="/login" element={<LoginWithRedux/>}/>
							<Route path="*" element={<Navigate to="/"/>}/>
						</Routes>
					</React.Suspense>
				</Content>
				<Footer>
					<div className="center1000px">
						<AppFooter/>
					</div>
				</Footer>
			</Layout>
		</HashRouter>
	);
}

// export default withCookieSession(App);
export default App;
