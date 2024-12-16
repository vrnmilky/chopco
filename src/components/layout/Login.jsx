const Login = ({setModalBox}) => {

    function Log(){
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            password: password
        }
    }

    return ( 
        <>
        <h1>Login</h1>
        <input id="login" placeholder='Login' type="text" / >
        <input id="password" placeholder='Password' type="password"/>
        <button onClick={Log}>Войти</button>
        <a onClick={() => setModalBox('Registration')} href="#!">Need to register? Registration</a>
        </>
     );
}
 
export default Login;