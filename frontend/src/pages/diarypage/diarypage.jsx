import React from "react";
import Savedbutton from "../../component/savedButton/savedbutton";

import "./diarypage.scss";
import Reduxsave from "./reduxsave";

class DiaryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      head: "",
      text: "",
      data: [],
      okay: 0,
    };
  }

  handlevent = (e) => {
    e.preventDefault();
    const obj = {
      date: this.state.date,
      head: this.state.head,
      text: this.state.text,
    };
    this.setState({ data: [obj] });
    this.setState({ okay: 1 });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="diarypage">
        <div className="butt">
          <Savedbutton></Savedbutton>
          <button className="but" onClick={(e) => this.handlevent(e)}>
            ADD
          </button>
        </div>
        <div className="top">
          <div className="date">
            <input
              type="date"
              onChange={(e) => this.setState({ date: e.target.value })}
            ></input>
          </div>
          <div className="heady">
            <textarea
              maxLength="100"
              rows="1"
              cols="100"
              placeholder="Heading"
              onChange={(e) => this.setState({ head: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="textarea">
          <textarea
            maxLength="800"
            rows="30"
            cols="60"
            placeholder="Write here"
            onChange={(e) => this.setState({ text: e.target.value })}
          ></textarea>
        </div>
        {this.state.okay ? (
          <div>
            
            <Reduxsave data={this.state.data}></Reduxsave>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default DiaryPage;
