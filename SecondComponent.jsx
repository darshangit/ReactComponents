class Button extends React.Component {

   handleClick = () => {
        this.props.onIncrementer(this.props.incrementValue)
    };

    render() {
        return (
            <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }))
    }

    render() {
        return (
            <div>
                <Button incrementValue={1} onIncrementer={this.incrementCounter}></Button>
                <Button incrementValue={2} onIncrementer={this.incrementCounter}></Button>
                <Button incrementValue={5} onIncrementer={this.incrementCounter}></Button>
                <Button incrementValue={100} onIncrementer={this.incrementCounter}></Button>

                <Result counter={this.state.counter}></Result>
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode);