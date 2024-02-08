import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FootbarComponent } from '../footbar/footbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
// import { IGX_CAROUSEL_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-homep',
    templateUrl: './homep.component.html',
    styleUrls: ['homep.component.scss'],
    standalone: true,
    imports: [HammerModule, IGX_CAROUSEL_DIRECTIVES, RouterModule, MatIconModule,MatCardModule,MatButtonModule]
    /* or imports: [HammerModule, IgxCarouselComponent, IgxSlideComponent] */
})
export class HomepComponent {


}
