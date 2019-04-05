class LoginPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={  username: '', password: ''};
    }

    onChangeUserName(event)
    {
        this.setState({username: event.target.value});
    }
    onChangePassword(event)
    {
        this.setState( {password: event.target.value});
    }
    
    onSubmitForm(event)
    {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
              },
        });
        
        
        //get response
        Response.json().then()

        //see if response was true- then can log ing
            //set up a session
        
    }

    render()
    {
        return (
            <Fragment>
                <form id="LoginForm" onSubmit={this.onSubmitForm}>
                    <label>Username</label><br/>
                    <input id="username" type="text" onChange={event => this.onChangeUserName(event)}></input><br/><br/>
                     
                    <label>Password</label><br/>
                    <input id="password" type="text" onChange={event => this.onChangePassword(event)}></input><br/><br/>
                </form>
            </Fragment>
        )
    }
}
export default LoginPage
