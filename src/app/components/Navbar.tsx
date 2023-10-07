import SigninButton from "./SignInButton";

export default function Navbar() {
    return(
        <div className="navbar text-black">
  <div className="flex-1">
    <a className=" normal-case text-3xl font-bold">Lyricist</a>
  </div>
  <div className="flex-none gap-2">
         <SigninButton />
        </div>
  </div>
      )
}