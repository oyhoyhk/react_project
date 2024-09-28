import { useState } from "react";

function App() {
  return (
    <div
      id="최상단_부모"
      style={{
        width: "100vw",
        height: "100vh",
        background: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="로그인_모달"
        style={{
          width: "400px",
          height: "600px",
          background: "white",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>환영합니다</div>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </div>
    </div>
  );
}

export default App;
