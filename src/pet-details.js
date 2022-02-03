import { useParams } from "react-router-dom";

const PetDetails = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default PetDetails;
