export const Footer = () => {
  return (
    <section className="bg-m-verydark-blue py-16 px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            <div className="md:flex-1/4">
                <img src="/images/logo-footer.svg" alt="logo footer" />
            </div>
            <div className="text-white md:flex-2/4 text-center md:text-left flex flex-col md:flex-row gap-8 md:justify-between">
                <div>
                    <p className="pb-2"><strong>Features</strong></p>
                    <div className="text-m-gray">
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                </div>
                <div>
                    <p className="pb-2"><strong>Resources</strong></p>
                    <div className="text-m-gray">
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                </div>
                <div>
                    <p className="pb-2"><strong>Company</strong></p>
                    <div className="text-m-gray">
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4 md:flex-1/4">
                <a href="#">
                    <img className="hover:text-m-cyan" src="/images/icon-facebook.svg" alt="facebook" />
                </a>
                <a href="#">
                    <img className="hover:text-m-cyan" src="/images/icon-twitter.svg" alt="twitter" />
                </a>
                <a href="#">
                    <img className="hover:text-m-cyan" src="/images/icon-pinterest.svg" alt="pinterest" />
                </a>
                <a href="#">
                    <img className="hover:text-m-cyan" src="/images/icon-instagram.svg" alt="instagram" />
                </a>
            </div>
        </div>
    </section>
  )
}
