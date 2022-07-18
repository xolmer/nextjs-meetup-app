import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="Next.js Meetup" content={`${props.meetupData.title} is a meetup for Nextjs developers`} />
      </Head>
      <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://xolmer:SoruicW3Ajk7w7qP@meetup.12cobid.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // const meetupId = context.query.id;
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://xolmer:SoruicW3Ajk7w7qP@meetup.12cobid.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const collection = db.collection("meetups");
  const selectedMeetup = await collection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
