// 这个是一级组件的 TabBar
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';


class TabBar extends React.Component{
  render() {
    let Tabs = this.props.Tabs;
    return (
      <ul className="lyj-ul">
          {
            Tabs.map(item => {
              return (
                <li
                  className="lyj-li"
                  key={ item.key }>

                <NavLink to={ item.href }>
                  <i className={`iconfont ${ item.icon }`}></i>
                  <span>{ item.name }</span>
                </NavLink>

                </li>

              )
            })
          }
      </ul>
    )
  }
}

// 做一下处理、让传过来的数据是数组类型
TabBar.proptypes = {
  Tabs: PropTypes.array
}

export default TabBar;
