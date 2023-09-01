import Image from "next/image";
import Logo from "./../../public/Sevima univ logo color.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main main_login">
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
            <div
              className="form-login__header"
              style={{ paddingBottom: "20px" }}
            >
              <div className="form-login__header-logo">
                <Image src={Logo} alt="Logo Kampus" />
              </div>
              <span className="form-login__header-separator" />
              <h1 className="form-login__header-name">SEVIMA University</h1>
            </div>
            <div className="form-login__content">
              <div
                className="form-login__content-wrapper"
                style={{ paddingBottom: "10px" }}
              >
                <h2 className="form-login__content-title">Daftar</h2>
                <p className="form-login__content-subtitle">
                  Daftarkan akun untuk merevolusi dunia pendidikan yang lebih
                  baik.
                </p>
              </div>
              <div className="form-login__content-main">
                <form action="#" method="post">
                  <div className="form-control">
                    <label htmlFor="username" className="form-control__label">
                      Nama<span className="important">*</span>
                    </label>
                    <div className="form-control__group">
                      <input
                        type="text"
                        className="form-control__input"
                        id="username"
                        placeholder="Masukkan nama"
                      />
                      <span data-clear="input" />
                    </div>
                  </div>
                  <div className="form-control">
                    <label htmlFor="email" className="form-control__label">
                      Email<span className="important">*</span>
                      <span data-tooltip="Masukkan email yang belum terdaftar">
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
                    <label
                      htmlFor="confirm-password"
                      className="form-control__label"
                    >
                      Password<span className="important">*</span>
                      <span data-tooltip="Masukkan ulang password sesuai dengan password sebelumnya">
                        <span className="icon icon-information-circle" />
                      </span>
                    </label>
                    <div className="form-control__group">
                      <input
                        type="password"
                        className="form-control__input"
                        id="confirm-password"
                        placeholder="Masukkan ulang password"
                        required
                      />
                      <span data-visibility="input" data-type="password" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn_primary">
                    Submit
                  </button>
                </form>
                {/* Link Sign Up */}
                <div className="link-signup">
                  <p className="link-signup__text">
                    Sudah memiliki akun?{" "}
                    <Link
                      className="link"
                      href="/signin"
                    >
                      Masuk Disini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
