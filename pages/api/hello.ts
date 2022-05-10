// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await res.unstable_revalidate('/') // essa linha é pra forçar um revalidate do SSG, e entre parenteses a gente coloca a rota que queremos forçar

  return res.status(200).json({ name: 'John Doe' })
}
