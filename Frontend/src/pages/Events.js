import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Nav from "../components/Nav";
import CardEvent from "../components/CardEvent";
import axios from "axios";

axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class Events extends Component {
  state = {
    events: [],
    isLoading: true
  };

  fetchEvents = () => {
    axios.get("/events/").then(res => {
      let data = res.data;
      this.setState({ events: data, isLoading: false });
    });
  };

  componentWillMount() {
    this.setState({ isLoading: true });
    this.fetchEvents();
  }

  render() {
    const events = [];

    for (const item of this.state.events) {
      events.push(
        <CardEvent
          key={item.id}
          bg={getRandomColor()}
          title={item.title}
          info={item.info}
          date={item.date}
          venue={item.venue}
          link={item.link}
          topics={item.topics}
        />
      );
    }

    return (
      <div style={{ overflowX: "hidden" }}>
        <Nav active="events"></Nav>
        <Container>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "2em",
              fontWeight: "700",
              textDecoration: "underline"
            }}
          >
            We have a history of conducting successful and useful events!
          </h1>
          <h1
            style={{
              fontWeight: "500",
              marginLeft: "2em"
            }}
          >
            Upcoming Events:
          </h1>

          <SubContainer>{events}</SubContainer>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  background-color: #f3f3f3;
  color: #707070;
  width: 100vw;
  height: fit-content;
  /* text-align: center; */
`;
const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2em;
`;
