import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle `

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  


  :root{
      --cor-de-fundo: #CCCCCC;
      --button: #365195;
      --text-place: #B3B3B3;

 
  }

  html{
      @media(max-width: 1080px){
          font-size: 93.75%;
      }
      @media(max-width: 1080px){
          font-size: 84.5%;
      }
  }

  body{
     
     background-color: #CCCCCC;
      
  }
  body, input, textarea,button{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }

  button{
      cursor: pointer;
  }
`;