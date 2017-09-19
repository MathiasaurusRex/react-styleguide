import React, { Component } from 'react';

import { Router, Route, browserHistory } from  'react-router-dom';

import Typography from '../01-atoms/Typography';
import Input from '../01-atoms/Input';

class SGStage extends Component {

  //(title)=><Typography ttile={title} />, and use render instead of component, so it would be render={route.component( route.title) }
  //https://reacttraining.com/react-router/web/api/Route/render-func
  render() {
    var componentTypes = [
      {
        path: '/Typography',
        component: Typography,
        // component: (title)=><Typography ttile={title} />,
        title: 'This is the typography component',
        description: 'This is the description'
      },
      {
        path: '/Input',
        component: Input
      },
      
    ]

    return (
      <div className="styleguide-stage">

            {componentTypes.map(function(componentType, index){
              return (
                <Route key={ index } exact path={componentType.path} component={componentType.component} title={componentType.title}/> 
              )
            })}
      </div>
    );
  }
}

export default SGStage;
