function TheHeader() {
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-black/40 px-4 py-4 text-white backdrop-blur-md md:px-20">
      <div>
        <a className="text-2xl font-bold" href="#">
          Juice Labs
        </a>
      </div>
      <div className="flex gap-8">
        <a className="text-lg" href="#features">
          Features
        </a>
        <a className="text-lg" href="#produts">
          Products
        </a>
        <a className="text-lg" href="#testimontals">
          Testimontals
        </a>
      </div>
      <div>
        <button className="btn-primary">Shop now</button>
      </div>
    </header>
  );
}

export default TheHeader;
