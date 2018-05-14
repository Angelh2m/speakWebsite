import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from "@angular/common/http";
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GoogleDialogService {
  response: any[] = [];
  token: string = 'ya29.c.El-7BVxHBhdLA51Wo_fF19yuEPfLTU51ROR_knyOw6yuDEWhWKtbj_2E2c_7kmwchtX_MTTFN5-Lj2T2gn9W8BPJpZoNjNBbsU-LdRUvs3kUImCVHqGsX8caxK_47XttFw';

  constructor(public http: HttpClient) { }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
    return headers
  }

  getCall(myData: string){
    let url: "https://dialogflow.googleapis.com/v2/projects/vze-bot/agent/sessions/8d31966d-6930-4d74-aec3-2c3ff27fa4d0:detectIntent";
    
    let data = myData;
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`,
      'queryInput' : myData
    });

    console.log(headers);

    return this.http.post(url, {headers})
  }

}
