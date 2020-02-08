import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.song) {
      return <div>Select song</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {this.props.song.title}
          <br />
          Duration: {this.props.song.duration}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state = { selectedSong: { title: "" } }) => {
  console.log(state);
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
