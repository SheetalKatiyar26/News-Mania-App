import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge">{source}</span>
        </div>
        <div className="card-head">
          <img
            src={
              !imageUrl
                ? "https://cdn.siasat.com/wp-content/uploads/2022/05/energy-_may18.jpg"
                : imageUrl
            }
            alt="item"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="card-text-body">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
