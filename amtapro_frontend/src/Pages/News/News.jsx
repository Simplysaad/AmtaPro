import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import Header from "../Header";
import Footer from "../Footer";
import Footballers from "../Footballers/Footballers";
import { Newspaper } from "lucide-react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const keyWords = [
    "football", "match", "team", "player", "goal", "score", "win", "lose",
    "draw", "stadium", "coach", "manager", "league", "season", "fans",
    "penalty", "kick", "pass", "tackle", "referee", "injury", "substitute",
    "formation", "defense", "attack", "midfield", "striker", "goalkeeper",
    "championship", "tournament", "competition", "club", "fixture", "result",
    "performance", "lineup", "whistle", "corner", "free kick", "offside",
    "VAR", "yellow card", "red card", "extra time", "halftime", "fulltime",
    "points", "table", "promotion", "relegation", "ball", "fc"
  ];

  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_7e534d5ceb714fa68c72afa60bb28b77&q=football&language=en")
      .then((res) => res.json())
      .then((data) => {
        setNews([...new Set(data.results || [])]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filteredNews = news.filter(
    (article) =>
      article.description &&
      keyWords.some((keyWord) =>
        article.description.toLowerCase().includes(keyWord.toLowerCase())
      )
  );

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <Newspaper size={28} />
          Latest Football News
        </h2>

        <div className="grid gap-6 sm:grid-cols-1">
          {filteredNews.length > 0 ? (
            filteredNews.map((article) => (
              <div
                key={article.link || article.title}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-green-100"
              >
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-green-800">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {article.description.split(" ").slice(0, 50).join(" ")}...
                  </p>
                  <span className="text-xs text-gray-500 italic">
                    {article.pubDate}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1 className="text-center text-red-600 font-semibold text-xl mt-10">
                Oops, no football news found. Please try again later.
              </h1>
            </div>
          )}
        </div>
      </div>
      {
        !filteredNews.length > 0 && <Footballers />
      }
      <Footer />
    </div>
  );
};

export default News;
