/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import { register } from "../../Services/account";
import { useAppDispatch } from "../../hooks/hooks";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [formData, setformData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="signup">
      <h1>Create account</h1>

      <form action="" className="signup-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="First name"
          className="signup-input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last name"
          className="signup-input"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          className="signup-input"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="signup-input"
          onChange={handleChange}
        />
      </form>

      <div className="create-button">
        <button onClick={handleSubmit}>Create</button>
        <Link to="/account/login" className="create-account">
          Sign In
        </Link>
      </div>

    </div>
  );
};

export default Signup;
