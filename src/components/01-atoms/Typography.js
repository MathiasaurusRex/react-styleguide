import React, { Component } from 'react';

class Typography extends Component {

  constructor(props){
    super();

  }
  render() {
    return (
      <div className="temp">
        <h1 className="h1">{this.props.title}</h1>
        <h2 className="h2">Heading Large</h2>
        <h3 className="h3">Heading Normal</h3>
        <h4 className="h4">Heading Small</h4>
        <h5 className="h5">Heading Extra Small</h5>

        <p>This is a paragraph tag</p>

        <ul>
          <lh>Unordered List Header</lh>
          <li>List Item</li>
        </ul>

        <ol>
          <lh>Ordered List Header</lh>
          <li>List Item</li>
        </ol>
      </div>
    );
  }
}

export default Typography;
