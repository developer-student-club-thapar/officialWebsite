import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Nav from '../components/Nav';
import axios from 'axios';

axios.defaults.baseURL = 'https://dsctiet.pythonanywhere.com/api';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class Achievments extends Component {
  state = {
    achievements: [],
    isLoading: true,
  };

  fetchAchievements = () => {
    axios.get('/achievements/').then(res => {
      let data = res.data;
      this.setState({ achievements: data, isLoading: false });
    });
  };

  componentWillMount() {
    this.setState({ isLoading: true });
    this.fetchAchievements();
  }

  /* renderAchievements = () => {
        this.state.achievements.map((item, index) => {
            console.log(item);
            return (
                
            );
        })
    } */

  render() {
    const achievements = [];

    for (const item of this.state.achievements) {
      achievements.push(
        <Card
          bg={getRandomColor()}
          heading={item.title}
          sub_heading={item.sub_title}
          content={item.content}
        />,
      );
    }

    return (
      <div>
        <Nav active="achievments"></Nav>
        <Container>
          <h1 style={{ textAlign: 'center', marginBottom: '2em' }}>
            We are proud of our achievments
          </h1>
          <SubContainer>{achievements}</SubContainer>
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
`;
