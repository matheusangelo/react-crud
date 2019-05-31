import React, { Component } from 'react';
import { Container, Table, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { IoIosClose, IoIosBuild } from 'react-icons/io';
import ReactStars from 'react-stars';
import { URL_BASE } from '../service/base';
import ReactTooltip from 'react-tooltip'


class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Pineapple",
            produtos: [],
            modalEditar: false,
            modalExcluir: false,
            exibir_alerta: false,
        }
    }

    handleChange = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;
        this.setState(mudanca)
    }

    toggleEditar = (produto) => {
        this.setState({
            produtoEdicao: produto,
            modalEditar: !this.state.modalEditar,
            nome_produto: produto.nome_produto,
            imagem: produto.nome_produto,
            descricao: produto.descricao,
            nota_produto: 0,
        });
    }


    toggleExcluir = (produto) => {
        this.setState({
            modalExcluir: !this.state.modalExcluir,
            produto_exclusao: produto,
        });
    }

    componentDidMount() {
        fetch(URL_BASE + 'produtos', {
            method: 'GET',
            mode: 'cors',
        }).then(resultado => {
            resultado.json().then(dados => {
                this.setState({ produtos: dados })
            })
        });

    }

    classificacaoChange = (newRating) => {
        console.log(newRating)
    }

    render() {
        return (
            <>
                <Container fluid id="painel" className="mt-5">
                    <Row>
                        <Alert>Alteração realizada com sucesso</Alert>
                    </Row>
                    <Row className="mt-2 ml-2">
                        <Button color="primary" onClick={this.toggleEditar} className="mb-2"> Novo produto</Button>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover className="mt-2" id="tabela">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>
                                            #
                                    </th>
                                        <th>
                                            Nome
                                    </th>
                                        <th>
                                            Descrição
                                    </th>
                                        <th>
                                            Data Criação
                                    </th>
                                        <th>
                                            Ações
                                    </th>
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
                                                <td>
                                                    <ReactTooltip /><IoIosClose onClick={() => this.toggleExcluir(produto)} color="red" data-tip="Excluir Produto" />
                                                    <ReactTooltip /><IoIosBuild onClick={() => this.toggleEditar(produto)} data-tip="Editar Produto" />
                                                </td>
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
                            <Container className="text-left">
                                <Row>
                                    <Col>
                                        Nome
                                    <input type="text"
                                            placeholder="Nome do Produto"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            name="nome_produto"
                                            value={this.state.nome_produto}></input>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        Imagem
                                    <input type="file"
                                            placeholder="Nome do Produto"
                                            className="form-control"
                                            onChange={this.handleChange}></input>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        Descrição
                                    <textarea className="form-control"
                                            name="descricao"
                                            onChange={this.handleChange}
                                            value={this.state.descricao}></textarea>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Classificação
                                    <ReactStars count={5}
                                            onChange={this.classificacaoChange}
                                            size={24}
                                            color2={'#ffd700'} />
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggleEditar}>Cancelar</Button>
                            <Button color="primary" onClick={this.vincularSinistros}>Cadastrar</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </>
        )
    }
}
export default Painel;