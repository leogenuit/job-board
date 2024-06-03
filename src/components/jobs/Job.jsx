import "./job.css";
const Job = ({ border, title, contractType, country, city }) => {
  return (
    <div className="padding size border" style={{ border: border }}>
      <h2>{title}</h2>
      <div className="padding-top">
        <span>{contractType}</span>-<span>{country}</span>-<span>{city}</span>
      </div>
    </div>
  );
};
export default Job;
