import styled from 'styled-components'

export const Container = styled.div` 
   margin-top: 10px;
   text-align: center;

   

   button{
       margin-top: 20px;
       height: 60px;
       width: 200px;
       background: var(--button);
       color: #FFF;
       font-weight: 700;
       border: 1px solid #365195;
       border-radius: 0.75rem;
       margin-bottom: 20px;
       transition: filter 0.2s;

       &:hover{
           filter: brightness(0.9);
       }
   }
  
`;

export const Content = styled.div`
  
  margin: auto;
  background: #FFF;
  width: 450px;
  height: 390px;
  padding: 20px;
  border-radius: 2rem;

 h2{
     color: var(--text-place);
     margin-top: 40%;
 }

 .Notext{
     display: none;
 }
  img{
      width: 250px;
      height: 250px;
  }

  span{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      p{
          margin-left: 15px;
      }
  }
`;