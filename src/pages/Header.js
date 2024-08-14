import "./style/Header.css";

function Header () {
    return(
        <div>
            <header>
                <h1>AF ELETRÔNICA</h1>

                <nav>
                    <ul>
                        <li><a>Cadastro</a></li>
                        <li><a>Clientes</a></li>
                    </ul>
                </nav>                    
                <hr></hr>
            </header>
        </div>
    );
}

export default Header;