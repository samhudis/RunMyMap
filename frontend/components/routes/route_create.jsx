import React from 'react';
import merge from 'lodash/merge';
import RouteMap from '../route_map/route_map_container';

class RouteCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        polyline: 'example',
        user_id: props.user_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user, this.props);
    }

    // renderErrors() {
    //     return(
    //         <ul className="errors">
    //             {this.props.errors.map((error, i) =>
    //                 <li key={`error-${i}`}>
    //                 { error }
    //                 </li>)}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="routes-form">
            <div className="routes-form-container">
                <form onSubmit={this.handleSubmit} className="route-form-box">
                {/* {this.renderErrors()} */}
                <div className="routes-create-form">
                    <br/>
                    <label>Name:
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className='routes-input'
                        />
                    </label>
                    <RouteMap />
                    <input type="hidden" value = {this.state.polyline} onChange={this.update('polyline')} />
                    <br/>
                    <input className="submit-button" type="submit" value={this.props.formType} />
                </div>
            </form>
        </div>
        </div>
        );
    }

    // render() {
    //     const routes = Object.values(this.props.routes).map(route => 
    //     <RouteIndexItem route = {route} key={route.id}/>)

    //     return(
    //         <div className="create-route">
    //         <ul>
    //             { routes }
    //         </ul>
    //         </div>
    //     )
    // }
}


export default RouteCreate