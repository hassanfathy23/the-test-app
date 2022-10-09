
import { fetchNames } from '../lib/fetch-names'


export default function Home() {
  return (
    <div>
      hassan
    </div>
  )
}

export async function getServerSideProps() {
  const names = await fetchNames()

  if(!names) {
    throw new Error("can't fetch names")
  }

  return {
    props: {
      names
    }
  }
}

