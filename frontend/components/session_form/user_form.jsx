import React from 'react';
import merge from 'lodash/merge';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        $('body').addClass('greyBackground')
    }

    componentWillUnmount() {
        $('body').removeClass('greyBackground')
        this.props.clearErrors()
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
                return(
                    <ul className="errors">
                        {this.props.errors.map((error, i) =>
                            <li key={`error-${i}`}>
                            { error }
                            </li>)}
                    </ul>
                );
            }

    render() {
        return (
            <div className="auth-form">
            <div className="auth-form-container">
                <form onSubmit={this.handleSubmit} className="auth-form-box">
                {this.props.navLink}
                <div className="or-span">
                    <span className="or-span-bar" />
                    <span>or</span>
                    <span className="or-span-bar" />
                    </div>
                {this.renderErrors()}
                <div className="signup-form">
                    <br/>
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    <label>Email Address:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
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
                    <input className="submit-button" type="submit" value={this.props.formType} />
                </div>
            </form>
        </div>
        </div>
        );
    }
}

export default UserForm;