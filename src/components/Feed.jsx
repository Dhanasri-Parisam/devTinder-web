import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {

  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const fetchFeed = async () => {
    if(feed) return;
    try{
      const res = await axios.get(BASE_URL + "/getAllData", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    feed && (<div className = "flex justify-center items-center h-full my-14">
      <UserCard user = {feed[0]} />
    </div> )
  )
}

export default Feed;