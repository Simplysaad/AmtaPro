import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import Header from '../Header'
import Footer from '../Footer'
import Footballers from "../Footballers/Footballers";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using a more reliable news API or mock data for demo
    const mockNews = [
      {
        article_id: '1',
        title: 'African Football Talent Showcase 2024',
        description: 'Young footballers from across Africa demonstrate their skills in the annual talent showcase, attracting scouts from major European clubs.',
        image_url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
        link: '#',
        pubDate: '2024-01-15'
      },
      {
        article_id: '2',
        title: 'Nigerian Academy Produces Next Generation Stars',
        description: 'A football academy in Lagos has successfully trained over 50 players who now play professionally across different leagues worldwide.',
        image_url: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg',
        link: '#',
        pubDate: '2024-01-14'
      },
      {
        article_id: '3',
        title: 'Women\'s Football Growing in Ghana',
        description: 'The women\'s football scene in Ghana continues to grow with new academies and increased support from local communities.',
        image_url: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg',
        link: '#',
        pubDate: '2024-01-13'
      }
    ];
    
    // Simulate API call
    setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 1000);
    
    /* Original API call - commented out due to potential API issues
    fetch("https://newsdata.io/api/1/latest?apikey=pub_7e534d5ceb714fa68c72afa60bb28b77&q=football&language=en")
      .then((res) => res.json())
      .then((data) => {
        setNews([...new Set(data.results || [])]);
        setLoading(false);
      })
      .catch(() => setLoading(false))
      .catch((err) => console.log(err));
    */
  }, []);

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

  if (loading) {
    return (
      <div className="text-center text-green-600 font-medium text-lg py-10">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 decoration-green-500">Latest Football News</h2>
        <div className="grid gap-6 sm:grid-cols-1">
          {news.length > 0 ? news
            .filter(article => (
              keyWords.some(keyWord => (
                 article.description.toLowerCase().includes(keyWord.toLowerCase())
              ))
            ))

            .map((article) => (
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
            ))
            : news.length === 0 ? (
              <div>
                <h1 className="text-center items-center text-red-600 font-semibold text-xl mt-10">
                  Oops, Something went wrong <strong>from your end</strong>, please try again later.
                </h1>
                <Footballers />
              </div>
            )
              : (
                <div>
                  <h1 className="text-center items-center text-red-600 font-semibold text-xl mt-10">
                    Oops, Something went wrong <strong>from our end</strong>, please try again later.
                  </h1>
                  <Footballers />
                </div>
              )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;