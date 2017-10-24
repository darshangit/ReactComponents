const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    )
}

class Form extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event : form Submit', this.userNameInput.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    ref={(input) => this.userNameInput = input}
                    placeholder="Github Username" required />
                <button type="submit">Add Card</button>
            </form>
        )
    }
}

class App extends React.Component {

    state = {
        cards: [
            {
                name: "Darshan Satya",
                avatar_url: "https://avatars3.githubusercontent.com/u/25262314?v=4",
                company: "Facebook"
            }
        ]
    };

    render() {
        return (
            <div>
                <Form />
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode);