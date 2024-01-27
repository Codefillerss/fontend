import Image from "next/image";
import Link from "next/link";
import "../style.css";
const register = () => {
  return (
    <div className="login-page place-content-center flex min-h-screen items-center">
      <div className="w-[28rem] h-fit relative">
        <div className="logowrp py-4 flex place-content-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.png"
            alt="Logo"
            width={180}
            height={60}
            priority
          />
        </div>
        <div className="shadow-sm mt-10 border border-black-100 p-12 rounded-sm cstmlogin-box">
          <h3>Create account</h3>
          <form>
            <div className="form-group-mng">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group-mng">
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="form-group-mng">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-group-mng">
              <label>Password</label>
              <input type="text" placeholder="Password" />
            </div>
            <button className="login-btn">Verify phone number</button>
            <p className="sign-up-text">
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </form>
          <Image
            className="box-img"
            src="/box_two.png"
            width={100}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};
export default register;
