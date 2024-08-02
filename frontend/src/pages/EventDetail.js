import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Detail Event</h1>
      <p>Event id: {params.eventId}</p>
      <Link to="edit">Edit</Link>
      <br />
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
