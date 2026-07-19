import CohortDetails from "./components/CohortDetails";

function App() {

  const cohorts = [
    {
      name: "INTADMDF10 - .NET FSD",
      startedOn: "22-Feb-2022",
      status: "Scheduled",
      coach: "Ashwin",
      trainer: "Jijo Jose"
    },
    {
      name: "ADM21JF014 - Java FSD",
      startedOn: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Bisa Smith"
    },
    {
      name: "CDBJF21025 - Java FSD",
      startedOn: "24-Dec-2021",
      status: "Ongoing",
      coach: "Ashima",
      trainer: "John Doe"
    }
  ];

  return (
    <>
      <h1>Cohorts Details</h1>

      {
        cohorts.map((cohort,index)=>
        (
          <CohortDetails key={index} cohort={cohort}/>
        ))
      }

    </>
  );
}

export default App;