import React from "react";

//we are creating a new type called 'ClockState' that houses a single property of 'time', which has an assigned datatype of Date (Date is a type that is built into TypeScript, just like strings, numbers, booleans, unions, tuples, etc). Our Type Alias of ClockState now houses the state of our application, but we now need to pass it into our Clock component so it has access to it.

type ClockState = {
  time: Date;
};

type AcceptedProps ={
  testProp: string,
  optionalProp?: string
}

class Clock extends React.Component<AcceptedProps, ClockState> {
  constructor(props: AcceptedProps) {
    super(props)
        this.state={
            time: new Date()
        }
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

//   componentWillMount() {
//     this.tick();
//   }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  //The componentWillMount() lifecycle method is initializing our state before the component mounts, and the componentDidMount() lifecycle method is calling a setInterval() method that will update our state every second.
  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
        {/* <p>{this.props.testProp}</p>
        <p>{this.props.optionalProp}</p> */}
      </div>
    );
  }
}

export default Clock;
