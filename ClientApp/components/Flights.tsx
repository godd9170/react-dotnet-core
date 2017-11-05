import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as FlightsStore from '../store/Flights';

type FlightsProps =
   FlightsStore.FlightsState
    & typeof FlightsStore.actionCreators
    & RouteComponentProps<{}>;

class Flights extends React.Component<FlightsProps, {}> {
    public render() {
        return <div>
            <h1>Flights Go Here.</h1>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.flights, // Selects which state properties are merged into the component's props
   FlightsStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Flights) as typeof Flights;