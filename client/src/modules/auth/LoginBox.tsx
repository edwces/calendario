import GoogleLogin from "./GoogleLogin";

export default function LoginBox() {
  return (
    <div className="bg-white shadow-md rounded-md p-10">
      <h1 className="text-6xl font-bold mb-20 text-center">Login</h1>
      <a href="http://localhost:3001/auth/google">
        <GoogleLogin />
      </a>
    </div>
  );
}
