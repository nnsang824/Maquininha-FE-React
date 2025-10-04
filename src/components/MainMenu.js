import React from "react";
import "../styles/mainmenu.css";

const articles = [
  {
    id: 1,
    title: "Cách nhận Robux trên Roblox",
    category: "Ứng dụng",
    date: "19 Tháng 9, 2025",
    readTime: "3 phút",
    image: "https://i.imgur.com/dYcYQ7E.png",
  },
  {
    id: 2,
    title: "Cách kiếm Robux một cách an toàn và chính thức",
    category: "Ứng dụng",
    date: "16 Tháng 9, 2025",
    readTime: "5 phút",
    image: "https://i.imgur.com/rW0q5qg.png",
  },
  {
    id: 3,
    title: "Tìm hiểu cách tạo và chơi Roblox an toàn",
    category: "Ứng dụng",
    date: "16 Tháng 9, 2025",
    readTime: "4 phút",
    image: "https://i.imgur.com/hP9RjvR.png",
  },
];

export default function MainMenu() {
  return (
    <section className="mainmenu-container">
      <h2 className="mainmenu-title">Artigos gần đây</h2>

      <div className="mainmenu-grid">
        {articles.map((a) => (
          <div key={a.id} className="article-card">
            <img src={a.image} alt={a.title} className="article-image" />

            <div className="article-content">
              <span className="article-category">{a.category}</span>
              <h3 className="article-title">{a.title}</h3>
              <p className="article-meta">
                {a.date} • {a.readTime}
              </p>
              <a href="#" className="article-link">
                ĐỌC THÊM →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
