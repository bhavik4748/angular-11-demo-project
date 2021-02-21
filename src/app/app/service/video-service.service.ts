import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private http: HttpClient) { }

  getVideoTranscript(id: string) {
    return this.http.get(`https://static.chorus.ai/api/${id}.json`);
  }

  processTranscipt(transArr: any) {
    let rep = [], cust = [], ans = '';
    for (let obj of transArr) {
      if (obj.speaker == 'Cust')
        cust.push(obj);
      else
        rep.push(obj);
    }

    let finalArray = [...rep, ...cust];

    finalArray.sort((a, b) => {
      return a.time - b.time;
    })

    for (let obj of finalArray) {
      let className;
      if (obj.speaker == 'Cust')
        className = 'cust';
      else
      className = 'rep';
      ans += `<span class=${className} >${obj.speaker} </span>: <span> ${obj.snippet}</span> <br/>`;
    }
    return ans;
  }

}
