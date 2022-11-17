import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

/**
 * 
 * @Pipe -> Este decorador se utiliza para declarar un pipe (filtro)
 * 
 * Pipe({
 *      name: 'nombre del pipe'
 * })
 */
@Pipe({
    name: 'sortList'
})

export class SortListPipe implements PipeTransform {

    // La función transform se implementa para transformar los datos
    transform(
        tracks: Array<any>, 
        args: string,
        sorting: string = 'asc'
    ): TrackModel[] {
        try {
            if (tracks === null) {
                return tracks;
            } else {
                const temp = tracks.sort((a, b) => {
                    if (a[args] < b[args]) {
                        return -1;
                    } 
                    else if (a[args] === b[args]) {
                        return 0;
                    }
                    else if (a[args] > b[args]) {
                        return 1;
                    }
                    return 1;
                });
                return sorting === 'asc' ? temp : temp.reverse();
            }
        } catch (error) {
            console.log("Se ha producido un error: " + error)
            return tracks;
        }
    }
}