import styled from "styled-components";
import Navbar from "./Navbar";

import { useSelector } from "react-redux";
export default function Layout({ children }) {
  // const userCheck = useSelector((state) => state?.users?.userCheck);
  // const token = localStorage.getItem("token");
  return (
    <Root>
      <div className="top_bar">
        <Navbar/>
      </div>
      <div className="main_body">{children}</div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;

  .main_bar {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .top_bar {
      background: #ffffff;
      display: flex;
      position: sticky;
      height: 120px;
      background-image: linear-gradient(
        to bottom right,
        #c6a5ffc7,
        #c6a5ff63,
        #ffffff,
        #c6a5ff24
      );
      width: 100%;
    }
    .main_body {
      height: 85%;
      width: 100%;
    }
  }
`;
