import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav class="navbar navbar-expand-sm bg-body-tertiary">
                <div class="container-fluid">
                    <div class="navbar-brand">Lois Mata's Portfolio</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                            <li class="nav-item">
                                <div class="nav-link"><NavLink to="/">Home</NavLink></div>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link"><NavLink to="/about">About</NavLink></div>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link"><NavLink to="/projects">Projects</NavLink></div>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link"><NavLink to="/contact">Contact</NavLink></div>
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



