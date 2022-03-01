import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lqxng767',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skcDEGzgRhQtSMv7Rvo10K6oTzvUsMGWGjvVUnJ1igg0h2X1Bn8OzOhmuC0VcVu0IXjHHpQEqB828O5cyFItVU1Kh9vWnYlrkHKqJfvyye5sCU5Wdtm5en5AkBVdsRHFuKV9IxuAWyXERf41jYrgOZDU6Auvo9CCAiwmojjowAcCFvtVycon',
  useCdn: false,
})
