import React from 'react';

class TextDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedText: '',
    };
  }

  componentDidMount() {
    fetch('/get-decoded-text')
      .then(response => response.text())
      .then(decodedText => {
        this.setState({ decodedText });
      });
  }


  render() {
    return (
      <div>
        <style>
          {`
            .decoded-text {
                font-family: Consolas, Courier New, Monaco, monospace;
              font-size: 16px;
              width: 700px;
              height: 600px;
              overflow: auto;
              background-color: black;
              color: white;
              white-space: pre;
              line-height: 1.5;
              padding: 10px;
            }
          `}
        </style>
        {/* Render the decoded text here */}
        <div className="decoded-text">{this.state.decodedText}</div>
      </div>
    );
  }
}

export default TextDisplay;
