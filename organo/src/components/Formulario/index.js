import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botoes';

const Formulario = () => {

    const times = ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Salvando dados');
    }
    return (
        <section className="formulario">
            <form onSubmit= {aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite seu endereço de imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}></ListaSuspensa>
                <Botao type="submit">
                    Criar Card
                </Botao>
            </form>
            
        </section>
    )
}

export default Formulario;