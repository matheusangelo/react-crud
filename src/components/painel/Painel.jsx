import React, { Component } from 'react';
import { Container, Table, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IoIosClose, IoIosBuild } from 'react-icons/io';
import ReactStars from 'react-stars';
import { URL_BASE } from '../service/base';
import ReactTooltip from 'react-tooltip';


class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Pineapple",
            produtos: [],
            modalEditar: false,
            modalExcluir: false,
            exibir_alerta: false,
            produto_exclusao: []
        }
    }

    handleChange = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;
        this.setState(mudanca)
    }

    toggleEditar = (produto) => {
        this.setState({
            modalEditar: !this.state.modalEditar,
            id: produto._id,
            nome_produto: produto.nome_produto,
            imagem: produto.nome_produto,
            descricao: produto.descricao,
            nota_produto: 0,
        });
    }

    listarProdutos = () => {
        fetch(URL_BASE + 'produtos', {
            method: 'GET',
            mode: 'cors',
        }).then(resultado => {
            resultado.json().then(dados => {
                this.setState({ produtos: dados })
            })
        });
    }

    toggleExcluir = (produto) => {
        this.setState({
            modalExcluir: !this.state.modalExcluir,
            produto_exclusao: produto,
        });
    }

    componentDidMount() {
        this.listarProdutos();
    }

    classificacaoChange = (newRating) => {
        this.setState({ classificao: newRating })
    }

    cadastrarProduto = () => {
        let metodo = "";
        let id = this.state.id;


        id === undefined ? metodo = 'POST' : metodo = 'PUT';
        
        let dados = {
            "nome_produto": this.state.nome_produto,
            "descricao": this.state.descricao,
            "data_criacao": new Date(),
            "classificacao": this.state.classificacao
        }

        debugger;

        let jdados = JSON.stringify(dados);

        fetch(URL_BASE + 'produtos', {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: jdados,
            mode: 'cors'
        }).then(() => {
            console.log("200");
            this.setState(
                {   modalEditar: !this.state.modalEditar,
                    exibir_alerta: true
                });
            this.listarProdutos();
            setTimeout(function () {
                    this.setState({ exibir_alerta: false });
                }.bind(this),3000);
        });
    }

    render() {
        return (
            <Container fluid id="painel" className="mt-5">
                <Row>
                    <Alert isOpen={this.state.exibir_alerta}>Alteração realizada com sucesso</Alert>
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
                                            <td>{i}</td>
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
                                        color2={'#ffd700'}
                                        value={this.state.classificao} />
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggleEditar}>Cancelar</Button>
                        <Button color="primary" onClick={this.cadastrarProduto}>Cadastrar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalExcluir} toggle={this.toggleExcluir}>
                    <ModalHeader toggle={this.toggle}>
                        Excluir Produto
                    </ModalHeader>
                    <ModalBody>
                        Tem certeza que deseja excluir o produto {this.state.produto_exclusao.nome_produto} ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleExcluir}>Cancelar</Button>
                        <Button color="danger" onClick={this.toggleExcluir}>Excluir</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
export default Painel;