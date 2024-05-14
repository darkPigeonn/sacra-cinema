import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  return {
    provide: {
      client: createClient({
        space: config.public.contentfulSpaceId        ,
        accessToken :config.public.contentfulAccessToken,
      })
    }
  }
})