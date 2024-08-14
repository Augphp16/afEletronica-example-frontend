import React, { useState } from 'react';
import './style/Tabela.css';

function Tabela ({vetor, selecionar}) {

    const [termo, setTermo] = useState('');

    return(
        <div>

            <input type="text" onChange={e => setTermo(e.target.value)} placeholder="Informe o nome" className="form-control pesquisa"/>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data de entrada</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Aparelho</th>
                        <th>Sintomas</th>
                        <th>Observações</th>
                        <th>Orçamento</th>
                        <th>Data de saída</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>

                <tbody>
                {
                    vetor.filter(obj => obj.nome.includes(termo)).map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.dataEntrada}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.telefone}</td>
                            <td>{obj.endereco}</td>
                            <td>{obj.aparelho}</td>
                            <td>{obj.sintomas}</td>
                            <td>{obj.obs}</td>
                            <td>{obj.orcamento}</td>
                            <td>{obj.dataSaida}</td>
                            <td><button className="btn btn-success" onClick={() => selecionar(indice)}>Selecionar</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;