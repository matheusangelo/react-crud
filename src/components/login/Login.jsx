import React, {Component} from 'react';
import {Container, Form, Input,Button} from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="container-login">
                <Form className="form-login">
                    <h1>Pineapple</h1>
                    <Input type="text" placeholder="Nome Usuário"/>
                    <Input type="password" placeholder="Senha"/>
                    <hr />
                    <Button>Entrar</Button>
                </Form>
            </Container>
        )
    }
}
export default Login;