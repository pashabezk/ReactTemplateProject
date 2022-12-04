import React from "react";
import {Button, Checkbox, Form, Input} from "antd";

const Login = () => {

	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div style={{
			display: "flex",
			height: "100%",
			minHeight: "100%",
			flexGrow: 1,
			width: "100%",
			margin: "auto",
			// verticalAlign: "center",
			// alignSelf: "center"
			// border: "solid indigo 3px"
		}}>
			<Form
				labelCol={{
					span: 6
				}}
				wrapperCol={{
					span: 16
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				requiredMark={false}
				style={{
					verticalAlign: "center",
					marginBlock: "auto",
					width: "100%",
					maxWidth: "500px",
					marginInline: "auto",
					// border: "solid violet 3px"
				}}>
				<Form.Item
					label="Логин"
					name="login"
					rules={[
						{
							required: true,
							message: 'Поле логин обязательно',
						}
					]}>
					<Input/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					rules={[
						{
							required: true,
							message: 'Поле пароль обязательно',
						},
					]}
				>
					<Input.Password/>
				</Form.Item>
				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{
						span: 0,
						offset: 6
					}}
				>
					<Checkbox>запомнить меня</Checkbox>
				</Form.Item>
				<Form.Item wrapperCol={{offset: 6}}>
					<Button type="primary" htmlType="submit">
						Войти
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default Login;