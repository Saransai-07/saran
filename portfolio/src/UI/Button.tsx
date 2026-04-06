type Props = {
    children: React.ReactNode;
    onClick?: () => void;
  };
  
  const Button = ({ children, onClick }: Props) => {
    return (
      <button
        onClick={onClick}
        className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/30"
      >
        {children}
      </button>
    );
  };
  
  export default Button;