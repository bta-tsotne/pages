import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}