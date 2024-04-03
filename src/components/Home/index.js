import { FaArrowRight } from "react-icons/fa6";
import Loader from "react-loader-spinner";

import Header from "../Header";
import "./index.css";
import { useEffect, useState } from "react";
import EventItem from "../EventItem";
import InfiniteScroll from "react-infinite-scroll-component";
import UpComeEvent from "../UpComeEvent";
const Home = () => {
  const [recommendLoad, setRecommendLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [upcomeLoad, setUpcomeLoad] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [upcomeTotalResults, setUpcomeTotalResults] = useState(0);

  const [recommendList, setRecommendList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);

  const getData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const response = await fetch(url, options);

    if (response.ok) {
      const { events } = await response.json();

      setRecommendList(events);
    } else {
      setFetchError("Network Error");
    }
  };

  const getUpcomeEventData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
    const response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      const { events } = await response.json();

      setUpcomingList((prev) => [...prev, ...events]);
      setUpcomeTotalResults(events.length);
      setPage(page + 1);
    } else {
      setFetchError("Network Error");
    }
  };
  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  );

  useEffect(() => {
    getData();
    getUpcomeEventData();
  }, []);

  const renderRecommendList = () => {
    console.log(upcomingList);

    return (
      <ul className="scroll-container">
        {recommendList.map((item) => (
          <EventItem key={item.cityName} item={item} />
        ))}
      </ul>
    );
  };

  const fetchMoreData = () => {
    console.log(page);
    getUpcomeEventData();
  };

  const renderUpcomingEvents = () => {
    return (
      <div>
        <div className="upcome-heading-container">
          <div className="row-container">
            <p style={{ marginRight: "4px" }}>Upcoming events</p>
            <FaArrowRight />
          </div>
          <div>
            <button className="upcome-see-all-button">see all</button>
          </div>
        </div>

        <InfiniteScroll
          dataLength={upcomingList.length}
          next={fetchMoreData}
          hasMore={upcomingList.length !== upcomeTotalResults}
          loader={renderLoader()}
          className="upcome-container"
        >
          {upcomingList.map((item) => (
            <UpComeEvent key={upcomingList.indexOf(item)} item={item} />
          ))}
        </InfiniteScroll>
      </div>
    );
  };

  return (
    <div className="home">
      <Header />
      <div className="home-container-mobile">
        <div className="heading-para-container">
          <h1 className="home-heading">
            Discover Exciting Events Happening Near You <br /> Stay Tuned for
            Updates!
          </h1>
          <p className="para-mobile">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac
          </p>
        </div>
        <div className="recommend-events-container">
          <div className="events-heading-container">
            <div className="row-container">
              <p style={{ marginRight: "4px" }}>Recommended shows</p>
              <FaArrowRight />
            </div>
            <div>
              <button className="see-all-button">see all</button>
            </div>
          </div>
          {renderRecommendList()}
          {renderUpcomingEvents()}
        </div>
      </div>
    </div>
  );
};

export default Home;
