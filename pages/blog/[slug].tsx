import { GetStaticProps, GetStaticPaths } from 'next'

export default function BlogPost({ date }) {
  return <h1>Omae-wa Matheus Desu {date}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // aqui nesse paths a gente coloca as informações que queremos que seja renderizada estaticamente
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  }
}