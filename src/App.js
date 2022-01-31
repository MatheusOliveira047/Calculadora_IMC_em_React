import { useState } from 'react'
import './app.css'

export default  function app (){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC (){
    const alt = altura / 100
    const resultado = peso / (alt * alt)

    const imc = resultado.toFixed(2)

    if(imc < 18.5){
      setMensagem(`você está abaixo do peso e seu imc é ${imc}`)
    }else if (imc >= 18.5 && imc < 24.9){
     setMensagem(`você está com o peso normal e seu imc é ${imc}`)
    }else if(imc >= 24.9 && imc < 30 ){
     setMensagem(`você está com sobre peso e seu imc é ${imc}`)

    }else if(imc >= 30 ){
      setMensagem(`você está obeso e seu imc é ${imc}`)
    }

  }

  return(
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
          <input
            type="text"

            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
            placeholder="Peso em (kg) ex: 90"
          />
          <input
            type="text"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
            placeholder="Altura em (cm) ex: 173"
          />


          <button onClick={calcularIMC}> 
            calcular
          </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}