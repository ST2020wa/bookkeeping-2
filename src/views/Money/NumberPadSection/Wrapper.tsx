import styled from 'styled-components';

const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  >.output{
    border: 1px solid red;
    color: #7c54ff;
    background:#f4f4f4;
    font-size: 36px;
    font-family: Consolas, monospace;
    line-height: 60px;
    text-align:right;
    padding: 4px 16px;
    box-shadow: inset 0 -5px 5px -5px #rgba(0,0,0,0.25),
                inset 0 5px 5px -5px #rgba(0,0,0,0.25);
  }
  >.pad{
    > button{
    font-size: 18px;
    float: left;
    width: 25%;
    height: 64px;
    border: 1px solid #e5e1eb;
    background: #f4f4f4;
    &.ok{
      height: 128px;
      float: right;
      background: #7c54ff;
      color: white;
    }
    &.zero{
      width: 50%;
    } }
  }
`;

export {Wrapper}
