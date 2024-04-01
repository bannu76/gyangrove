import { FaLocationDot } from "react-icons/fa6";
import "./index.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventItem = (props) => {
  const { item } = props;

  const updateDate = new Date(item.date);

  const eventMonth = months[updateDate.getMonth()];
  const eventDate = updateDate.getDate();
  const eventYear = updateDate.getFullYear();
  const distance = Math.floor(item.distanceKm / 1000);

  return (
    <li
      className="event-card"
      style={{
        backgroundImage: `url(${item.imgUrl})`,
      }}
    >
      <div className="event-container">
        <div className="event-details-container">
          <p className="event-name">{item.eventName}</p>
          <div className="event-row-container">
            <p>{`${eventMonth}\u00A0 `}</p>

            <p className="date">
              {eventDate} <span>, </span>
            </p>
            <p>{eventYear}</p>
          </div>
        </div>
        <div className="event-details-container">
          <div className="event-row-container">
            <FaLocationDot />
            <p>{`\u00A0${item.cityName}`}</p>
          </div>
          <div className="event-row-container">
            <p>{`${item.weather} \u00A0| `}</p>

            <p>{`\u00A0 ${distance} Km `}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
