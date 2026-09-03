import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 antialiased">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between p-4 shadow-sm">
        <div>
          {/* Brand Logo / Header */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-100 pb-4 mb-4">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="font-semibold text-lg text-slate-900">AppName</span>
          </div>

          {/* Navigation Links Placeholder */}
          <nav className="space-y-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Navigation
            </p>
            {/* Add your NavLinks here */}
          </nav>
        </div>

        {/* Sidebar Footer / User Profile */}
        <div className="border-t border-slate-100 pt-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="text-sm">
              <p className="font-medium text-slate-900 leading-none">User Name</p>
              <p className="text-xs text-slate-500 mt-1">user@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md">
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            {/* Action buttons / Search / Profile menu */}
          </div>
        </header>

        {/* Page Content Viewport */}
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm min-h-[calc(100vh-8rem)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;