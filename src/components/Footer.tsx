function Footer() {
  return (
    <footer className="bg-kidney-900 text-kidney-300 pt-12 px-8 pb-4 mt-auto">
      <div className="flex justify-between max-w-[1200px] mx-auto gap-8 flex-wrap max-md:flex-col">
        <div className="max-w-[350px]">
          <span className="text-xl font-bold text-kidney-200">
            &#9829; Kidney Connect
          </span>
          <p className="mt-2 text-sm leading-relaxed text-[#c9a8a8]">
            Connecting patients, donors, and communities for a healthier future.
          </p>
        </div>
        <div className="flex gap-12 max-md:gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-kidney-200 text-sm uppercase tracking-wide mb-1">
              Platform
            </h4>
            <a href="/blog" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">Patient Stories</a>
            <a href="/funds" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">Fundraising</a>
            <a href="/advice" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">Education</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-kidney-200 text-sm uppercase tracking-wide mb-1">
              About
            </h4>
            <a href="#" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">ADER Foundation</a>
            <a href="#" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">Our Mission</a>
            <a href="#" className="text-[#c9a8a8] text-sm hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#4a2e2e] mt-8 pt-4 text-center text-xs text-[#8a6b6b]">
        <p>In collaboration with ADER Foundation | SDG Challenge 2025-2026 | La Salle - Universitat Ramon Llull</p>
      </div>
    </footer>
  );
}

export default Footer;
