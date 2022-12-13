import moment from "moment/moment";

const Clanok = ({ title, snippet, date, length }) => {
  return (
    <article className="okno">
      <h2>{title}</h2>
      <div className="clanok">
        <span>{moment(date).format("LL")}</span>
        <span>{length} minút čítania</span>
      </div>
      <h6 className="mt-2">{snippet}</h6>
    </article>
  );
};

export default Clanok;
