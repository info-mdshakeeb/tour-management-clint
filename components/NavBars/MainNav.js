import Container from "../ui/Container";

const MainNav = () => {
    return (
        <div className="border-b shadow-sm sticky top-0">
            <Container>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Link</a></li>
                            <li>
                                <details>
                                    <summary>
                                        Parent
                                    </summary>
                                    <ul className="p-2 bg-base-100">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MainNav;