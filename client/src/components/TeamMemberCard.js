import React from "react";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./styles/TeamMemberCardStyles";
import { StyledPaperTeam, StyledDiv } from "../toggle/StyledComponents";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const TeamMemberCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <StyledPaperTeam className={classes.paper} elevation={3}>
        <StyledDiv style={{ paddingBottom: "100px" }}>
          <h5 className={classes.name}>{item.name}</h5>
          <h6 className={classes.role}>
            {item.role ? item.role : "Developer"}
          </h6>
          <div className={classes.linkContainer}>
            <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto: ${item.email}`}
                  style={{ paddingRight: "8px" }}
                >
                  <FontAwesomeIcon icon={faEnvelopeSquare} color="grey" size="2x"/>
                </a>
              {
                item.linkedin_url && (<a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.linkedin_url}
                  style={{ paddingRight: "8px" }}
                >
                  <i class="fab fa-linkedin fa-2x" style={{ color: "grey" }} />
                </a>)
                }
              
              {
                item.github_url && ( <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.github_url}
                  style={{ paddingRight: "8px" }}
                >
                  <i
                    className="fab fa-github-square fa-2x"
                    style={{ color: "grey" }}
                  />
                </a>)
              }
             {
               item.medium_url && ( 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.medium_url}
                style={{ paddingRight: "8px" }}
              >
                <i class="fab fa-medium fa-2x" style={{ color: "grey" }} />
              </a>
               )
             }
             {
               item.twitter_url && (
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
               )
             }
             {/* {
               (item.linkedin_url || item.medium_url || item.twitter_url || item.github_url) == false ?  <span>l</span> : null
             } */}
            </span>
          </div>
          <div style={{ paddingBottom: "100px" }}>
            <Avatar
              alt={item.name}
              src={"https://media.dsctiet.tech"+item.image}
              className={classes.large}
              style={{
                paddingBottom: "0px",
                color: "#ffffff",
                backgroundColor: stringToColor(item.name)
              }}
            />
          </div>
        </StyledDiv>
      </StyledPaperTeam>
    </>
  );
};

export default TeamMemberCard;
