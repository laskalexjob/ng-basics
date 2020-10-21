import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', { static: true }) infoRef: ElementRef

  constructor() {
    console.log('Constructor');
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')

  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Oninit');
  }
}
