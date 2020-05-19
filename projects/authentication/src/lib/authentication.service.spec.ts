import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
    let httpTestingController: HttpTestingController;
    let service: AuthenticationService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [AuthenticationService],
            imports: [HttpClientTestingModule],
        });
    });

    it('should match the right data', () => {
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(AuthenticationService);
        const mockGot = {
            name: 'Jon Snow',
            gender: 'Male',
            culture: 'Northmen',
            born: 'In 283 AC',
        };
        service.fetchSnow().subscribe((data) => {
            expect(data.name).toEqual(mockGot.name);
            expect(data.gender).toEqual(mockGot.gender);
            expect(data.culture).toEqual(mockGot.culture);
            expect(data.born).toEqual(mockGot.born);
        });

        const req = httpTestingController.expectOne('https://www.anapioficeandfire.com/api/characters/583');

        expect(req.request.method).toEqual('GET');
        req.flush(mockGot);
    });
    afterEach(() => {
        httpTestingController.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
