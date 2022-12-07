// import React from "react";
// import {useSelector} from "react-redux";
// import {selectUserId} from "../../Redux/AuthReducer";
// import {useCookies} from "react-cookie";
//
//
// // редиректит на страницу логина, если не выполнен вход
// // если вход выполнен, то пропускает на нужный компонент
// const withCookieSession = (Component) => {
// 	return (props) => {
// 		const userId = useSelector(selectUserId);
// 		const [cookies, setCookie] = useCookies(['user_id']);
//
// 		console.log(cookies);
// 		console.log(cookies.user_id);
//
// 		setCookie('user_id', 528);
//
// 		// if (userId)
// 		return <Component {...props}/>
// 		// return <Navigate to={"/login"}/>
// 	}
// }
//
// export default withCookieSession;