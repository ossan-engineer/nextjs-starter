import type { InferGetStaticPropsType } from 'next'
import { octokit } from 'utils/fetcher'

export type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: React.FC<Props> = ({repos}) => {
  if (!repos.data) {
    return <>error!</>
  }
  console.log(repos.data)
  return <div>Hello Next.js</div>
}

export const getStaticProps = async () => {
    // reposにレスポンスが格納される
  const repos = await octokit.request('GET /users/ossan-engineer/repos', { userName: 'ossan-engineer' })
  return {props: {repos}  }
}

export default Page