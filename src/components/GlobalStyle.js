import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #282B28;
    font-family: 'Inter', sans-serif;
}

button{

    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #D36135;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    
    &:hover{

        background-color: #D36135;
        color: white;
        
    }

}

h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: #D36135;
}
a{

    font-size: 1.1rem;
}
p{
    padding-right: 3rem ;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 150%;
}
`;

export default GlobalStyle;