import logoImg from '../assets/logo.jpg';

export default function Header(){
    return <header id="main-header">
        <div id="title">
            <img  src={logoImg} alt="A restaurant" />
            <h1>ReactFood</h1>
        </div>
        <nav>Cart (0)</nav>
    </header>
}