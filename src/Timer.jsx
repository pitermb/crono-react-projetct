import React, { Component } from "react";
const colorArray = ["black", "red"];

class DeCron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duracao: null,
      liveTimeMin: -1,
      liveTimeSec: 0,
      color: colorArray[0],
      colorInt: 0,
      timeFormat: "00:00",
      flagTimer: false,
      duracao: this.props.duracao,
    };

    if (this.props.start) {
      this.startClock();
    }
  }

  toggleColor() {
    this.getTime = setInterval(() => {
      console.log("toggleColor =");
      let newIndice = this.state.colorInt + 1;
      let indice = newIndice % 2;
      console.log("indice color = " + indice);
      this.setState({
        color: colorArray[indice],
        colorInt: newIndice,
      });
    }, 1000);
  }

  startClock() {
    let timeFormater = this.timeFormater;
    this.getTime = setInterval(() => {
      if (this.state.liveTimeSec === 0) {
        let min = 0;
        console.log("min out 1 = " + min);
        if (this.state.liveTimeMin === -1) {
          min = this.state.duracao - 1;
          console.log("min if = " + min);
          console.log("min if = " + this.state.duracao);
        } else {
          if (this.state.liveTimeMin === 0) {
            // send parou relogio
            clearInterval(this.getTime);
            this.toggleColor();
            return;
          }
          min = this.state.liveTimeMin - 1;
          console.log("min else = " + this.state.liveTimeMin);
        }
        min = "" + min;
        console.log("min out 2 = " + min);
        this.setState({
          liveTimeMin: min,
          liveTimeSec: 59,
        });
      } else {
        this.setState({
          liveTimeSec: this.state.liveTimeSec - 1,
        });
      }
      console.log(" this.state.liveTimeMin = " + this.state.liveTimeMin);
      let timeFormat =
        timeFormater(this.state.liveTimeMin) +
        ":" +
        timeFormater(this.state.liveTimeSec);
      this.setState({
        timeFormat,
        flagTimer: true,
      });
    }, 1000);
  }

  timeFormater(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  render() {
    return (
      <div style={{ color: this.state.color }}> {this.state.timeFormat} </div>
    );
  }
}

export default DeCron;
