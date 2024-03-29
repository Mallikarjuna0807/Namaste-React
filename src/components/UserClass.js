import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0,
    }
  }

  render() {
    const {name} = this.props;
    const {count} = this.state;
    return (
      <div className="User-componet">
        <h1>count:{count}</h1>
        <button onClick={() => {
            this.setState({
              count : this.state.count + 1,
            })
        }}>Count Increac</button>
        <h1>Name:{name}</h1>
        <h2>Location:Atp</h2>
        <h3>Contact:@Malli0807</h3>
      </div>
    );
  }
}

export default UserInfo;
