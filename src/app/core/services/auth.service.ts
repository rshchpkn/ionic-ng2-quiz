import { Injectable, NgZone } from "@angular/core";
import { Restangular } from "ng2-restangular";
import * as _ from 'lodash';
import  Auth0Lock from "auth0-lock";
import { Storage } from '@ionic/storage';
import { JwtHelper, AuthHttp, tokenNotExpired } from "angular2-jwt";




@Injectable()
export class AuthService {
    jwtHelper: JwtHelper = new JwtHelper();
    // auth0 = new Auth0({clientID: 'CpWt6k14LAycDaBCxAuXHFhangqhqpqb', domain: 'rshchpkn.eu.auth0.com' });
    lock = new Auth0Lock('CpWt6k14LAycDaBCxAuXHFhangqhqpqb', 'rshchpkn.eu.auth0.com', {
        auth: {
            redirect: false,
            params: {
                scope: 'openid offline_access',
            }
        }
    });
    storage: Storage = new Storage();
    refreshSubscription: any;
    user: Object;
    zoneImpl: NgZone;
    idToken: string;

    constructor(private authHttp: AuthHttp, zone: NgZone) {
        this.zoneImpl = zone;
        // Check if there is a profile saved in local storage
        this.storage.get('profile').then(profile => {
            this.user = JSON.parse(profile);
        }).catch(error => {
            console.log(error);
        });

        this.storage.get('id_token').then(token => {
            this.idToken = token;
        });

        this.lock.on('authenticated', authResult => {
            this.storage.set('id_token', authResult.idToken);
            this.idToken = authResult.idToken;

            // Fetch profile information
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }

                profile.user_metadata = profile.user_metadata || {};
                this.storage.set('profile', JSON.stringify(profile));
                this.user = profile;
            });

            this.lock.hide();

            this.storage.set('refresh_token', authResult.refreshToken);
            this.zoneImpl.run(() => this.user = authResult.profile);
            // Schedule a token refresh
            // this.scheduleRefresh();

        });
    }

    public authenticated() {
        return tokenNotExpired('id_token', this.idToken);
    }

    public login() {
        // Show the Auth0 Lock widget
        this.lock.show();
    }

    public logout() {
        this.storage.remove('profile');
        this.storage.remove('id_token');
        this.idToken = null;
        this.storage.remove('refresh_token');
        this.zoneImpl.run(() => this.user = null);
        // Unschedule the token refresh
        // this.unscheduleRefresh();
    }
}