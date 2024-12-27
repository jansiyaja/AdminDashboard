import React, { useState } from "react";
import Spinner from "../Components/Spinner";
import ErrorToast from "../Components/ErrorToast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const validationErrors = validateForm(email, password);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    let message = null;
    if (email !== "admin12345@allright.com" || password !== "Password1234") {
      message = "error";
      setToast({ message: "メールアドレスかパスワードに誤りがあります", type: "error" });
    } else {
      message = "success";
      setToast({ message: "パスワード設定が完了しました", type: "success" });
      login({ email ,password}); 
    }

    setTimeout(() => {
      setLoading(false);
      if (message === "success") {
        navigate("/dashboard");
      } else {
        window.location.reload();
      }
    }, 1000);
  };

  const validateForm = (email, password) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "有効なメールアドレスを入力してください";
    } else if (!emailRegex.test(email)) {
      errors.email = "有効なメールアドレスを入力してください";
    }

    if (!password) {
      errors.password = "パスワードを入力してください";
    } else if (password.length < 6) {
      errors.password = "パスワードは6文字以上でなければなりません";
    }

    return errors;
  };

  return (
    <div className="bg-inherit flex items-center justify-center p-5">
      <div className="w-full max-w-md pt-7">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 font-sans">
          ログイン
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 font-sans">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 block w-full p-2 border-2 rounded-lg shadow-sm hover:border-orange-300 caret-orange-400 focus:border-orange-300 focus:ring-orange-400 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-1 block w-full p-2 border-2  rounded-lg shadow-sm hover:border-orange-300 caret-orange-400 focus:border-orange-300 focus:ring-orange-400 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} `}
              required
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <button
              type="submit"
              className={`w-full text-base font-semibold py-2 px-4 rounded-full ${
                loading
                  ? "bg-orange-400 text-gray-500 cursor-not-allowed"
                  : "bg-orange-300 text-white hover:bg-orange-400"
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Spinner />
                </span>
              ) : (
                "ログイン"
              )}
            </button>
          </div>
              </form>
              <Link to={'/forget-password'}>
        <p className="text-base text-gray-800 text-center mt-4 font-bold">
          パスワードをお忘れの場合
                  </p>
                  </Link>
      </div>

      {toast && <ErrorToast type={toast.type} message={toast.message} />}
    </div>
  );
};

export default Login;
