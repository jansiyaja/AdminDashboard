import React, { useState } from "react";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate=useNavigate()

  const validatePassword = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (!password) {
      newErrors.password = "半角大文字・小文字・数字を含めた8文字以上20文字以内";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "半角大文字・小文字・数字を含めた8文字以上20文字以内";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致していません";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致していません";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validatePassword();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
     navigate('/login')
    }, 2000);
    
  };

  return (
    <div className="bg-inherit min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <h1 className="font-noto-sans-jp text-2xl font-semibold text-center text-gray-900">
          パスワード設定
        </h1>
       <p className="text-center text-base text-gray-500 pt-3">
          パスワードを入力後 [設定ボタン] を押してサービスの
          <span className="block">利用を開始してください。</span>
        </p>



        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        
          <div>
            <label htmlFor="password" className="block text-sm text-gray-800">
              パスワード
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-orange-400"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "非表示" : "表示"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

        
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-800"
            >
              パスワード確認用
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className={`block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-orange-400"
                }`}
               
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "非表示" : "表示"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
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
                "設定"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
