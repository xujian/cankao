import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <button mat-icon-button>
        <mat-icon svgIcon="menu"></mat-icon>
      </button>
      <h1 flex mat-truncate>参考</h1>
    </mat-toolbar-row>
  </mat-toolbar>`,
  styles: [
    ''
  ]
})

export class AppHeaderComponent {
  constructor(iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/menu.svg'));
  }
}
