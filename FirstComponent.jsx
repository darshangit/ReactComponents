// const Button = (props) => {
// return (
// <button>5</button>
// );
// };

class Button extends React.Component {

    state = { counter: 0 };
    // constructor(props){
    // super(props);
    // this.state = { counter: 0 };
    // }
    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.counter}</button>
        );
    }
}

ReactDOM.render(<Button />, mountNode);