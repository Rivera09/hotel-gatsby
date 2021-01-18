import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Nav from "./Nav"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgb(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <EnlaceHome to="/">
            <h1>Hotel gatsby</h1>
          </EnlaceHome>
          <Nav />
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: white;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        Hotel Gatsby. Todos los derechos reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer
