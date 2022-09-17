import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import HomeButton from "../components/homeButton"

export default function Component() {
  const { data: session } = useSession()


  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
        <p className="text-5xl font-medium text-center"> Waiting List</p>
      </div>
      <div className="mx-auto bg-white rounded-xl shadow-lg gap-5 text-center mt-10">
        <HomeButton description="CUSTOMER" href="/customer" primary />
        <HomeButton description="BUSINESS" href="/business" />
      </div >
    </div>
  )

  // if (session && session.user) {
  //   return <>
  //     Signed in as <br />{JSON.stringify(session.user, null, 4)} <br />
  //     <button onClick={() => signOut()}>Sign out</button><br />
  //     {session.user.image && <Image src={session.user.image} width={100} height={100} alt="user image" />}
  //     <br />
  //     <button onClick={async () => {
  //       fetch('/api/restricted')
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));
  //     }} >CLICK</button>
  //   </>
  // }
  // return <>
  //   Not signed in <br />
  //   <button onClick={() => signIn()}>Sign in</button>
  //   <br />
  //   <button onClick={async () => {
  //     fetch('/api/restricted')
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }} >CLICK</button>
  // </>
}