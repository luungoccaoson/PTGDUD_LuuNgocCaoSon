import { useState } from "react";
import "./bai4.css";

function bai4() {
  const topics = {
    Java: "Java là một ngôn ngữ lập trình mạnh mẽ, phổ biến trong các ứng dụng doanh nghiệp.",
    JavaScript: "JavaScript là ngôn ngữ lập trình chủ yếu cho web, giúp tạo ra các ứng dụng tương tác.",
    Python: "Python là ngôn ngữ đơn giản, dễ học, mạnh mẽ trong khoa học dữ liệu và AI.",
    "C++": "C++ là ngôn ngữ mạnh mẽ, được dùng trong lập trình hệ thống và game."
  };

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="container">
      <div className="button-group">
        {Object.keys(topics).map((topic) => (
          <button key={topic} onClick={() => setSelectedTopic(topic)}>
            {topic}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedTopic ? <p>{topics[selectedTopic]}</p> : <p>Chọn một chủ đề để xem nội dung!</p>}
      </div>
    </div>
  );
}

export default bai4;
