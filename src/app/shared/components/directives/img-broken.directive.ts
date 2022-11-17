import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * @Directive-> Alteran la estructura del DOM, agregando, eliminando 
 * y manipulando los elementos host a los que están unidos.
 */
@Directive({
    
    selector: 'img[appImgBroken]' 
})
/**
 * selector -> como se llamará a nuestra directiva en el html,
 * en esta directiva es posible especificar los elementos que serán,
 * afectados: selector: 'etiqueta[nombreSlector]' 
 * 
 */

export class ImgBrokenDirective {
    /**
     * @HostListener(event) nombrefunción(): tipo {} 
     * -> se encarga de escuchar los eventos de un host
     */
    @HostListener('error') handleError(): void {
        const nativeElement = this.elHost.nativeElement;
        nativeElement.src = 'https://pbs.twimg.com/profile_images/1341847898271657984/klVuCa_9_400x400.jpg'
    }

    /**
     * ElementRef -> asigna una referencia a un elemento
     */
    constructor(private elHost:ElementRef) {
        console.log(this.elHost)
    }
} 