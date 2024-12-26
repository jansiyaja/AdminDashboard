import React from 'react';
import Cards from '../Components/Cards';
import Chart from '../Components/Chart';

const Dashboard = () => {
  return (
<div className="p-6 bg-orange-50 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  

     
      <Cards
        dateRange="2024/2/1 - 2024/2/5"
        currentMonthUsers="450"
        lastMonthUsers="400"
        growthRate="12.5"
        name="ユーザー登録数累計"
        spanText="人"
        last_text=" (前月時点の累計）"
      />
      <Cards
        dateRange="2024/2/1 - 2024/2/5"
        currentMonthUsers="50"
        lastMonthUsers="12"
        growthRate="316.6"
        name="アクティブユーザー"
        spanText="人/月"
        last_text=" (前月時点）"
      />
      <Cards
        dateRange="2024/2/1 - 2024/1/31"
        currentMonthUsers="10"
        lastMonthUsers="12"
        growthRate="-16.6"
        name="定着率"
        spanText="%/前月"
        last_text=" (前々月)"
      />
      <Cards
        dateRange="2024/2/1 - 2024/2/5"
        currentMonthUsers="4"
        lastMonthUsers="2"
        growthRate="100"
        name="平均検索回数"
        spanText="回/月"
        last_text=" (前月時点）"
      />

     <div className="col-span-full sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white shadow rounded-lg p-4 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">性別・年代比</h2>
        <p className="text-sm text-gray-500 mb-2">2024年 01月</p>
       <Chart/>
       
      </div>
      <Cards
        dateRange="2024/2/1 - 2024/2/5"
        currentMonthUsers="125"
        lastMonthUsers="85"
        growthRate="47"
        name="抽選利用回数"
        spanText="回/月"
        last_text=" (前月の今日時点）"
      />
      <Cards
        dateRange="2024/2/1 - 2024/2/5"
        currentMonthUsers="10"
        lastMonthUsers="8"
        growthRate="25"
        name="アカウント削除数"
        spanText="人/月"
        last_text=" (前月時点）"
      />
    </div>
  );
};

export default Dashboard;
