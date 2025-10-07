import { Route, Routes } from "react-router-dom";
import Home from "../componets/pages/Home";
import About from "../componets/pages/About";
import Dashboard from "../componets/pages/Dashboard";
import ServiceDetailed from "../componets/pages/ServiceDetailed";
import PageNotFound from "../componets/pages/PageNotFound";
import TimerComponent from "../componets/pages/TimerComponent";
import DefaultLayout from "../layouts/DefaultLayout";
import Counter from "../features/counter/Counter";
import Contact from "../componets/pages/Contact";

export default function AppRouts() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services/:id" element={<ServiceDetailed />}></Route>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="timer-component" element={<TimerComponent />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}
