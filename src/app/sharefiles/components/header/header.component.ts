import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  stick = false;
  dropMenu = false;
  dropMenuClose = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    window.onscroll = null;
    const html = document.getElementsByTagName('html')[0];
    html.style.overflowY = "";
  }

  ngAfterViewInit() {
    this.scrollCheck();
  }

  private scrollCheck() {
    const html = document.getElementsByTagName('html')[0];
    html.style.overflowY = "auto";
    window.onscroll = () => {
      const header = document.getElementsByTagName('header')[0];
      if (html.scrollTop >= header.clientHeight) {
        this.stick = true;
      } else {
        this.stick = false;
      }
    }
  }

  getit(){
    var drawal = document.querySelector<HTMLElement>('.linkList')!;
    var drawalOpen = document.querySelector<HTMLElement>('#open')!;
    var drawalClose = document.querySelector<HTMLElement>('#close')!;
    var mainLogo = document.querySelector<HTMLElement>('#mainLogo')!;
    drawal.style.width = "230px";
    setTimeout(() => {
      drawalOpen.style.display = "none";
      drawalClose.style.display = "inline";
      this.dropMenu = true;
      this.dropMenuClose = false;
    }, 500);
    setTimeout(() => {
      mainLogo.style.display = "none";
    }, 200);
  }

  closeIt(){
    var drawal = document.querySelector<HTMLElement>('.linkList')!;
    var drawalOpen = document.querySelector<HTMLElement>('#open')!;
    var drawalClose = document.querySelector<HTMLElement>('#close')!;
    var mainLogo = document.querySelector<HTMLElement>('#mainLogo')!;
    drawal.style.width = "0px";
    setTimeout(() => {
      mainLogo.style.display = "inline";
    }, 200);
    setTimeout(() => {
      drawalClose.style.display = "none";
      drawalOpen.style.display = "inline";
      this.dropMenu = false;
      this.dropMenuClose = true;
    }, 500);
  }

}
