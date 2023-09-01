import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Sevima univ logo color.svg";
import GoogleLogo from "../../quantum/assets/images/logo-google.svg";

const SignIn = () => {
  return (
    <div className="main main_login">
      <div className="flex flex-row flex-wrap">
        <div className="h-screen hidden md:flex w-2/4 px-2 bg-blue-800">
          <div className="pl-16 pt-16 pr-26">
            <h2 className="text-white text-3xl md:w-4/5">
              Menembus Batasan Ilmu: Selamat Datang di Sevima University!
            </h2>
            <p className="text-white py-4 md:w-4/5">
              Sevima University adalah jendela menuju pengetahuan yang tak
              terbatas. Dengan kurikulum yang mendalam dan instruktur terbaik di
              bidangnya, kami mengundang Anda untuk merajut mimpi dan mewujudkan
              potensi Anda.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-4/8 md:w-2/4 px-2 align-content-center">
          <div className="form-login px-10" style={{ maxWidth: "100%" }}>
            <div className="form-login__header">
              <div className="form-login__header-logo">
                <Image src={Logo} alt="Logo Kampus" />
              </div>
              <span className="form-login__header-separator" />
              <h1 className="form-login__header-name">SEVIMA University</h1>
            </div>
            <div className="form-login__content">
              <div className="form-login__content-wrapper">
                <h2 className="form-login__content-title">Masuk</h2>
                <p className="form-login__content-subtitle">
                  Masuk ke akun yang telah terdaftar untuk merevolusi dunia
                  pendidikan yang lebih baik.
                </p>
              </div>
              <div className="form-login__content-main">
                {/* Sign In With Google */}
                <button className="btn btn_outline">
                  <Image src={GoogleLogo} alt="" /> Sign In Dengan Google
                </button>
                <div className="hr-intext">
                  <span className="hr-intext__line" />
                  <p className="hr-intext__text">Atau login dengan Email</p>
                </div>
                <form action="#" method="post">
                  <div className="form-control">
                    <label htmlFor="email" className="form-control__label">
                      Email<span className="important">*</span>
                      <span data-tooltip="Masukkan email yang sudah terdaftar">
                        <span className="icon icon-information-circle" />
                      </span>
                    </label>
                    <div className="form-control__group">
                      <input
                        type="email"
                        className="form-control__input"
                        id="email"
                        placeholder="Masukkan email dengan benar"
                      />
                      <span data-clear="input" />
                    </div>
                  </div>
                  <div className="form-control">
                    <label htmlFor="password" className="form-control__label">
                      Password<span className="important">*</span>
                      <span data-tooltip="Masukkan password setidaknya menggunakan 1 symbol">
                        <span className="icon icon-information-circle" />
                      </span>
                    </label>
                    <div className="form-control__group">
                      <input
                        type="password"
                        className="form-control__input"
                        id="password"
                        placeholder="Masukkan password"
                        required
                      />
                      <span data-visibility="input" data-type="password" />
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="form-control__checkbox"
                        id="remember-me"
                        name="group"
                      />
                      <label
                        htmlFor="remember-me"
                        className="form-control__label-checkbox"
                      >
                        Ingat Saya
                      </label>
                    </div>
                    <div className="form-control__float-right">
                      <Link className="link" href="#">
                        Lupa Password?
                      </Link>
                    </div>
                  </div>
                  <button type="submit" className="btn btn_primary">
                    Sign In
                  </button>
                </form>
                {/* Link Sign Up */}
                <div className="link-signup">
                  <p className="link-signup__text">
                    Belum punya akun?{" "}
                    <Link
                      className="link"
                      href="/signup"
                    >
                      Daftar Disini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
