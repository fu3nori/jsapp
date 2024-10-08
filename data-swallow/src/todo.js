import React, { Component } from 'react';

// Todoクラスを定義し、Componentを継承します。
export default class Todo extends Component {

    // コンストラクタを定義します。コンポーネントの初期状態を設定します。
    constructor(props) {
        super(props); // 親クラスのコンストラクタを呼び出します。
        this.state = {
            todos: [], // todosの初期値を空の配列に設定。
            name: ''   // nameの初期値を空文字に設定。
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name],
            name: '' // テキストを登録後、入力フィールドをクリア
        });
    }

    removeTodo = (index) => {
        const { todos } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    // renderメソッドを定義し、コンポーネントがどのように表示されるかを指定します。
    render() {
        const { todos, name } = this.state; // stateからtodosとnameを取り出します。

        return (
            // JSXを返します。
            <div>
                {/* テキスト入力フィールド */}
                <input type="text" value={name} onChange={this.onInput} autoComplete="off" />
                {/* 登録ボタン */}
                <button onClick={this.addTodo}>登録</button>
                {/* todoリストを表示。todos配列をマップして各項目をliとして表示 */}
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => this.removeTodo(index)}>削除</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}