// 这文件用来 操作 store 里面的state (数据) 的纯函数

// 1.先定义初始数据
let defaultState = {
  curCity:'深圳'
}

// 2.暴露纯函数
/**
 *
 * @param {object} prevState 这次动作之前的数据(原数据，defaultState)
 * @param {object} action 这次动作描述对象
 */
export default function (prevState = defaultState,action) {
  // 做了一系列事情之后，最后要返回state
  console.log('这里是操作仓库数据的reducers', prevState,action);

  // 拿到当前的 prevState ,根据 action 的不同来操作 prevState.最后返回一个新的state

  // 得到动作之前的数据赋值给state，最后return 回去暴露数据
  let state =prevState;
  if( action.type === 'setCity'){
    state.curCity= action.data;
  }

  // 只要一 return仓库就会发生变化
  return state;
}
