import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const SignupForm = useRef();

  const togglForm = () => {
    setIsLogin(!isLogin);
    SignupForm.reset();
  };

  const SubmitPost = async (url, userData) => {
    setMessage("");
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();

      if (data.status === "fail") {
        console.log(data);
        if (data.message.includes("email")) {
          return setMessage("This email is already being used");
        }

        if (data.message.includes("password")) {
          return setMessage(data.message.split(": ")[2]);
        }
      }

      setUserInfo(data.data.user);
    } catch (error) {
      console.log("Sending data Failed");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (isLogin) {
      const userData = { email, password };
      SubmitPost("/api/auth/signin", userData);
    }

    if (!isLogin) {
      const userData = { name, email, password };
      SubmitPost("/api/auth/signup", userData);
    }
  };

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <div className="container">
      <div className="text-white font-ubuntu max-w-lg mx-auto my-16 py-8 px-6 bg-indigo-800 rounded-lg ">
        <h2 className="text-3xl text-center mb-6">{isLogin ? "Login Form" : "SignUp Form"} </h2>
        <form ref={(e) => (SignupForm = e)} onSubmit={submitForm}>
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
