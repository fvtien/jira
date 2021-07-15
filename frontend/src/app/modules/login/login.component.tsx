import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "@/app/store/global.store";
import { LoginProps } from "./login.type";
import { loginUser } from "@/app/store/auth/auth.action";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const LoginPage: React.FC<LoginProps> = props => {
  const [form] = Form.useForm();

  const [isFormValid, setFormValid] = useState(false);

  const checkValidForm = useCallback(() => {
    const isValid =
      form.getFieldValue("email") &&
      form.getFieldValue("email").length > 0 &&
      form.getFieldValue("password") &&
      form.getFieldValue("password").length > 0;

    if (isValid !== isFormValid) {
      setFormValid(isValid);
    }
  }, [form, isFormValid, setFormValid]);

  const [errors, setErrors] = useState<any>();
  const { auth, loginUser, errors: errorsFromProps, handleSignUp } = props;

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    let { from } = location.state || { from: { pathname: "/home" } };

    if (auth?.isAuthenticated) {
      history.replace(from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    setErrors(errorsFromProps);
  }, [errorsFromProps]);

  const login = () => {
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");

    const userData = {
      email: email,
      password: password,
    };

    loginUser(userData);

    if (errors.error) {
      message.error(errors.error);
    }
  };

  return (
    <>
      <Form form={form} onChange={() => checkValidForm()}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Nhập email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Nhập mật khẩu",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={!isFormValid}
            type="primary"
            htmlType="submit"
            onClick={login}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <p>
        Bạn chưa có tài khoản?{" "}
        <Link onClick={() => handleSignUp("signup")} to="#">
          Đăng ký
        </Link>
      </p>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
  errors: state.error,
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
