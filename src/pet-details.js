import { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Carousel from "./carousel";
import ErrorBoundary from "./error-boundary";

class PetDetails extends Component {
  state = { loading: true, redirect: false };

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
    if (json.pets.length === 0) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    if (!animal) {
      return (
        <div className="details">
          <Carousel images={images} />
          <div className="pet-details">
            <h1>Sorry, this pet was not found.</h1>
            <h2>Redirecting in 5s...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="details">
          <Carousel images={images} />
          <div className="pet-details">
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }
}

const PetDetailsWithRouter = withRouter(PetDetails);

export default function PetDetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PetDetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
