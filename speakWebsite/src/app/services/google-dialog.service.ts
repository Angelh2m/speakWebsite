import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GoogleDialogService {
  response: any[] = [];
  token: string = 'ya29.c.Elq_BYW95UDO8zXVxYsa6fBpZuQnm0TudPtlaYU-Ck5oDF9aOH0ecehQsurCJFTfnnO6JrIqeSLzCB3_2f_6PzQRu2nm8mITnMKyuwhd8JrNPy-TGsny8lCwQ5A';
  URL:string = 'https://dialogflow.googleapis.com/v2/projects/vze-bot/agent/sessions/8d31966d-6930-4d74-aec3-2c3ff27fa4d0:detectIntent';
  constructor(public http: HttpClient) { }

  serviceToken: any = '';

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
    return headers
  }

  getToken(){

    let url = 'http://localhost:3000/getFreshToken';

    return this.http.get(url)
      .map( (resp: any) =>{
        console.log('TOKEN FROM EXPRESS', resp.token.body);
        return resp.token.body
      })

  }

}
