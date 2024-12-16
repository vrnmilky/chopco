const Registration = ({setModalBox}) => {
    return (
        <>
        <h1>Registration</h1>
        <input id="login" placeholder='Login' type="text" / >
        <input id="password" placeholder='Password' type="password"/>
        <input id="password" placeholder='Password' type="password"/>
        <button>Зарегистрироваться</button>
        <a onClick={() => setModalBox('Login')} href="#!">Already registered? Login</a>
        </>
     );
}
 
export default Registration;