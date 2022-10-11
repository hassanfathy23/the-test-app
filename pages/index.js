import { MongoClient } from 'mongodb'

import { fetchNames } from '../lib/fetch-names'


export default function Home({names}) {
  return (
    <div>
      {names.map(name => (
        <p key={name._id}>{name.name}</p>
      ))}
      {/* hello, world */}
    </div>
  )
}

export async function getServerSideProps() {
  // const data = await fetchNames()

  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db()
  const names = await db.collection("names").find({}).toArray();
  // console.log(JSON.parse(JSON.stringify(names)))
  // console.log(names)

  return {
    props: {
    names: JSON.parse(JSON.stringify(names))
    }
  }
}

