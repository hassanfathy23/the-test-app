
import { fetchNames } from '../lib/fetch-names'


export default function Home({names}) {
  return (
    <div>
      {names && names.length > 0 ? names.map(name=> (
        <p key={name._id}>
          {name.name}
        </p>
      )) : <p>no names found</p>}
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetchNames()

  if(!data) {
    throw new Error("can't fetch names")
  }

  return {
    props: {
      names: data.names
    }
  }
}

