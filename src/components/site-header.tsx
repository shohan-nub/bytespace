const asset = (name: string) => "/figma/" + name;

export function SiteHeader() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-20 h-[120px]">
      <div className="header-inner relative mx-auto flex h-full max-w-[1200px] items-center justify-between">
        <a aria-label="ByteSpace home" className="brand flex items-center gap-[8px]" href="#">
          <img alt="" className="h-[32px] w-[29px]" height="32" src={asset("bytespace-mark.svg")} width="29" />
          <span className="font-clash text-[24px] font-bold leading-none text-[#f5f5f6]">ByteSpace</span>
        </a>

        <nav aria-label="Main navigation" className="desktop-nav absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-base text-[#f5f5f6]">
          <a className="font-medium" href="#">Home</a>
          <a href="#courses">Courses</a>
          <a href="#creators">Creators</a>
        </nav>

        <div className="header-actions flex items-center gap-6 text-base text-[#f5f5f6]">
          <a className="desktop-action" href="#sign-in">Sign In</a>
          <a className="desktop-action" href="#join">Join Us</a>
          <a aria-label="Shopping bag" href="#cart">
            <img alt="" className="h-6 w-6" height="24" src={asset("shopping-bag.svg")} width="24" />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <a href="#">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a>
              <a href="#sign-in">Sign In</a><a href="#join">Join Us</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
