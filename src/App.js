import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './css/main.css';
import { HomePage, NotFoundPage } from './pages'
import { posts as patInfo } from './data/data'




class App extends Component {
  constructor() {
    super()

    this.state = {
      isAppReady: true,
      data: [
        ...patInfo
      ]
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    console.log('updated in app j')
  }

  render() {
    const { isAppReady, data } = this.state
    return (
      <BrowserRouter>
        <div 
          //  style={{
          //   backgroundColor: 'blue',
          //   height: '100vh',
          //   width: '100vw',
          // }}
        >
          <Switch>
            <Route exact path="/" render={() => {
              return <Redirect to="/home" push />;
            }} />

            <Route exact path="/home" render={() => {
              return <HomePage />;
            }} />

            {/* {data.map((project, index) => {
              return (
                <Route exact path={"/projects/" + project.slug} render={() => (
                  <div/>
                )} />
              )
            })} */}

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
