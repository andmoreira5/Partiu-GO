export default {
  name: 'grupoDeOracao',
  title: 'Grupo de Oração',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
        name: 'local',
        title: 'Local',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'endereco',
        title: 'Endereço',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'horario',
        title: 'Horário',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'diaDaSemana',
        title: 'Dia da Semana',
        type: 'reference',
        to:[{type:'diaDaSemana'}],
        validation: (Rule) => Rule.required()
      },
  ],
}
