// import React, { useEffect, useState } from "react";

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://newsdata.io/api/1/latest?apikey=pub_76721095d5d5424bbbf53d1c2e296545&q=football&language=en")
//       .then((res) => res.json())
//       .then((data) => {
//         setNews(data.results || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false))
//       .catch((err) => console.log(err));
//   }, []);

//   if (loading) {
//     return <div className="">
//       Fetching latest football news
//     </div>
//   }

//   return (
//     <div className="">
//       <h2 className="">Latest News</h2>
//       <div className="">
//         {news.map((article) => (
//           <a
//             key={article.article_id}
//             href={article.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className=""
//           >
//             {
//             article.image_url && (
//               <img
//                 src={article.image_url}
//                 alt={article.title}
//                 className=""
//               />
//             )}
//             <div className="">
//               <h3 className="">{article.title}</h3>
//               <p className="">{article.description.split(" ").splice(0, 50).join(" ")}...</p>
//               <span className="">{article.pubDate}</span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;