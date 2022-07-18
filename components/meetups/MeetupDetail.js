import classes from "./MeetupDetail.module.css";
const MeetupDetail = (props) => {
  console.log(props);
  return (
    <section className={classes.detail}>
      <h1>Meetup Details</h1>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
