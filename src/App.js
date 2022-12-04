import './App.css';
import React from "react";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppFooter from "./Components/Footer/Footer";
import MessagesPage from "./Components/MessagesPage/MessagesPage";
import LoginWithRedux from "./Components/Login/LoginWithRedux";

const Login = React.lazy(() => import ("./Components/Login/Login"));
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
		<Layout className="main-wrapper">
			<Header>
				<div className="center1000px">
					Header
				</div>
			</Header>
			<Content>
				<BrowserRouter>
					<React.Suspense fallback={<div>loading</div>}>
						<Routes>
							<Route path="/" element={<Navigate to="/profile"/>}/>
							<Route path="/profile" element={<UserPage/>}/>
							<Route path="/messages" element={<MessagesPage/>}/>
							<Route path="/login" element={<Login/>}/>
							<Route path="/login2" element={<LoginWithRedux/>}/>
							<Route path="*" element={<Navigate to="/"/>}/>
						</Routes>
					</React.Suspense>
				</BrowserRouter>
			</Content>
			<Footer>
				<div className="center1000px">
					<AppFooter/>
				</div>
			</Footer>
		</Layout>
	);
}

export default App;
