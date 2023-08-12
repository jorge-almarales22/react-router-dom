import {Link} from 'react-router-dom'
export const Navbar = ({logout}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-item" to="/home">
                    <span className="nav-link active">Home</span>
                </Link>
                <Link className="nav-item" to="/modules">
                    <span className="nav-link" >Modules</span>
                </Link>
                <Link className="nav-item" to="/admin">
                    <span className="nav-link" >Admin</span>
                </Link>
            </ul>
            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </span>
                <ul className="dropdown-menu">
                    <Link to="/login"><span className="dropdown-item" >Login</span></Link>
                    <span onClick={() => logout()}><span className="dropdown-item" >Logout</span></span>
                </ul>
                </li>
            </div>
        </div>
    </nav>
  )
}
