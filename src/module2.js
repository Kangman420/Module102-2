import React from "react";
import "./module2.css"; // CSS 파일 참조

export const BoxLeft = ({ leftBoxes }) => {
    return (
        <div className="box_left">
            {leftBoxes.map((box, index) => (
                <div className="box" key={index}>
                    <br />
                    {box.title && <a href="#">{box.title}</a>}
                    <h1>
                        {box.content
                            ? box.content.split("\n").map((line, i) => (
                                  <React.Fragment key={i}>
                                      {line}
                                      <br />
                                  </React.Fragment>
                              ))
                            : box.title}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export const TopBox = ({ data }) => {
    return (
        <div id="top_box">
            <br />
            <a>{data.category1}</a>
            <br />
            <a>{data.category2}</a>
            <br />
            <h1>
                {data.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </h1>
        </div>
    );
};

export const TopRight = ({ images }) => {
    return (
        <div className="top_right">
            {images.map((src, index) => (
                <img key={index} src={process.env.PUBLIC_URL + src} alt={`right${index + 1}`} />
            ))}
        </div>
    );
};