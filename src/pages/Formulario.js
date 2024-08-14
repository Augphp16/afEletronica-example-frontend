import './style/Formulario.css';

function Formulario({btnCadastrar, alterar, cancelar, setDataEntrada, setNome, setTelefone, setEndereco, setAparelho, 
    setSintomas, setObs, setOrcamento, setDataSaida, cadastro,
    dataEntrada, nome, telefone, endereco, aparelho, sintomas, 
    obs, orcamento, dataSaida}) {

    return (
        <div className="formulario">
            <form>
                <p>Data de entrada:<input type="date" placeholder="Data de entrada" value={dataEntrada} className="form-control" onChange={e => setDataEntrada(e.target.value)} /></p>
                <p>Nome:<input type="text" placeholder="Nome" value={nome} className="form-control" onChange={e => setNome(e.target.value)} /></p>
                <p>Telefone:<input type="tel" placeholder="Telefone" value={telefone} className="form-control" onChange={e => setTelefone(e.target.value)}/></p>
                <p>Endereço<input type="text" placeholder="Endereço" value={endereco} className="form-control" onChange={e => setEndereco(e.target.value)}/></p>
                <p>Aparelho:<input type="text" placeholder="Aparelho" value={aparelho} className="form-control" onChange={e => setAparelho(e.target.value)}/></p>
                <p>Sintomas:<input type="text" placeholder="Sintomas" value={sintomas} className="form-control" onChange={e => setSintomas(e.target.value)}/></p>
                <p>Observações:<input type="text" placeholder="Observações" value={obs} className="form-control" onChange={e => setObs(e.target.value)}/></p>
                <p>Orçamento:<input type="text" placeholder="Orçamento" value={orcamento} className="form-control"  onChange={e => setOrcamento(e.target.value)}/></p>
                <p>Data de saída:<input type="date" placeholder="Data de saída" value={dataSaida} className="form-control" onChange={e => setDataSaida(e.target.value)}/></p>

                {
                    btnCadastrar
                    ?
                    <input type="button" value="Cadastrar" className="btn btn-primary" onClick={cadastro}/>
                    :
                    <div>
                        <input type="button" value="Alterar" onClick={alterar} className="btn btn-success" />
                        <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-danger" />
                    </div>
                }

            </form>

        </div>
    );
}

export default Formulario;