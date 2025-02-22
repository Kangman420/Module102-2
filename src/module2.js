import React from "react";
import "./module2.css"; // CSS 파일 참조

const IconBox = ({ imgSrc, text }) => {
    return (
        <div className="Area3">
            <h1 className="center"><img src={imgSrc} alt="icon" /></h1>
            <h1 className="iconcenter">{text.split("\n").map((line, index) => <div key={index}>{line}</div>)}</h1>
            <br />......................................................................
        </div>
    );
};

const IndexIconBox = ({ iconData }) => {
    return (
        <div className="icon_box">
            {iconData.map((icon) => (
                <IconBox key={icon.id} imgSrc={icon.imgSrc} text={icon.text} />
            ))}
        </div>
    );
};

export { IndexIconBox, IconBox };