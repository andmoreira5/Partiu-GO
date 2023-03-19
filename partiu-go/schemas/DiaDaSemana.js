export default {
    name: 'diaDaSemana',
    title: 'Dia da Semana',
    type: 'document',
    fields: [
        {
            name:'descricao',
            title:'Descrição',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ]
}