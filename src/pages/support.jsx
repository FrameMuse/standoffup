import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  name: state.name,
});

class Support extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(mapStateToProps)(Support);