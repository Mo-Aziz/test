function authenticate(login, password){

    if(login === 'login' && password === 'password')
    {
        return' you are logged in';
    }else{
        return 'login process was not successful'
    }
}