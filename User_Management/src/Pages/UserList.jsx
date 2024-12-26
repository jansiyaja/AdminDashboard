import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const UserList = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

 const initialUsers = [
    {
      id: "01",
      nickname: "ゆうと",
      email: "example1@example.com",
      birthDate: "1992年12月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    {
      id: "02",
      nickname: "ニックネーム最大12文字",
      email: "user234@example.net",
      birthDate: "1987年5月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    {
      id: "03",
      nickname: "わんこ好き",
      email: "test_user@gmail.com",
      birthDate: "1996年10月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年01月12日",
    },
    {
      id: "04",
      nickname: "はるかぜ",
      email: "dummy_email_567@yahoo.co.jp",
      birthDate: "1998年2月",
      gender: "男性",
      location: "静岡県",
      registrationDate: "2024年01月12日",
    },
    {
      id: "05",
      nickname: "あおい",
      email: "ecampleaddress124e23@outlook.co.jp",
      birthDate: "1978年5月",
      gender: "女性",
      location: "埼玉県",
      registrationDate: "2024年01月11日",
    },
    {
      id: "06",
      nickname: "ポンたろう",
      email: "random.user@example.org",
      birthDate: "1978年6月",
      gender: "女性",
      location: "栃木県",
      registrationDate: "2024年01月11日",
    },
    {
      id: "07",
      nickname: "まさやん",
      email: "email1234@example.co.jp",
      birthDate: "1972年8月",
      gender: "回答しない",
      location: "鹿児島県",
      registrationDate: "2024年01月11日",
    },
    {
      id: "08",
      nickname: "なつこ",
      email: "user_test456@gmail.com",
      birthDate: "1969年11月",
      gender: "回答しない",
      location: "茨城県",
      registrationDate: "2024年01月11日",
    },
    {
      id: "09",
      nickname: "びょんびょん",
      email: "example_email@yahoo.com",
      birthDate: "1984年4月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2024年01月10日",
    },
    {
      id: "10",
      nickname: "jansiya",
      email: "dummy.address@example.net",
      birthDate: "1988年4月",
      gender: "その他",
      location: "福岡",
      registrationDate: "2024年01月10日",
    },
    {
      id: "11",
      nickname: "ひまわりさん",
      email: "dummy.address@example.net",
      birthDate: "1988年4月",
      gender: "その他",
      location: "福岡",
      registrationDate: "2024年01月10日",
    },
    {
      id: "12",
      nickname: "ひまわりさん",
      email: "dummy.address@example.net",
      birthDate: "1988年4月",
      gender: "その他",
      location: "福岡",
      registrationDate: "2024年01月10日",
    },
  ];

 
  const filteredUsers = initialUsers.filter(
    (user) =>
      user.nickname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleTooltip = (email) => {
    setTooltipContent(email);
  };

  const PaginationButton = ({ page, active }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-1 mx-1 rounded ${
        active
          ? "bg-orange-500 text-white"
          : "bg-white hover:bg-gray-100 text-gray-700"
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="h-screen bg-orange-50 p-5">
      <div className=" flex justify-between">
        <h2 className="text-xl font-medium">登録ユーザー一覧</h2>
        <div className="relative w-80 mt-4">
          <HiOutlineMagnifyingGlass className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            className="pl-8 py-2 w-full border rounded-lg shadow-sm hover:border-orange-300 caret-orange-400 focus:border-orange-300 focus:ring-orange-400 focus:outline-none "
            placeholder="ニックネーム/メールアドレスで検索"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto bg-white mt-6">
       
        <table className="w-full hidden lg:table">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 font-medium">No.</th>
              <th className="text-left p-3 font-medium">ニックネーム</th>
              <th className="text-left p-3 font-medium">メールアドレス</th>
              <th className="text-left p-3 font-medium">生年月</th>
              <th className="text-left p-3 font-medium">性別</th>
              <th className="text-left p-3 font-medium">居住地</th>
              <th className="text-left p-3 font-medium">登録日</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-3 text-center">
                  表示するデータがありません
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.nickname}</td>
                  <td className="p-3 w-80 h-12 relative">
                    {user.email.length > 20 ? (
                      <span
                        className="block truncate cursor-pointer"
                        onMouseEnter={() => handleTooltip(user.email)}
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        {user.email.substring(0, 20)}...
                      </span>
                    ) : (
                      <span>{user.email}</span>
                    )}
                    {tooltipContent === user.email && (
                      <div className="absolute bg-black text-white p-2 rounded-lg mt-1 text-xs w-max">
                        {tooltipContent}
                      </div>
                    )}
                  </td>
                  <td className="p-3">{user.birthDate}</td>
                  <td className="p-3">{user.gender}</td>
                  <td className="p-3">{user.location}</td>
                  <td className="p-3">{user.registrationDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      
        <div className="lg:hidden mt-4">
          {paginatedUsers.length === 0 ? (
            <div className="p-3 text-center">表示するデータがありません</div>
          ) : (
            paginatedUsers.map((user) => (
              <div
                key={user.id}
                className="border-b p-4 mb-4 hover:bg-gray-50 shadow-md rounded-lg"
              >
                <div className="font-semibold">No. {user.id}</div>
                <div className="mt-2">
                  <strong>ニックネーム:</strong> {user.nickname}
                </div>
                <div className="mt-2">
                  <strong>メールアドレス:</strong> {user.email}
                </div>
                <div className="mt-2">
                  <strong>生年月:</strong> {user.birthDate}
                </div>
                <div className="mt-2">
                  <strong>性別:</strong> {user.gender}
                </div>
                <div className="mt-2">
                  <strong>居住地:</strong> {user.location}
                </div>
                <div className="mt-2">
                  <strong>登録日:</strong> {user.registrationDate}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    
      <div className="flex sticky justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          {filteredUsers.length}人中 
          {Math.min(startIndex + itemsPerPage, filteredUsers.length)}人表示
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            ＜
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
            <PaginationButton
              key={i + 1}
              page={i + 1}
              active={currentPage === i + 1}
            />
          ))}
          {totalPages > 5 && <span className="mx-2">...</span>}
          {totalPages > 5 && (
            <PaginationButton
              page={totalPages}
              active={currentPage === totalPages}
            />
          )}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            ＞
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
