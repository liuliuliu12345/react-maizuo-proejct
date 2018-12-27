
// 这里是一级组件Home，个人中心，影院，电影页的二级组件，都是在这里跳转
import React,{Fragment} from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import TabBar from '../../components/TabBar';
// 要把二级组件引进来
import HomeFilm from './HomeFilm';
import HomeCinema from './HomeCinema';
import HomeCenter from './HomeCenter';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // 传递到二级组件的参数
      myTabs:[
        {key:'films', href:'/films', icon:'icon-dianying', name:'电影'},
        {key:'cinemas', href:'/cinemas', icon:'icon-yingyuana', name:'影院'},
        {key:'center', href:'/center', icon:'icon-wode', name:'我的'}
      ]
    }
  }

  render() {
    return (
      <Fragment>
        {/* 上面会跳转的二级组件 */}
          <Switch>
              <Route path="/films" component={ HomeFilm }></Route>
              <Route path="/cinemas" component={ HomeCinema }></Route>
              <Route path="/center" component={ HomeCenter }></Route>
              <Redirect to='/films'></Redirect>{/* 重定向 */}
          </Switch>

        {/* 底部不会跳转的一级组件，数据传递到二级组件 */}
          <TabBar Tabs={this.state.myTabs}></TabBar>
      </Fragment>
    )
  }
}
export default Home;
