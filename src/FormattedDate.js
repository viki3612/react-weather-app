import React from "react";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[props.date.getDay()];
  //let hours = props.date.getHours();
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  //if (hours < 10) {
  // hours = `0${hours}`;
  //}
  //let minutes = props.date.getMinutes();
  //if (minutes < 10) {
  // minutes = `0${minutes}`;
  //}
  return (
    <div>
      {date} {month} | {day}
    </div>
  );
}
