import React,{Component} from 'react';
import {Link,Router} from 'react-router-dom';
import Users from './containers/Users';
import Pizza from './containers/Pizza';


class App extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to ="/">Users</Link> | <Link to = "/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}/>
                    <Route path="/pizza" component={}/>
                </div>
            </div>
        )
    }
}

