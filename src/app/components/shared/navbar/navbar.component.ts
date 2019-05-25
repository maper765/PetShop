import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public user: User;
    public amountItemsCart = 0;

    constructor(private router: Router) { }

    ngOnInit() {
        this.user = Security.getUser();
        this.amountItemsCart = CartUtil.getAmountItemsCart();

        CartUtil.emitterAmountItemsCart.subscribe(
            qtd => this.amountItemsCart = qtd
        );
    }

    logout() {
        Security.clear();
        this.router.navigate(['/login']);
    }
}