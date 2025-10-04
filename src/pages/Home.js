import React from "react";
import Hero from "../components/Hero";
import MainMenu from "../components/MainMenu";

export default function Home() {
  const demoPosts = [1, 2, 3].map((i) => ({
    id: i,
    title: `Tiêu đề bài viết mẫu ${i}`,
    excerpt: "Một đoạn ngắn mô tả nội dung bài viết để xem demo.",
  }));

  return (
    <div>
      <Hero />
      <MainMenu />

      <div className="container mx-auto px-4 py-10">
        <h3 className="text-center text-2xl font-semibold mb-6">Bài viết mới nhất</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoPosts.map((p) => (
            <article key={p.id} className="bg-white rounded shadow p-6">
              <div className="h-48 bg-gray-200 rounded mb-4" />
              <h4 className="font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
              <a href={`/articles/${p.id}`} className="text-teal-600">
                Đọc thêm →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
