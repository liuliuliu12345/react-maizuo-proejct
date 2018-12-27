// 一级路由的代码
import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './views/Home';
import City from './views/City';

class App extends React.Component{
  render() {
    return (
        <Router>
          <Switch>

            {/* 一个坑一个一级组件，要把这个组件和路径填进来 */}
            <Route path="/city" component={City}></Route>
            <Route path="/" component={Home}></Route>
            {/* / 是根路由，一开始就匹配上了Home，所以不会匹配上city，要放Home在后面，City才会匹配上
                Home 要写成根路由，Home的二级组件才会实现跳转
            */}

          </Switch>
        </Router>
    )
  }
}
export default App;
