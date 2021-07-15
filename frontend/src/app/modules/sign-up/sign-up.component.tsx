import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { SignUpProps } from "./sign-up.type";
import { AppState } from "@/app/store/global.store";
import { signUpUser } from "@/app/store/auth/auth.action";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const SignUpPage: React.FC<SignUpProps> = props => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<any>();
  const { auth, errors: errorsFromProps, signUpUser, handleSignUp } = props;

  const history = useHistory();

  const [isFormValid, setFormValid] = useState(false);

  const checkValidForm = useCallback(() => {
    const isValid =
      form.getFieldValue("firstName") &&
      form.getFieldValue("firstName").length > 0 &&
      form.getFieldValue("lastName") &&
      form.getFieldValue("lastName").length > 0 &&
      form.getFieldValue("email") &&
      form.getFieldValue("email").length > 0 &&
      form.getFieldValue("password") &&
      form.getFieldValue("password").length > 0;

    if (isValid !== isFormValid) {
      setFormValid(isValid);
    }
  }, [form, isFormValid, setFormValid]);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      history.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    setErrors(errorsFromProps);
  }, [errorsFromProps]);

  const signUp = () => {
    const firstName = form.getFieldValue("firstName");
    const lastName = form.getFieldValue("lastName");
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    signUpUser(newUser, history);

    if (errors.error) {
      message.error(errors.error);
    }
  };

  return (
    <>
      <Form form={form} onChange={() => checkValidForm()}>
        <Form.Item className="mb-0">
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Nhập tên",
              },
            ]}
            className="d-inline-block"
            style={{
              width: "48%",
              marginRight: "4%",
            }}
          >
            <Input prefix={<UserOutlined />} placeholder="Tên" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Nhập họ",
              },
            ]}
            className="d-inline-block"
            style={{ width: "48%" }}
          >
            <Input prefix={<UserOutlined />} placeholder="Họ" />
          </Form.Item>
        </Form.Item>
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
            onClick={signUp}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <p>
        Bạn đã có tài khoản?{" "}
        <Link onClick={() => handleSignUp("login")} to="#">
          Đăng nhập
        </Link>
      </p>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
  errors: state.error,
});
export default connect(mapStateToProps, { signUpUser })(SignUpPage);
