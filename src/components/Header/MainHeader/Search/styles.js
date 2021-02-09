import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #666360;
  color: #f4ede8;
  height: 33px;
  border-color: black;
  opacity: 0.5;

  &::placeholder {
    color: #666360;
  }
  & + div {
    margin-top: 8px;
  }
  &::placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: black;
    opacity: 1;
    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
    &::placeholder {
      color: black;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  svg {
    color: gray;
    padding: 3px;
    font-size: 16px;
  }



`;