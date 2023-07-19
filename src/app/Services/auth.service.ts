export class AutheService{
    loggedIn: boolean = false;
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
    isAuthenticated(){
        return this.loggedIn;
    }
}