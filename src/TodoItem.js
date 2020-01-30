import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(){
        //改变父组件中的list数据
        const { deleteFunction, index } = this.props;
        deleteFunction(index);
    }
    render() {
        // 子组件通过this.props的属性，从父组件接收传递过来的值
        // 子组件想要和父组件通信，他要调用父组件传过来的方法，父组件的作用域一定要做一个变更
        // 父组件可以改变父组件的数据，子组件不能改变父组件的数据，必须要调用父组件的方法
        const { content } = this.props;
        return <li onClick={this.handleItemClick}>{content}</li>
    }
}

export default TodoItem;
