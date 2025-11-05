interface NavbarProps {
  onRegisterClick: () => void
  onLoginClick: () => void
}

const Navbar = ({ onRegisterClick, onLoginClick }: NavbarProps) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[92%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/white-logo.png"
              alt="Logo"
              className="h-10 w-auto select-none"
              draggable={false}
            />
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onLoginClick}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


