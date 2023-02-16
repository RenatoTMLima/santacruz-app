import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="dashboard">Entrar</Link>
    </div>
  );
}
