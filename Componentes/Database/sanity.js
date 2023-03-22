import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { lerDiaDeHoje } from "../FuncoesLogicas/LerHorarioDia"

const client = createClient({
    projectId: '5phrq2hu',
    dataset:'production',
    useCdn: false,
    apiVersion: lerDiaDeHoje(),
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client 