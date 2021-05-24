/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';

import { ApiService } from '@core/services/api/api.service';

export const envo = {
    baseUrl: 'https://jsonplaceholder.typicode.com'
};

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;
    const testEndpoint = '/test_api';
    const url = `${envo.baseUrl}${testEndpoint}`;
    const mockData: any = {
        success: 'This is a success response',
        error: new Error(`500 - ERROR Http failure response for ${url}: 500 ERROR`)
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
    });

    beforeEach(() => {
        envo.baseUrl = '';
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('GET', () => {
        it('should return success response', async(() => {
            // GIVEN
            // WHEN
            service.get(url).subscribe((response: any) => {
                expect(response).toEqual(mockData.success);
            });
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('GET');
            req.flush(mockData.success, { status: 200, statusText: 'OK' });
            expect(req.request.responseType).toBe('json');
        }));

        it('should return error response', async(() => {
            // GIVEN
            // WHEN
            service.get(url).subscribe(
                () => {},
                (response: any) => {
                    expect(response.message).toEqual(mockData.error.message);
                }
            );
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('GET');
            req.flush(mockData.error, { status: 500, statusText: 'ERROR' });
            expect(req.request.responseType).toBe('json');
        }));
    });

    describe('POST', () => {
        it('should return success response', async(() => {
            // GIVEN
            // WHEN
            service.post(url, {}).subscribe((response: any) => {
                expect(response).toEqual(mockData.success);
            });
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('POST');
            req.flush(mockData.success, { status: 200, statusText: 'OK' });
            expect(req.request.responseType).toBe('json');
        }));

        it('should return error response', async(() => {
            // GIVEN
            // WHEN
            service.post(url, {}).subscribe(
                () => {},
                (response: any) => {
                    expect(response.message).toEqual(mockData.error.message);
                }
            );
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('POST');
            req.flush(mockData.error, { status: 500, statusText: 'ERROR' });
            expect(req.request.responseType).toBe('json');
        }));
    });

    describe('PUT', () => {
        it('should return success response', async(() => {
            // GIVEN
            // WHEN
            service.put(url, {}, true).subscribe((response: any) => {
                expect(response).toEqual(mockData.success);
            });
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('PUT');
            req.flush(mockData.success, { status: 200, statusText: 'OK' });
            expect(req.request.responseType).toBe('json');
        }));

        it('should return error response', async(() => {
            // GIVEN
            // WHEN
            service.put(url, {}).subscribe(
                () => {},
                (response: any) => {
                    expect(response.message).toEqual(mockData.error.message);
                }
            );
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('PUT');
            req.flush(mockData.error, { status: 500, statusText: 'ERROR' });
            expect(req.request.responseType).toBe('json');
        }));
    });

    describe('DELETE', () => {
        it('should return success response', async(() => {
            // GIVEN
            // WHEN
            service.delete(url).subscribe((response: any) => {
                expect(response).toEqual(mockData.success);
            });
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('DELETE');
            req.flush(mockData.success, { status: 200, statusText: 'OK' });
            expect(req.request.responseType).toBe('json');
        }));

        it('should return error response', async(() => {
            // GIVEN
            // WHEN
            service.delete(url).subscribe(
                () => {},
                (response: any) => {
                    expect(response.message).toEqual(mockData.error.message);
                }
            );
            // THEN
            const req = httpMock.expectOne(url);
            expect(req.request.method).toBe('DELETE');
            req.flush(mockData.error, { status: 500, statusText: 'ERROR' });
            expect(req.request.responseType).toBe('json');
        }));
    });
});
