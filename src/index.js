import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'


const tag = <strong>Hello World</strong>

ReactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById('root')
)

//PARA IDENTAR CODIGO: shift + alt + f


// A partir dele que vou usar para renderizar algo na tela,
// para exibir algo com o método render,
// para renderizar e esse método recebe dois paramtros,
// o primeiro é o que eu quero renderizar na tela:
// ReactDOM.render('Hello World!!!');


// o segundo parametro vai ser o elemento no qual eu quero inserir o conteúdo 'Hello World!!!'
// const el = document.getElementById

//formas diferentes:
//const el = document.getElementById('root')
//ReactDOM.render('Hello World !!!', el);

//ReactDOM.render(
//    'Hello World !!!',
//    document.getElementById('root')
//)

// utilizei o react dom para inserir uma string normal de js dentro da página.


//JSX é uma extensão React para a sintaxe da linguagem JavaScript que fornece uma
//maneira de estruturar a renderização de componentes usando uma sintaxe familiar
//a muitos desenvolvedores. É semelhante em aparência ao HTML.

//utilizando:

//ReactDOM.render(
//    <div>
//   <strong>Hello World !!!</strong> </div>,
//    document.getElementById('root')
//)

//ou:

// ReactDOM.render(
//     <div>
//         {tag}
//     </div>,
//     document.getElementById('root')
// )



