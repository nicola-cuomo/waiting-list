import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Component() {
  const { data: session } = useSession()
  if (session && session.user) {
    return <>
      Signed in as <br />{JSON.stringify(session.user, null, 4)} <br />
      <button onClick={() => signOut()}>Sign out</button><br />
      {session.user.image && <Image src={session.user.image} width={100} height={100} alt="user image" />}
      <br />
      <button onClick={async () => {
        fetch('/api/restricted')
          .then((response) => response.json())
          .then((data) => console.log(data));
      }} >CLICK</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
    <br />
    <button onClick={async () => {
      fetch('/api/restricted')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }} >CLICK</button>
  </>
}