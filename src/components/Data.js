const Data = [
  {
    exterior: (
      <video autoPlay loop muted className="w-100" style={{borderRadius:"30px",boxShadow:"grey 0px 0px 12px 0px",maxHeight:"60vh"}}>
        <source src={process.env.PUBLIC_URL + "/cars/15.webm"} />
      </video>
    ),
    interior: (
      <video autoPlay loop muted className="w-100" style={{borderRadius:"30px", boxShadow:"grey 0px 0px 12px 0px", maxHeight:"60vh"}}>
        <source src={process.env.PUBLIC_URL + "/cars/15.1.webm"} />
      </video>
    ),
  },
];
export default Data;