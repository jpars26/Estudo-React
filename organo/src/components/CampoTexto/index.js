import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    let valor = 'Joao Paulo';

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor);
    }
    
    return (
        <div className="campo-texto">
            <label>

                {props.label}
            
            </label>
            <input required={props.obrigatorio} onChange={aoDigitado} placeholder={props.placeholder} />
            
        </div>
    )
}

export default CampoTexto;