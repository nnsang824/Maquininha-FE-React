import React from "react";
import "../styles/articles.css";

const articles = [
  {
    id: 1,
    img: "https://i.imgur.com/abcd123.jpg",
    tag: "Ứng dụng",
    title: "Cách nhận Robux trên Roblox",
    date: "19 Tháng 9 2025",
    time: "3 phút",
  },
  {
    id: 2,
    img: "https://i.imgur.com/xyz789.jpg",
    tag: "Ứng dụng",
    title: "Cách kiếm Robux một cách an toàn và chính thức",
    date: "16 Tháng 9 2025",
    time: "5 phút",
  },
  {
    id: 3,
    img: "https://i.imgur.com/lmn456.jpg",
    tag: "Ứng dụng",
    title: "Tìm hiểu cách tạo và chơi Roblox an toàn",
    date: "16 Tháng 9 2025",
    time: "4 phút",
  },
];

function ArticlesSection() {
  return (
    <section className="articles-section">
      <h2 className="articles-title">Artigos gần đây</h2>
      <div className="articles-grid">
        {articles.map((a) => (
          <div className="article-card" key={a.id}>
            <img src={a.img} alt={a.title} className="article-image" />
            <div className="article-content">
              <span className="article-tag">{a.tag}</span>
              <h3 className="article-title">{a.title}</h3>
              <p className="article-meta">{a.date} • {a.time}</p>
              <a href="#" className="article-link">ĐỌC THÊM →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
