import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8laf1d3q',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skSDPqty77AQyuOEElbaIBbRxcBjiiIU5FSBd4cVBKdnUSWtUIrINWKhZW8WS9hopN5Ogs1sYlp3x3XRdqrPzsk3s1NHwIJnWQ7gZtWfBGP1JlNzxCWisZyj0coue8g2LDG6tF4mEfQRfQrgqtMAotA4GlHVumCZgYA0dNvXsee6vjeMXsmm',
  useCdn: false,
})
