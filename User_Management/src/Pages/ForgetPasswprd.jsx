import React, { useState } from 'react'
import Spinner from '../Components/Spinner';
import ErrorToast from '../Components/ErrorToast';




const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
      const [toast, setToast] = useState(null);
    
    const handleSubmit = (e) => {
       e.preventDefault();
        setErrors({});
     const formData = new FormData(e.target);
        const email = formData.get("email");
      const validationErrors = validateForm(email);
      

          if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true)
    }

   
    
      const validateForm = (email) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "有効なメールアドレスを入力してください";
    } else if (!emailRegex.test(email)) {
      errors.email = "有効なメールアドレスを入力してください";
    }



    return errors;
  };
   return (
    <div className="bg-inherit flex items-center justify-center p-5">
      <div className="w-full max-w-md pt-7">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3 font-sans">
          パスワード再設定
         </h2>
           <p className="text-center text-base text-gray-700 p-5">
         現在使っているメールアドレスを入力してください。
          <span className="block">パスワード再設定用のURLをメールで送信いたします。</span>
        </p>
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
                "パスワード再設定用URLを送信する"
              )}
            </button>
          </div>
        </form>
        <p className="text-base text-gray-800 text-center mt-4 font-bold">
          ログイン画面にもどる
        </p>
      </div>

      {toast && <ErrorToast type={toast.type} message={toast.message} />}
    </div>
  );
}

export default ForgetPassword
