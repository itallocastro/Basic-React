import React from 'react';
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/Layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from "./components/basicos/Condicional";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/Form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega-sena/Mega";

export default (props) => {
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo={'Primeiro Componente'}
                      color={'#038C33'}
                >
                    <Primeiro></Primeiro>
                </Card>
                <Card titulo={'Com parâmetro'} color={'#5AA64E'}>
                    <ComParametro
                        titulo={'Meu nome é john'} subtitulo={'Meu subtitulo'}>

                    </ComParametro>
                </Card>
                <Card titulo={'Com Filhos'} color={'#D9CAAD'}>
                    <ComFilhos>
                        <ul>
                            <li>ANA</li>
                            <li>JOHN</li>
                            <li>CARLOS</li>
                        </ul>
                    </ComFilhos>
                </Card>
                <Card titulo={'Repetição'} color={'#73645C'}>
                    <Repeticao></Repeticao>
                </Card>
                <Card titulo={'Condicional'} color={'#D93D04'}>
                    <Condicional numero={8}></Condicional>
                </Card>
                <Card titulo={'Comunicação Direta'} color={'#233E63'}>
                    <Pai sobrenome={'Teste'}></Pai>
                </Card>
                <Card titulo={'Comunicação Indireta'} color={'#233E63'}>
                    <Super></Super>
                </Card>
                <Card titulo={'Input'} color={'#233E63'}>
                    <Input></Input>
                </Card>
                <Card titulo={'Contador'} color={'#233E63'}>
                    <Contador passo={10} valor={100}></Contador>
                </Card>
                <Card titulo={'Mega-Sena'} color={'#233E63'}>
                    <Mega quantidade={6}></Mega>
                </Card>


                <Card titulo={'Exercício x'}>Conteúdo</Card>
            </div>
    </div>
    )
}
