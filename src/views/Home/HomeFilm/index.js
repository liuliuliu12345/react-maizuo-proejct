//这个是一级组件的二级组件，（在一级组件跳转的二级组件）
import React,{ Fragment} from 'react';
import {Link} from 'react-router-dom';

import store from '../../../store';
/**
 * 1.要用到仓库的数据，就要引入仓库
 * 2.在构造函数中，调用store.getState() 方法，能返回仓库的state 数据
 */
  store.getState();
  console.log(store.getState());

class HomeFilm extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      // 提取仓库数据赋值给本地curCity
      curCity: store.getState().curCity
    }
  }

  render() {
    return (
      <Fragment>
        <p><Link to="/city">当前城市: {this.state.curCity}</Link></p>
        <h2>我是电影页</h2>
      </Fragment>

    )
  }
}
export default HomeFilm;
