import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Chọn máy tốt nhất cho bạn
        </h2>
        <p className="mb-6">So sánh · Đánh giá · Tư vấn miễn phí</p>
        <button className="bg-white text-teal-700 px-5 py-2 rounded shadow">
          Xem máy nổi bật →
        </button>
      </div>
    </section>
  );
}
