/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import { register } from "../../Services/account";
import { useAppDispatch } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [formData, setformData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      formData.firstName.trim().length === 0 ||
      formData.lastName.trim().length === 0 ||
      formData.email.trim().length === 0 ||
      formData.password.trim().length === 0
    ) {
      // Alert the user to fill in the required fields
      alert("Please fill in the required fields");
      // Return early and do not send the data
      return;
    }
    const response = dispatch(register(formData));
    if (response !== undefined) {
      alert(`User is LoggedIN!`);
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }

    setformData({ firstName: "", lastName: "", email: "", password: "" });
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
        <button onClick={handleSubmit} >Create</button>
        <Link to="/account/login" className="create-account">
          Sign In
        </Link>
      </div>

    </div>
  );
};

export default Signup;
