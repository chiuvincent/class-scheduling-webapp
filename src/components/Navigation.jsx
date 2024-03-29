import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>
    Sign in
  </button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>
    Sign out
  </button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
  // return user ? (
  //   <div>
  //     <SignOutButton />
  //     <p>{user ? `${user.email} ${user.uid}` : "Unknown user"}</p>
  //   </div>
  // ) : (
  //   <SignInButton />
  // );
};

const Navigation = () => (
  <nav className="d-flex">
    <AuthButton />
  </nav>
);

export default Navigation;
