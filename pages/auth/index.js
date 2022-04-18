import { useState, useRef } from "react";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const togglForm = () => {
    setIsLogin(!isLogin);
    emailRef.current.value = null;
    passRef.current.value = null;

    if (!isLogin) nameRef.current.value = null;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (isLogin) {
      const userData = { email, password };
      console.log(userData);
    }

    if (!isLogin) {
      const userData = { name, email, password };
      console.log(userData);
    }
  };

  return (
    <div className="container">
      <div className="text-white font-ubuntu max-w-lg mx-auto my-16 py-8 px-6 bg-indigo-800 rounded-lg ">
        <h2 className="text-3xl text-center mb-6">{isLogin ? "Login Form" : "SignUp Form"} </h2>
        <form onSubmit={submitForm}>
          {!isLogin && <Input forwardRef={nameRef} type="name" label="Your Name" />}

          <Input forwardRef={emailRef} type="email" label="Your Email" />

          <Input forwardRef={passRef} classWrapper="mb-8" type="password" label="Your Password" />

          {isLogin ? <Button text="Login" /> : <Button text="Sign Up" />}
        </form>
        <p className="text-center text-gray-400 cursor-pointer" onClick={togglForm}>
          {isLogin ? "Create New Account" : "Already Have An Account ? Then Log In"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
