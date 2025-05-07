import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const video = document.querySelector('video') as HTMLVideoElement;
      
      // Log video source for debugging
      console.log('Video source:', video?.querySelector('source')?.src);
      
      video?.addEventListener('error', (e) => {
        console.error('Video error:', video.error);
        console.error('Network state:', video.networkState);
        console.error('Ready state:', video.readyState);
      });

      video?.addEventListener('canplay', () => {
        console.log('Video can play');
        video.play().catch(e => {
          console.error('Video play failed:', e);
          // Fallback to muted autoplay if needed
          video.muted = true;
          video.play().catch(console.error);
        });
      });

      // Additional debug info
      setTimeout(() => {
        console.log('Video after 3s - readyState:', video?.readyState);
        if (video?.readyState > 0) {
          console.log('Video duration:', video.duration);
          console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
        }
      }, 3000);
    }
  }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }
}
