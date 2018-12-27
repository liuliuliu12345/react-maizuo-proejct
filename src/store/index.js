// 创建仓库的js 文件，，最后还要暴露出去

// 1.引入 redux 里面的 createStore: 创建仓库的方法,
import {createStore} from 'redux';
import reducers from './reducers';

// 2.调用 createStore 方法返回一个仓库的实例 对象，第一个参数需要传递reducers
const store = createStore(reducers);

// 3.暴露这个仓库的实例对象 谁调用这仓库，就会得到仓库所以数据
export default store;
