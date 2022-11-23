import { Directive, Input, ElementRef, HostListener } from '@angular/core';

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
    @Input() customImage: string = '';
    /**
     * @HostListener(event) nombrefunción(): tipo {} 
     * -> se encarga de escuchar los eventos de un host
     */
    @HostListener('error') handleError(): void {
        const nativeElement = this.elHost.nativeElement;
        nativeElement.src = this.customImage
    }

    /**
     * ElementRef -> asigna una referencia a un elemento
     */
    constructor(private elHost:ElementRef) { }
} 