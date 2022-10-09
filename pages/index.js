
import { fetchNames } from '../lib/fetch-names'


export default function Home({names}) {
  return (
    <div>
      {names && names.length > 0 ? names.map(name => (
        <p key={name._id}>{name.name}</p>
      )) : <p>problem occurred</p> }
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetchNames()
  console.log(data)
  const names = data.names

  return {
    props: {
      names
    },
    revalidate: 10
  }
}
