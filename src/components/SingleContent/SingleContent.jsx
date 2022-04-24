import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import { img_300, unavailable } from "../../configs/configs";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <Badge style={{
          zIndex:"0"
      }} badgeContent={vote_average} color={vote_average>6? "primary":"secondary"}>
       
      </Badge>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="sunTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="sunTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
