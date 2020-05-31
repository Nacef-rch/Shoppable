export interface AuthenticateSuccessType {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
}
