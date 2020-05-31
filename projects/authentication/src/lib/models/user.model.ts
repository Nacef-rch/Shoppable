//TODO: Still in work !
export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ) {}

    get token(): string {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}

export interface UserOnLogin {
    email: string;
    password: string;
}

export interface UserOnRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    handle: string;
}
