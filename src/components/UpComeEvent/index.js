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

const UpComeEvent = (props) => {
  const { item } = props;
  console.log(item);
  const updateDate = new Date(item.date);

  const eventMonth = months[updateDate.getMonth()];
  const eventDate = updateDate.getDate();
  const eventYear = updateDate.getFullYear();
  const distance = Math.floor(item.distanceKm / 1000);
  return (
    <li className="upcome-event-card">
      <img
        loading="lazy"
        className="event-image"
        src={item.imgUrl}
        alt={`${item.cityName}`}
      />

      <div className="upcome-event-row-container">
        <p>{`${eventMonth}`}</p>

        <p>{`\u00A0${eventDate}, `}</p>
        <p>{`\u00A0${eventYear}`}</p>
      </div>
      <div className="upcome-event-details-container">
        <h6 className="upcome-event-name">{item.eventName}</h6>
        <div className="upcome-event-location-container">
          <div>
            <FaLocationDot />
            <p>{item.cityName}</p>
          </div>
          <div>
            <p>{`${item.weather} \u00A0| `}</p>

            <p>{`\u00A0 ${distance} Km `}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UpComeEvent;
