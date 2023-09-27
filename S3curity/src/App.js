import LOGOS31 from "./LOGOS31.png";

export function App() {

  return ( 
    <div className="container">
      <header className="header">
        <img src={ LOGOS31 } alt=""/>
      </header>

      <form>
        <div className="inputContainer">
          <input type="text" name="email" id="email" placeholder="E-mail"/>
        </div>

        <div className="inputContainer">
          <input type="password" name="senha"id="password"placeholder="Senha"/>
        </div>

        <a href="a">Esqueceu sua senha?</a>

        <button className="button">Entrar</button>
        
      </form>
    </div>
  );
}
