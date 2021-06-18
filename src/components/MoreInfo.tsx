import React from "react";
import { useHistory, useParams } from "react-router";

export default function MoreInfo() {
  const history = useHistory();
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <div>
      <div>It will a part with more information {movieId}</div>
      <button onClick={() => history.push("/home")}>
        Return to the home page
      </button>
      <div></div>
    </div>
  );
}
