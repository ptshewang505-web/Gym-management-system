
function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="glass-panel auth-panel">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
