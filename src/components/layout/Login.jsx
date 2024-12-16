const Login = ({setModalBox}) => {
    return ( 
        <>
        <h1>Login</h1>
        <input id="login" placeholder='Login' type="text" / >
        <input id="password" placeholder='Password' type="password"/>
        <button>Войти</button>
        <a onClick={() => setModalBox('Registration')} href="#!">Need to register? Registration</a>
        </>
     );
}
 
export default Login;