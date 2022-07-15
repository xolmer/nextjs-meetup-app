import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "Meetup 1",
    description: "Meetup 1 description",
    date: "2020-01-01",
    location: "Meetup 1 location",
    image: "https://picsum.photos/900/354",
    address: "Meetup 1 address",
  },
  {
    id: 2,
    title: "Meetup 2",
    description: "Meetup 2 description",
    date: "2020-01-01",
    location: "Meetup 2 location",
    image: "https://picsum.photos/800/353",
    address: "Meetup 2 address",
  },
  {
    id: 3,
    title: "Meetup 3",
    description: "Meetup 3 description",
    date: "2020-01-01",
    location: "Meetup 3 location",
    image: "https://picsum.photos/800/355",
    address: "Meetup 3 address",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
