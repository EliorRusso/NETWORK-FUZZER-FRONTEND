 import React from 'react';

// class TextDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       decodedText: '',
//       keywordsToHighlight: ['Corrupted', 'Corruption Precentage'],
//     };
//   }

//   componentDidMount() {
//     fetch('/get-decoded-text')
//       .then(response => response.text())
//       .then(decodedText => {
//         this.setState({ decodedText });
//       });
//   }

//   highlightKeywords = text => {
//     const { keywordsToHighlight } = this.state;

//     let highlightedText = text;
//     keywordsToHighlight.forEach(keyword => {
//       highlightedText = highlightedText.replace(
//         new RegExp(`(${keyword})`, 'g'),
//         `<span style='color: red;'>$1</span>`
//       );
//     });

//     return highlightedText;
//   };

//   render() {
//     const { decodedText } = this.state;
//     const highlightedText = this.highlightKeywords(decodedText);

//     return (
//       <div>
//         <style>
//           {`
//             .decoded-text {
//                 font-family: Consolas, Courier New, Monaco, monospace;
//               font-size: 16px;
//               width: 700px;
//               height: 600px;
//               margin-left:565px;
//               overflow: auto;
//               background-color: black;
//               color: white;
//               white-space: pre;
//               line-height: 1.5;
//               padding: 10px;
//             }
//           `}
//         </style>
//         {/* Render the decoded text here */}
//         <div
//           className="decoded-text"
//           dangerouslySetInnerHTML={{ __html: highlightedText }}
//         />
//       </div>
//     );
//   }
// }

// export default TextDisplay;
class TextDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedText: '',
      decodedText2: '',
      keywordsToHighlight: ['Corrupted', 'Corruption Precentage'],
      keywordsToHighlight2: ['Shouldnt Pass'],
      keywordsToHighlight3: ['Identification']
    };
  }

  componentDidMount() {
    fetch('/get-decoded-text')
      .then(response => response.text())
      .then(decodedText => {
        this.setState({ decodedText });
      });
    fetch('/get-decoded-text2')
      .then(response => response.text())
      .then(decodedText2 => {
        this.setState({ decodedText2 });
      });
  }

  highlightKeywords = text => {
    const { keywordsToHighlight } = this.state;

    let highlightedText = text;
    keywordsToHighlight.forEach(keyword => {
      highlightedText = highlightedText.replace(
        new RegExp(`(${keyword})`, 'g'),
        `<span style='color: red;'>$1</span>`
      );
    });
    const { keywordsToHighlight3 } = this.state;
    keywordsToHighlight3.forEach(keyword => {
      highlightedText = highlightedText.replace(
        new RegExp(`(${keyword})`, 'g'),
        `<span style='color: blue;'>$1</span>`
      );
    });

    return highlightedText;
  };
  highlightKeywords2 = text => {
    const { keywordsToHighlight2 } = this.state;

    let highlightedText2 = text;
    keywordsToHighlight2.forEach(keyword => {
      highlightedText2 = highlightedText2.replace(
        new RegExp(`(${keyword})`, 'g'),
        `<span style='color: green;'>$1</span>`
      );
    });
    const { keywordsToHighlight3 } = this.state;
    keywordsToHighlight3.forEach(keyword => {
      highlightedText2 = highlightedText2.replace(
        new RegExp(`(${keyword})`, 'g'),
        `<span style='color: blue;'>$1</span>`
      );
    });

    return highlightedText2;
  };

  render() {
    const { decodedText, decodedText2 } = this.state;
    const highlightedText = this.highlightKeywords(decodedText);
    const highlightedText2 = this.highlightKeywords2(decodedText2);

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
            .text-boxes-container {
              display: flex;
              margin-left:200px;
            }
          `}
        </style>
        {/* Render the decoded text here */}
        <div className="text-boxes-container">
          <div
            className="decoded-text"
            dangerouslySetInnerHTML={{ __html: highlightedText}}
          />
          <div
            className="decoded-text"
            dangerouslySetInnerHTML={{ __html: highlightedText2}}
            
          />
        </div>
      </div>
    );
  }
}

export default TextDisplay;
// class TextDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       decodedText: '',
//     };
//   }

//   componentDidMount() {
//     fetch('/get-decoded-text')
//       .then(response => response.text())
//       .then(decodedText => {
//         this.setState({ decodedText });
//       });
//   }


//   render() {
//     return (
//       <div>
//         <style>
//           {`
//             .decoded-text {
//                 font-family: Consolas, Courier New, Monaco, monospace;
//               font-size: 16px;
//               width: 700px;
//               height: 600px;
//               margin-left:565px;
//               overflow: auto;
//               background-color: black;
//               color: white;
//               white-space: pre;
//               line-height: 1.5;
//               padding: 10px;
//             }
//           `}
//         </style>
//         {/* Render the decoded text here */}
//         <div className="decoded-text">{this.state.decodedText}</div>
//       </div>
//     );
//   }
// }

// export default TextDisplay;
