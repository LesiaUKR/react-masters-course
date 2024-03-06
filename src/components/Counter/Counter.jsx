import React, { Component } from "react";
import "./Counter.css";
import Controls from "./Controls";

// Клас діє як функція, яка отримує props, але також реалізує приватний внутрішній стан.
// Обов'язково розширює базовий клас React.Component.
// Необхідно оголосити обов'язковий метод render(), який викликається за замовчуванням і повертає JSX-розмітку.

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

// щоб мати змогу управляти станом тих чи інших компонентів, не можемо використовувати
// функціональні компоненти, бо в них немає внутрішнього стану
// const Counter = () => (
//   <div className="Counter">
//     <span className="Counter__value">0</span>
//     <div className="Counter__controls">
//       <button type="button">+</button>
//       <button type="button">-</button>
//     </div>
//   </div>
// );

export default Counter;
