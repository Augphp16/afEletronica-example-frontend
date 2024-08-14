import React, { useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Formulario from './pages/Formulario';
import Tabela from './pages/Tabela';

function App() {

  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  
  const [dataEntrada, setDataEntrada] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [aparelho, setAparelho] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [obs, setObs] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [vetor, setVetor] = useState([]);

  const cadastro = () => {
    
    let obj = {

      "dataEntrada": dataEntrada,
      "nome": nome,
      "telefone": telefone,
      "endereco": endereco,
      "aparelho": aparelho,
      "sintomas": sintomas,
      "obs": obs,
      "orcamento": orcamento,
      "dataSaida": dataSaida
    }
    
    setVetor([...vetor, obj]);

    setDataEntrada('');
    setNome('');
    setTelefone('');
    setEndereco('');
    setAparelho('');
    setSintomas('');
    setObs('');
    setOrcamento('');
    setDataSaida('');
  
  }

  const selecionar = (indice) => {
    setIndiceVetor(indice);

    setDataEntrada(vetor[indice].dataEntrada);
    setNome(vetor[indice].nome);
    setTelefone(vetor[indice].telefone);
    setEndereco(vetor[indice].endereco);
    setAparelho(vetor[indice].aparelho);
    setSintomas(vetor[indice].sintomas);
    setObs(vetor[indice].obs);
    setOrcamento(vetor[indice].orcamento);
    setDataSaida(vetor[indice].dataSaida);

    setBtnCadastrar(false);
  }

  const alterar = () => {
    
    let obj = {

      "dataEntrada": dataEntrada,
      "nome": nome,
      "telefone": telefone,
      "endereco": endereco,
      "aparelho": aparelho,
      "sintomas": sintomas,
      "obs": obs,
      "orcamento": orcamento,
      "dataSaida": dataSaida
    }

    let copiaVetor = [...vetor];

    copiaVetor[indiceVetor] = obj;

    setVetor(copiaVetor);

    setDataEntrada('');
    setNome('');
    setTelefone('');
    setEndereco('');
    setAparelho('');
    setSintomas('');
    setObs('');
    setOrcamento('');
    setDataSaida('');

    setBtnCadastrar(true);

  }

  const cancelar = () => {

    setDataEntrada('');
    setNome('');
    setTelefone('');
    setEndereco('');
    setAparelho('');
    setSintomas('');
    setObs('');
    setOrcamento('');
    setDataSaida('');

    setBtnCadastrar(true);

  }
  
  return(
    <div>
      <Header />
      <Formulario btnCadastrar={btnCadastrar} setDataEntrada={setDataEntrada} setNome={setNome} setTelefone={setTelefone}
      setEndereco={setEndereco} setAparelho={setAparelho} setSintomas={setSintomas} 
      setObs={setObs} setOrcamento={setOrcamento} setDataSaida={setDataSaida} 
      cadastro={cadastro} alterar={alterar} vetor={vetor} dataEntrada={dataEntrada} nome={nome}
      telefone={telefone} endereco={endereco} aparelho={aparelho} sintomas={sintomas}
      obs={obs} orcamento={orcamento} dataSaida={dataSaida} cancelar={cancelar}/>
      <Tabela selecionar={selecionar} vetor={vetor}/>
      <Footer />
    </div>
  );
}

export default App;
