import { FaArrowRight } from "react-icons/fa6";
import Loader from "react-loader-spinner";

import Header from "../Header";
import "./index.css";
import { useEffect, useState } from "react";
import EventItem from "../EventItem";
import InfiniteScroll from "react-infinite-scroll-component";
import UpComeEvent from "../UpComeEvent";
const Home = () => {
  const [page, setPage] = useState(1); // upcoming event's pages
  const [load, setLoad] = useState(true); // flag for upcoming events networkApi call
  const [fetchError, setFetchError] = useState(""); // network call error
  const [upcomeTotalResults, setUpcomeTotalResults] = useState(0); // total upcoming events length for infinite scrolling
  const [upcomingLoader, setUpcomingLoader] = useState(true);
  const [recommendList, setRecommendList] = useState([]); // Recommend Events List
  const [upcomingList, setUpcomingList] = useState([]); // Upcomming Events list

  // Api call for recommend events

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getData = async () => {
    const url =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const response = await fetch(url, options);
    console.log(response);

    if (response.ok) {
      const { events } = await response.json();
      setLoad(false);
      setRecommendList(events);
    } else {
      setFetchError("Network Error");
    }
  };

  // Api call for Upcoming events list
  const getUpcomeEventData = async () => {
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
    const response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      const { events } = await response.json();

      setUpcomingList((prev) => prev.concat(events));
      setUpcomeTotalResults(events.length);
      setUpcomingLoader(false);
    } else {
      setFetchError("Network Error");
    }
  };

  // loader
  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  );

  // Initial Api call when site is load
  let shouldLog = true; //In React 18 , useEffect render twice with empty dependency, so we use temporary variable to control it

  useEffect(() => {
    if (shouldLog) {
      shouldLog = false;
      document.title = "City Celebratitons";
      console.log("hello");
      getData();
    }
  }, []);

  useEffect(() => {
    getUpcomeEventData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setUpcomingLoader(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // Rendering Recommed List
  const renderRecommendList = () => {
    return (
      <div>
        <div className="events-heading-container">
          <div className="row-container">
            <p style={{ marginRight: "4px" }}>Recommended shows</p>
            <FaArrowRight />
          </div>
          <div>
            <button className="see-all-button">see all</button>
          </div>
        </div>

        <ul className="scroll-container">
          {recommendList.map((item) => (
            <EventItem key={item.cityName} item={item} />
          ))}
        </ul>
      </div>
    );
  };

  // api call to fetch pages of upcoming events for infinite scroll
  const fetchMoreData = async () => {
    getUpcomeEventData();
  };

  // Rendering Upcoming Evnts List
  const renderUpcomingEvents = () => {
    console.log(upcomingList);
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

        <ul className="upcome-container">
          {upcomingList.map((item) => (
            <UpComeEvent key={upcomingList.indexOf(item)} item={item} />
          ))}
        </ul>
      </div>
    );
  };

  // Rendering landing page

  return (
    <div className="home">
      <Header />
      <div className="home-container-mobile">
        <div className="heading-para-container">
          <h1 className="home-heading">
            Discover Exciting Events Happening Near You <br /> Stay Tuned for
            Updates!
          </h1>
          <p className="para">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac
          </p>
        </div>
      </div>
      <div className="recommend-events-container">
        {load ? renderLoader() : renderRecommendList()}
        {renderUpcomingEvents()}
        {renderLoader()}
      </div>
    </div>
  );
};

export default Home;
