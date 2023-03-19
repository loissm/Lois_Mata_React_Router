import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav class="navbar navbar-expand-sm bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Lois Mata's Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><NavLink to="/">Home</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><NavLink to="/about">About</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><NavLink to="/projects">Projects</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><NavLink to="/contact">Contact</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}



