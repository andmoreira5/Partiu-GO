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
    nome, local, endereco, horario, diaDaSemana
  }
`

export const conselho = `
*[_type == "conselho"]{
  nome, descricao, imagem, grupo
}
`

export const formacoes =`
*[_type == "formacao"]{
  nome, descricao, imagem, grupo, ordem
}
`

export const calendario = `
*[_type == "calendario" && inicio >= $dia]{
  descricao, horario, local, inicio, 
    fim, nivel
}
`