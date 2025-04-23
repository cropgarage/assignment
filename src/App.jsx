import "./App.css";
import { useState } from "react";
function App() {
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState(0);
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
      <button>登録</button>
      <p>入力されていない項目があります</p>
      <p>合計時間：0 / 1000 (h)</p>
    </div>
  );
}

export default App;
