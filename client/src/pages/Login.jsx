import { API } from "../api";

export default function Login() {
  const submit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    
    <form onSubmit={submit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
