import Link from "next/link";
import Image from "next/image";
import LogoFooter from '../../public/Logo Sevima Footer.svg'
import {FacebookIcon, TwitterIcon, LinkedInIcon, YoutubeIcon, InstagramIcon} from '../../public/Social Icons'


function Footer() {
  return (
    <section className="lg:px-[100px] mt-[70px] mb-[10px]">
      <div className="flex justify-between">
        <div className="w-[355px] mr-[250px]">
            <Image src={LogoFooter} alt="Sevima Logo Footer"/>
        </div>
        <div className="grid cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-[#A3A3A3]">Company</span>
            <Link href="#" className="font-medium">
              Kelas
            </Link>
            <Link href="#" className="font-medium">
              Product
            </Link>
            <Link href="#" className="font-medium">
              Forum
            </Link>
            <Link href="#" className="font-medium">
              Kursus
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-[147px]">
            <span className="text-[#A3A3A3]">Link</span>
            <Link href="#" className="font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="font-medium">
              Term & Condition
            </Link>
            <Link href="#" className="font-medium">
              FAQ's
            </Link>
          </div>
        </div>
        <div className="form-control form-control_lg ml-[100px]">
        <label className="font-semibold">Newsletter</label>
          <div className="form-control__group gap-6">
            <input
              type="email"
              placeholder="Masukan Email Address Anda"
              style={{borderBottom: '1px solid #171717', width: '226px', height: "46px"}}
            />
            <button type="button" className="btn btn_primary btn_lg">Submit</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 h-[88px]">
        <span className="text-[#A3A3A3] my-auto">© 2022 Sevima University® Global Inc.</span>
        <div className="social flex justify-between gap-2 my-auto">
            <Link href='/'>
                <span className="">
                    <Image src={FacebookIcon} alt="Facebook Icon" />
                </span>
            </Link>
            <Link href='/'>
                <span className="">
                    <Image src={LinkedInIcon} alt="Linked In Icon" />
                </span>
            </Link>
            <Link href='/'>
                <span className="">
                    <Image src={TwitterIcon} alt="Twitter Icon" />
                </span>
            </Link>
            <Link href='/'>
                <span className="">
                    <Image src={YoutubeIcon} alt="Youtube Icon" />
                </span>
            </Link>
            <Link href='/'>
                <span className="">
                    <Image src={InstagramIcon} alt="Instagram Icon" />
                </span>
            </Link>
        </div>
        <div className="flex justify-between gap-4 my-auto">
            <Link href="/"><span className="text-[#525252] font-medium">Terms of Service</span></Link>
            <Link href="/"><span className="text-[#525252] font-medium">Privacy Policy</span></Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
