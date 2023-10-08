import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { login } from "../../Services/account";
import "./Signin.css";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      form.email.trim().length === 0 ||
      form.password.trim().length === 0

    ) {
      // Alert the user to fill in the required fields
      alert("Please fill in the required fields");
      // Return early and do not send the data
      return;
    }
    dispatch(login(form));

  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div className="signin-links">
        <button onClick={handleSubmit} className="signin-button">
          SignIn
        </button>
        <Link to="/account/register" className="create-account">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Signin;
