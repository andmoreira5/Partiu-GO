export default {
    name:'tema',
    title:'Tema',
    type:'document',
    fields: [
        {
            name:'tema',
            title:'Tema',
            type:'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'data',
            title: 'Data',
            type: 'date',
            validation: (Rule) => Rule.required()
        },
        {
            name:'grupo',
            title:'Grupo de Oração',
            type:'reference',
            to:[{type:'grupoDeOracao'}]
        }
    ]
}