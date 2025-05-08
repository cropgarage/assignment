import React from "react";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

export const StudyList = ({ setTotalTime }) => {
  const [records, setRecords] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const { error } = await supabase.from("study-record").delete().eq("id", id);
    if (error) {
      alert("削除に失敗しました");
      console.error(error);
    } else {
      fetchRecords(); // 削除後に再取得
    }
  };

  // useEffect(() => {
  const fetchRecords = async () => {
    const { data, error } = await supabase.from("study-record").select("*");

    if (error) {
      console.error("データ取得エラー:", error);
    } else {
      setRecords(data);
      const sum = data.reduce((acc, cur) => acc + Number(cur.time), 0);
      setTotalTime(sum);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRecords();
  });

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {records.map((item) => (
        <li key={item.id}>
          {item.title}：{item.time}時間
          <button onClick={() => handleDelete(item.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};
