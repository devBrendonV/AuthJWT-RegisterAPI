import styled from "styled-components";

export const Container = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  text-align: center;
  color: #474747;
  position: relative;
  top: center;
  left: center;

  .icon {
    font-size: 90px;
    color: #4090f7;
  }
  .logoff {
    font-size: 30px;
    position: absolute;
    left: 0;
    top: 0;
    color: #4090f7;
    margin: 15px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;
