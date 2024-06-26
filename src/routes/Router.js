import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Attorney from "../components/pages/attorney/Attorney";
import Contact from "../components/pages/contact/Contact";
import Practice from "../components/pages/practiceArea/Practice";
import CaseEvaluation from "../components/pages/home/case/CaseEvaluation";
import Ligation from "../components/pages/home/case/Ligation";
import TermsConditions from "../components/repatePages/footer/termsConditions/termsConditions";
import ourTeam from "./../components/pages/ourTeam/ourTeam";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/attorney",
        element: <Attorney />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/practice",
        element: <Practice />,
      },
      {
        path: "/case_evaluation",
        element: <CaseEvaluation />,
      },
      {
        path: "/ligitation",
        element: <Ligation />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/our-team",
        element: <ourTeam/>,
      },
    ],
  },
]);
