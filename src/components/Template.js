import React from "react";
import styled, { css } from "styled-components";

const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 28pt;
`

const Template = ({children, todoLength}) => {
  return (
    <div>
      <Title>오늘의 할 일 ({todoLength})</Title>
      <div>{children}</div>
    </div>
  );
}

export default Template;