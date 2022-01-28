const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>Meet {name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;
