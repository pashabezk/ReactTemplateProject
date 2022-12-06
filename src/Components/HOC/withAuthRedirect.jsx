import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserId} from "../../Redux/AuthReducer";


// редиректит на страницу логина, если не выполнен вход
// если вход выполнен, то пропускает на нужный компонент
const withAuthRedirect = (Component) => {
	return (props) => {
		const userId = useSelector(selectUserId);

		// чтобы избежать зацикленности при попадании на страницу логина необходимо дополнительное условие
		const location = useLocation().pathname.split('/')[1]; // берём адрес url
		// если пользователь хочет попасть на страничку авторизации и ещё не авторизован, то пропускаем его
		// если он уже авторизован, то редиректим на главную страницу
		if (location === "login") {
			if (userId)
				return <Navigate to={"/"}/>
			else
				return <Component {...props}/>
		}

		if (userId)
			return <Component {...props}/>
		return <Navigate to={"/login"}/>
	}
}

export default withAuthRedirect;