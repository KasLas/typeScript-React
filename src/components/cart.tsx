import React, { Component, createRef } from 'react';
import CartCss from "./cart.module.css";
import { FiShoppingCart } from "react-icons/fi"
import { AppStateContext } from "./app-state"

interface Props { }

interface State {
    isOpen: boolean;
}

class cart extends Component<Props, State> {
    #containerRef: React.RefObject<HTMLDivElement>
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.#containerRef = createRef();
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    }

    handleOutsideClick = (e: MouseEvent) => {
        if (this.#containerRef.current && !this.#containerRef.current.contains(e.target as Node)) {

            this.setState({ isOpen: false })
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutsideClick)
    }

    componentWillUmount() {
        document.addEventListener("mousedown", this.handleOutsideClick)
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                return (
                    <div className={CartCss.cartContainer} ref={this.#containerRef}>
                        <button
                            className={CartCss.button}
                            type="button"
                            onClick={this.handleClick}
                        >
                            <FiShoppingCart />
                            <span>{state.cart.items.reduce((prev, next) => prev + next.quantity, 0)} pizza(s)</span>
                        </button>
                        <div
                            className={CartCss.cartDropDown}
                            style={{
                                display: this.state.isOpen ? "block" : "none"
                            }}
                        >
                            <ul>
                                {state.cart.items.map(item => {
                                    return (<li key={item.id}>
                                        {item.name} &times; {item.quantity}
                                    </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }}</AppStateContext.Consumer>
        );
    }
}

export default cart;