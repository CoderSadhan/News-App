import React from 'react';

import img from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 news-card"
      style={{ 
        maxWidth: "345px" ,
        borderRadius: "10px", 
        overflow: "hidden", 
        transition: "all 0.3s ease-in-out",
        cursor: "pointer"
        }}>

      <img
        src={src ? src : img}
        style={{ height: "200px",  objectFit: "cover", 
            transition: "transform 0.3s ease-in-out" }}
        className="card-img-top"
        alt="News Thumbnail"
      />
      
      <div className="card-body">
        <h5 className="card-title"  style={{ fontWeight: "bold", color: "#f8f9fa" }}>{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text"  style={{ fontSize: "14px", color: "#d1d1d1" }}>
          {description ? description.slice(0, 90) : "No Description Available"}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary"  style={{ borderRadius: "5px", padding: "8px 16px" }}>
          Read More
        </a>
      </div>
      <style>
        {`
        .news-card{
        background :rgba(24, 23, 24, 0.65)
        }
          .news-card:hover {
            transform: scale(1.05);
            box-shadow: 6px 10px 20px rgba(237, 15, 67, 0.48);
          }
          .news-card img:hover {
            transform: scale(1.1);
          }
        `}
      </style>


    </div>
  );
};

export default NewsItem;
