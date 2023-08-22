import {createClient} from 'next-sanity'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 

const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-07-17",
    useCdn: false, 
  })

  export default client;