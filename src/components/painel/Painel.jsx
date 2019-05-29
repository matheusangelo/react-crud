import React, { Component } from 'react';
import { Container, Table, Row, Col, Button, Alert, Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import { IoIosCheckmark, IoIosClose, IoIosBuild } from 'react-icons/io';

let mock = [
    {
        "id": 1,
        "nome_produto": "XPTO",
        "descricao": "Carga de um produto qualquer",
        "data_criacao": "10/02/2018"
    },
    {
        "id": 1,
        "nome_produto": "XPTO",
        "descricao": "Carga de um produto qualquer",
        "data_criacao": "10/02/2018"
    },
    {
        "id": 1,
        "nome_produto": "XPTO",
        "descricao": "Carga de um produto qualquer",
        "data_criacao": "10/02/2018"
    }
]

class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Pineapple",
            produtos: mock,
            modalEditar: false,
        }
    }

    toggleEditar = () => {
        this.setState({
            modalEditar: !this.state.modalEditar,
        });
    }

    render() {
        return (
            <Container fluid>
                <Row className="mt-2 ml-2">
                    <Button color="primary" onClick={this.toggleEditar}> Novo produto</Button>
                </Row>
                <Row>
                    <Col>
                        <Table bordered className="mt-2">
                            <thead>
                                <tr>
                                    <td>
                                        Id
                                    </td>
                                    <td>
                                        Nome
                                    </td>
                                    <td>
                                        Descricao
                                    </td>
                                    <td>
                                        Data Descricao
                                    </td>
                                    <td>
                                        Ações
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.produtos.map((produto, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome_produto}</td>
                                            <td>{produto.descricao}</td>
                                            <td>{produto.data_criacao}</td>
                                            <td><IoIosCheckmark /><IoIosClose /><IoIosBuild /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modalEditar} toggle={this.toggleEditar}>
                    <ModalHeader toggle={this.toggle}>
                        Produto
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleEditar}>Cancelar</Button>
                        <Button color="success" onClick={this.vincularSinistros}>Cadastrar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
export default Painel;