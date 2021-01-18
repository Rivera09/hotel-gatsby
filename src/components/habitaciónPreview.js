import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  display: block;
  color: #fff;
  text-decoration: none;
  text-transfor: uppercase;
  font-weight: 700;
  text-align: center;
`

const habitaciónPreview = ({
  habitacion: { contenido, imagen, titulo, slug },
}) => {
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <Image fluid={imagen.fluid} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3 css={css`
        font-size:3rem`}>{titulo}</h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver habitación</Boton>
      </div>
    </div>
  )
}

export default habitaciónPreview
