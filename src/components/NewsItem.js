import React from "react";

const NewsItem =(props) => {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="container my-3 mx-3">
        <div className="card">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {source}
                
              </span>
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://www.defensenews.com/resizer/vgScQjH3Ciu8XF3Y48oxvo-Z34c=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/U6CKJGU2HRDHDKDXZWFYCEX6XE.jpg"
                : imageUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
