class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>  
                <button onClick={this._decreaseCount}>-1</button>
                <button onClick={this._increaseCount}>+1</button>
            </div>
        )
    }

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    _decreaseCount = () => {
        this.setState({ count: this.state.count - 1 })
    }
}

const myElement = <Counter />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);