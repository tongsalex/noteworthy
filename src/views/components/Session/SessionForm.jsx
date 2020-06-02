import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginAsDemo = this.loginAsDemo.bind(this);
    }

    handleChange(field) {
        return ((event) => {
            this.setState({
                [field]: event.currentTarget.value
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return (
                        <li key={idx}>{error}</li>
                    );
                })}
            </ul>
        );
    }

    loginAsDemo() {
        const demo = {
            username: 'demo',
            password: '123456',
        };
        this.props.processForm(demo);
    }

    signup() {
        if(this.props.formType === "signup") {
            return (
                <>
                    <input type="text" className="sessionForm__input sessionForm__input--fName" value={this.state.firstName} onChange={this.handleChange('firstName')} placeholder="first name" />
                    <input type="text" className="sessionForm__input sessionForm__input--lName" value={this.state.lastName} onChange={this.handleChange('lastName')} placeholder="last name" />
                    <input type="text" className="sessionForm__input sessionForm__input--email" value={this.state.email} onChange={this.handleChange('email')} placeholder="email" />
                </>
            );
            
        }
    }


    render() {
        return (
            <div className="sessionForm">
                <section className="sessionForm__section--form">
                    <section className="sessionForm__section--header">
                        <img src={window.rickDancing} className="sessionForm__logo" />
                        <h1 className="sessionForm__h1">noteworthy</h1>
                        <h2 className="sessionForm__h2">Let's get schwif-tay.</h2>
                    </section>

                    <form onSubmit={this.handleSubmit} className="sessionForm__form">
                        {/* Please {this.props.formType} or {this.props.navLink} */}
                        {this.signup()}
                        <input type="text" className="sessionForm__input sessionForm__input--username" value={this.state.username} onChange={this.handleChange('username')} placeholder="username" />
                        <input type="password" className="sessionForm__input sessionForm__input--password" value={this.state.password} onChange={this.handleChange('password')} placeholder="password" />
                        {this.renderErrors()}
                        <input type="submit" className="sessionForm__button" value={this.props.formType} />
                        
                        <h1>
                            or {this.props.navLink} instead
                        </h1>
                            
                    </form>

                    <button className="sessionForm__button" onClick={this.loginAsDemo}>login as demo</button>
                </section>
            </div>
        );
    }
}

export default SessionForm;