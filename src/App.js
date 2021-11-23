import Propss from "./Propss";

const App = () => {
  const data = [
    {
      name: "abc",
      school: "abc school"
    },
    {
      name: "pqr",
      school: "pqr school"
    }
  ];

  return (
    <div>
      <Propss name={data[0].name} school={data[0].school} />
      <Propss name={data[1].name} school={data[1].school} />
    </div>
  );
};

export default App;
