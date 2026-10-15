const LoginLeft = () => (
  <aside className="relative hidden min-h-screen w-2/5 shrink-0 flex-col justify-between overflow-hidden bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat p-10 select-none lg:flex">
    <div className="flex items-center gap-2.5">
      <img src="/logo.svg" alt="" className="h-8 w-7" />
      <span className="text-[2rem] font-semibold tracking-tight text-white">
        Sristi AI
      </span>
    </div>

    <div className="max-w-md">
      <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-white">
        Build your presence on web
      </h2>
      <p className="mt-4 text-[15px] leading-6 text-white/85">
        Describe what you need, preview instantly, and customize your site in
        real-time. React with clean JSX, verified layouts, and instant code
        exports.
      </p>
      <p className="mt-10 text-sm text-white/85">
        Copyright {new Date().getFullYear()} Builder AI
      </p>
    </div>
  </aside>
);

export default LoginLeft;
