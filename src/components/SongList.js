import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.selectSong + "");
    const songList = this.props.songs.map((s, i) => {
      return (
        <div className="item" key={i}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={e => this.props.selectSong(s)}
            >
              Select
            </button>
          </div>
          <div className="content">{s.title}</div>
        </div>
      );
    });
    return <div className="ui divided list">{songList}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    songs: state.songs
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, { selectSong })(SongList);
