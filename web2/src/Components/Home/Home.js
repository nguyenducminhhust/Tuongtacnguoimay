import React from "react";
import NavBar from "./NavBar/NavBar";
import Page from "../Home/Page/Page";
import HeaderNote from "../Home/HeaderNote/HeaderNote";
import "./Home.css";
export default function Home() {
  return (
    <>
      <HeaderNote />
      <NavBar />
      <Page />
    </>
  );
}
