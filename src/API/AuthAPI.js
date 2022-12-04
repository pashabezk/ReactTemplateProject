export function fetchLogIn(login, password) {
	return new Promise((resolve) =>
			setTimeout(() => {
				if(login==="pasha" && password==="1234")
					resolve({data: {error: 0, login: "pasha", id: 1}})
				else resolve({data: {error: 1, errorMsg: "Логин или пароль неверный"}})
			}, 1000)
	);
}