import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        {/* <div className={styles.container}> */}
        Welcome user<br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    // <div className={styles.container}>
    <div>
      Click to sign into your user account <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}