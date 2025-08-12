import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_76721095d5d5424bbbf53d1c2e296545&q=football&language=en")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.results || []);
        setLoading(false);
      })
      .catch(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  

  if (loading) {
    return (
      <div className="text-center text-green-600 font-medium text-lg py-10">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6 decoration-green-500">Latest Football News</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {Array.isArray(news) && news.length > 0 ? news.map((article) => (
          <a
            key={article.article_id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-green-100"
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-green-800">{article.title}</h3>
              <p className="text-sm text-gray-700">{article.description.split(" ").splice(0, 50).join(" ")}...</p>
              <span className="text-xs text-gray-500 italic">{article.pubDate}</span>
            </div>
          </a>
        )) : (
          <h1 className="text-center text-red-600 font-semibold text-xl mt-10">
            Connect to the internet to get the latest football news
          </h1>
        )}
      </div>
    </div>
  );
};

export default News;