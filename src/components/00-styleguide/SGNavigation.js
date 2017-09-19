import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router-dom';


class SGNavigation extends Component {
  render() {

    var componentTypes = [
      {
        path: '/Typography',
        // component: (title)=><Typography ttile={title} />,
        title: 'Typography',
        description: 'This is the description'
      },
      {
        path: '/Input',
        title: 'Input',
      },
      
    ]

    return (

       <ul>

       {componentTypes.map(function(componentType, index){
              return (
                <Link to={componentType.path}>{componentType.title}</Link>
              )
            })}
      </ul>
    );
  }
}

export default SGNavigation;
