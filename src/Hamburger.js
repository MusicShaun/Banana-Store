import styled from 'styled-components';


  const Wrapper = styled.div`
    position: absolute;
    right: 6vw;
    top: 25px;
    z-index: 100;
    cursor: pointer;
  `;


export default function Menu(props ) {

  return (
    <Wrapper onClick={props.handleMenu}>

      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 50 50" width="50px" 
      height="50px">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
      </svg>
  </Wrapper>

  )
}



