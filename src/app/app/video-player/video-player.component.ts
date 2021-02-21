
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoPlayerComponent implements OnInit {
  // snapshotParam: string = "initial value";
  subscribedParam: string = "";
  videoId: string = "";
  videoSrc: string = "";
  badUrl: boolean = false;
  custTrascript: string = "";
  repTranscript: string = "";
  processTranscript :any = "";

  constructor(
    private readonly route: ActivatedRoute,
    private videoSerice: VideoServiceService
  ) { }

  ngOnInit() {
    //  this.snapshotParam = this.route.snapshot.paramMap.get("id") || '';
    // Subscribed
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id") || '';

      this.videoId = params.get("id") || '';
      if (this.videoId) {
        this.videoSrc = `https://static.chorus.ai/api/${this.videoId}.mp4`;
        this.getVideoTranscript(this.videoId);
      }
      else
        this.badUrl = true;
    });
  }


  getVideoTranscript(id: string) {
    this.videoSerice.getVideoTranscript(this.videoId).subscribe(res => {
      console.log(res);
      this.processTranscript = this.videoSerice.processTranscipt(res);
    })
  }



}
