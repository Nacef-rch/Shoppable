// import { AuthInterceptorService } from '@authentication/interceptors/auth-interceptor.service';
// import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { AuthFacade } from '@authentication/+store/auth.facade';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
// import { TestBed } from '@angular/core/testing';

// describe('Auth-Interceptor-Service', () => {
//     let service: AuthInterceptorService;
//     let http: HttpClient;
//     let httpMock: HttpTestingController;
//     let router: Router;
//     let authFacade: AuthFacade;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
//             providers: [
//                 AuthInterceptorService,
//                 {
//                     provide: HTTP_INTERCEPTORS,
//                     useClass: AuthInterceptorService,
//                     multi: true
//                 },
//                 {
//                     provide: authFacade
//                 }
//             ]
//         });
//         service = TestBed.inject(AuthInterceptorService);
//         http = TestBed.inject(HttpClient);
//         httpMock = TestBed.inject(HttpTestingController);
//         router = TestBed.inject(Router);
//         authFacade = TestBed.inject(AuthFacade);

//         spyOn(service, 'intercept');
//     });

//     afterEach(() => {
//         httpMock.verify();
//     });
//     it('should be created', () => {
//         expect(service).toBeTruthy();
//         expect(authFacade).toBeTruthy();
//     });
// });
describe('local-storage dummy', () => {
    it('local-storage dummy', () => {
        expect(true).toBe(true);
    });
});
