import "./App.css";
import { useState } from "react";
import { StudyList } from "./components/StudyList";
import { supabase } from "./supabaseClient";
function App() {
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState(0);
  // const [logs, setLogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const handleSubmit = async () => {
    if (subject === "" || time === "") {
      alert("学習内容と学習時間を入力してください");
      return;
    }

    const { error } = await supabase.from("study-record").insert({
      title: subject,
      time: Number(time),
    });

    if (error) {
      alert("エラーが発生しました");
      return;
    }

    setSubject("");
    setTime(0);
  };

  // const totalTime = logs.reduce((sum, log) => {
  //   return sum + Number(log.time);
  // }, 0);

  return (
    <div>
      <p>
        学習内容
        <br />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </p>
      <p>
        学習時間
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        時間
      </p>
      <p>入力されている学習内容：{subject}</p>
      <p>入力されている時間：{time}時間</p>
      <button onClick={handleSubmit}>登録</button>
      <p>
        合計時間：{totalTime} / 1000 (h)
        {/* <StudyList setTotalTime={setTotalTime} /> / 1000 (h) */}
      </p>

      {/* {logs.map((log, index) => (
        <p key={index}>
          {log.subject}：{log.time}時間
        </p>
      ))} */}
      <StudyList setTotalTime={setTotalTime} />
    </div>
  );
}

export default App;
