import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Store {
  constructor(public mdStatus: string,
              public requestParameterForResponse: string,
              public amount: string,
              public currency: string,
              public clientid: string,
              public storetype: string,
              public islemtipi: string,
              public storekey: string,
              public hashAlgorithm: string,
              public lang: string,
              public taksit: string,
              public oid: string,
              public md: string,
              public cavv: string,
              public eci: string,
              public xid: string,
              public pan: string,
              public expMonth: string,
              public expYear: string,
              public cv2: string,
              public Response: string) {
  }
}


@Injectable()
export class StoreService {

  constructor(private http: HttpClient) {
  }


  public variablePay(movie: Store) {
    return this.http.post<void>('http://localhost:8081/pay', movie);
  }

  public centerPay(movie: Store) {
    return this.http.post<void>('http://localhost:8080/fim/est3Dgate', movie);
  }


}
