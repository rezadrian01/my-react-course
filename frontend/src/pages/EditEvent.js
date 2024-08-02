import { Link, useParams } from "react-router-dom";

export default function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h1>Edit Event Page</h1>
      <p>Event id: {params.eventId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
