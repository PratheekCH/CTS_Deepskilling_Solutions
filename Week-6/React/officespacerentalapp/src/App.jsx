import officeImg from "./assets/office.jpg";

function App() {

  const offices = [
    {
      name: "Sky Tower",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office"
        width="500"
      />

      <h2>Available Office Spaces</h2>

      {
        offices.map((office,index)=>(
          <div
            key={index}
            style={{
              border:"1px solid black",
              margin:"15px",
              padding:"15px",
              width:"350px"
            }}
          >
            <h3>{office.name}</h3>

            <p
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{office.rent}
            </p>

            <p>
              Address : {office.address}
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default App;