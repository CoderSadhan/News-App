import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=efee76bf87f44e70a461fe66a6816281`;
      

      fetch(url)
        .then((Response) => Response.json())
        .then((data) => setArticles(data.articles))
        .catch((error) => console.error("Error fetching news:", error));
    }, [category]);
    
  return (
    <div>
        <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
          {articles.map((news,index)=>{
            return <NewsItem key ={index} title={news.title} description = {news.description} src ={news.urlToImage} url = {news.url}/>

          })}
    </div>
  )
}

export default NewsBoard
