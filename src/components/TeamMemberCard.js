import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import { useStyles } from "./styles/TeamMemberCardStyles";

const TeamMemberCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <div style={{ paddingBottom: "100px" }}>
          <h5 className={classes.name}>
            {item.name.length > 16 ? item.name.slice(0, 16) : item.name}
          </h5>
          <h6 className={classes.role}>
            {item.role ? item.role : "Developer"}
          </h6>
          <div className={classes.linkContainer}>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.linkedin_url}
                style={{ paddingRight: "8px" }}
              >
                <i class="fab fa-linkedin fa-2x" style={{ color: "grey" }} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.github_url}
                style={{ paddingRight: "8px" }}
              >
                <i
                  class="fab fa-github-square fa-2x"
                  style={{ color: "grey" }}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.medium_url}
                style={{ paddingRight: "8px" }}
              >
                <i class="fab fa-medium fa-2x" style={{ color: "grey" }} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.twitter_url}
                style={{ paddingRight: "8px" }}
              >
                <i
                  class="fab fa-twitter-square fa-2x"
                  style={{ color: "grey" }}
                />
              </a>
            </span>
          </div>
          <div style={{ paddingBottom: "100px" }}>
            <Avatar
              alt={item.name}
              src={item.image}
              className={classes.large}
              style={{ paddingBottom: "0px" }}
            />
          </div>
        </div>
      </Paper>
    </>
  );
};

export default TeamMemberCard;
