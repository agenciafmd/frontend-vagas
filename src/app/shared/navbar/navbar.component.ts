import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<nav>
    <input id="nav-toggle" type="checkbox" />
    <div class="logo"><img src="../../../assets/logo/Pikachu-PNG-Transparent.png" alt="logo do pikachu" /></div>
    <ul class="links">
      <li tabindex="1"><a href="#link-one">Link para seção 1</a></li>
      <li><a href="#link-two">Link para seção 2</a></li>
      <li><a href="#link-three">Link para seção 3</a></li>
      <li><a href="#link-four">Link para o footer</a></li>
    </ul>
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
  </nav>`,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
