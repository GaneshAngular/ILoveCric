import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('color') color=''
  constructor(private ref:ElementRef,private render:Renderer2) { }

    ngOnInit(){
      const element:HTMLElement=this.ref.nativeElement
      element.style.background=this.color||'yellow'
    }
}
