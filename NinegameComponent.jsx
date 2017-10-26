const Stars = (props) => {
    // const numberOfStars = 1 + Math.floor(Math.random() * 9);
    let stars = []

    // for(let i=0;i<numberOfStars;i++){
    // 	stars.push(<i ket={i} className="fa fa-star"></i>)
    // }

    return (
        <div className="col-5">
            {_.range(props.numberOfStars).map((number, i) =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div classname="col-5">
            {props.selectedNumbers.map((number, i) =>
                <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
            )}
        </div>
    );
}

const Numbers = (props) => {
    const arrayOfNumber = _.range(1, 10);

    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1, 10)

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }))
    }
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={this.state.randomNumberOfStars} />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers}
                        unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}
                    selectNumber={this.selectNumber} />
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);