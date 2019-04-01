import React from 'react';
import { updateExpression } from '@babel/types';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        this.props.processForm(user);
    }

    renderErrors() {
            if (this.props.errors.session) {
                return(
                    <ul>
                        {this.props.errors.map((error, i) =>
                            <li key={`error-${i}`}>
                            { error }
                            </li>)}
                        ))}
                    </ul>
                );
            }
        }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                Run My map
                <br/>
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <div className="login-form">
                    <br/>
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        />
                    </label>
                    <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </div>
            </form>
        </div>
        );
    }
}

export default SessionForm;