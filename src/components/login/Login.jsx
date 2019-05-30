import React, {Component} from 'react';
import {Container, Form, Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="container-login">
                <Form className="form-login">
                    <h1 className="titulo-login">Pineapple</h1>
                    <Input type="text" placeholder="Nome Usuário"/>
                    <Input type="password" placeholder="Senha"/>
                    <hr />
                    <Button className="mb-2">Entrar</Button>
                    <Link to='/painel'><span>Criar conta</span></Link><br/>
                    <Link to='/painel'><span>Esqueci a Senha</span></Link><br/>
                </Form>
            </Container>
        )
    }
}
export default Login;