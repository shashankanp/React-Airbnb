import React from "react";

export default function Card(props) {
  let BadgeText;
  if (props.item.openSpots === 0) BadgeText = "SOLD OUT";
  else if (props.item.location === "Online") BadgeText = "ONLINE";
  return (
    <div className="card">
      {BadgeText && <div className="card--badge">{BadgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
