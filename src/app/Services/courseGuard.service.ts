import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AutheService } from "./auth.service";

@Injectable()
export class CourseGuardService{
    constructor(private authService: AutheService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean{
        if(this.authService.isAuthenticated()){
            return true
        }
        else{
            this.router.navigate([""])
            return false
        }
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean{
        if(this.authService.isAuthenticated()){
            return true
        }
        else{
            this.router.navigate([""])
            return false
        }
    }
    canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean{
        if(this.authService.isAuthenticated()){
            return true
        }
        else{
            this.router.navigate([""])
            return false
        }
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean{
        if(this.authService.isAuthenticated()){
            return true
        }
        else{
            this.router.navigate([""])
            return false
        }
    }
}