import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Nextjs Meetup</title>
        <meta name="Next.js Meetup" content="Nextjs Meetup is a meetup for Nextjs developers" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export async function getServerSideProps(contex) {
//   // const req = context.req;
//   // const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from MongoDB
  const client = await MongoClient.connect("mongodb+srv://xolmer:SoruicW3Ajk7w7qP@meetup.12cobid.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
