import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";
import LoginLeft from "../components/LoginLeft";
import { useAppContext } from "../context/AppContext";

const labelClasses =
  "block text-[10px] font-semibold tracking-[0.12em] text-zinc-500";
const inputClasses =
  "mt-2 w-full border-b border-zinc-200 bg-transparent px-1 py-2.5 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-orange-500";

const AuthPage = ({ mode = "login" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAppContext();
  const navigate = useNavigate();
  const isLogin = mode === "login";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await api.post(
        `/api/auth/${isLogin ? "login" : "register"}`,
        {
          ...(isLogin ? {} : { name }),
          email,
          password,
        }
      );
      setUser(data.user);
      navigate("/");
    } catch (requestError) {
      setError(
        requestError.response?.data?.error ||
          "We couldn't sign you in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-zinc-900">
      <LoginLeft />

      <main className="flex min-h-screen flex-1 items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-[340px]">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900">
              {isLogin ? "Sign in" : "Create an account"}
            </h1>
            <p className="mt-1.5 text-sm text-zinc-500">
              {isLogin
                ? "Enter your credentials to access your website Sristi."
                : "Get started by entering your registration details."}
            </p>
          </header>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <label className={labelClasses}>
                FULL NAME
                <input
                  autoComplete="name"
                  className={inputClasses}
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  required
                  value={name}
                />
              </label>
            )}

            <label className={labelClasses}>
              EMAIL ADDRESS
              <input
                autoComplete="email"
                className={inputClasses}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </label>

            <label className={labelClasses}>
              PASSWORD
              <span className="relative mt-2 block">
                <input
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  className={`${inputClasses} mt-0 pr-8`}
                  minLength={6}
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
                  onClick={() => setShowPassword((visible) => !visible)}
                  type="button"
                >
                  {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </span>
            </label>

            <button
              className="mt-1 w-full rounded-lg bg-linear-to-r from-[#f02d00] to-[#ed7800] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={loading}
              type="submit"
            >
              {loading
                ? "Please wait…"
                : isLogin
                  ? "Sign in"
                  : "Sign up"}
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="font-medium text-zinc-900 hover:underline"
              onClick={() => {
                setError("");
                navigate(isLogin ? "/register" : "/login");
              }}
              type="button"
            >
              {isLogin ? "Sign up" : "Sign in here"}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
