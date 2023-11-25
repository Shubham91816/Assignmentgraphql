import "./App.css";
import { gql, useQuery } from "@apollo/client";

const SPACEX_QUERY = gql`
  query LaunchesPast {
    launchesPast {
      mission_name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(SPACEX_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>{error.message}</p>;
  console.log(data);

  return (
    <div>
      <h1>SpaceX Launches</h1>
    </div>
  );
}

export default App;
