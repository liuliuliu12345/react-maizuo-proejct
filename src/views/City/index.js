import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
// 调用仓库数据
import store from '../../store';

class City extends React.Component{
  constructor() {
    super();
    // 这里默认从仓库拿到数据，而仓库发生了变化，代码不会重复执行
    // store.getState() :拿到仓库的数据
    this.state= {
      myCity: store.getState().curCity
    }

    // subscribe：监听仓库的变化,
    // 变化了就重新赋值一次
    store.subscribe(() => {
      console.log('仓库发生了变化');
      this.setState({
        myCity:store.getState().curCity
      })

    })
  }

  // 点击修改城市。dispatch：修改仓库方法
  changeCity (cityName) {
    // 需要修改仓库 store数据，调用 store.dispatch('action', payload) 派发一个动作
    // 第一个参数是动作名字，好辨别是谁要改的数据
    // 第二个是要修改的数据
    store.dispatch({
      type: 'setCity',
      data:cityName
    })
  }

  render() {
    return (
      <Fragment>
          <Link to="/home">退出</Link>
          <h2>这里是城市= {this.state.myCity}</h2>
          {/* 修改城市调用方法 */}
          <button onClick={ this.changeCity.bind(this,'茂名')}>修改成茂名</button>
      </Fragment>
    )
  }
}
export default City;
