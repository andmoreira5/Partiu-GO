//scripts para busca no sanity

export const tema = `
*[_type == "tema" && data == $dia]{
    tema,
      grupo->{
        nome, local, endereco, horario
      }
  }
`
export const grupos = `
*[_type == "grupoDeOracao"]{
    nome, local, endereco, horario,
      diaDaSemana -> {
        descricao
      }
  }
`

export const conselho = `
*[_type == "conselho"]{
  nome, funcao, imagem
}
`

export const formacoes =`
*[_type == "formacao"]{
  titulo, descricao, imagem
}
`

















