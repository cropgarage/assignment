import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const StudyList = ({ setTotalTime }) => {
  const [records, setRecords] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchRecords();
  }, [setTotalTime]);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {records.map((item) => (
        <li key={item.id}>
          {item.title}：{item.time}時間
        </li>
      ))}
    </ul>
  );
};
