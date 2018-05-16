import React from 'react';

class Inputer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleOk(e.target.content.value);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content" />
        <button>提交</button>
      </form >
    );
  }
}
export default Inputer;