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
