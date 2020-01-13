/* tslint:disable */
/* eslint-disable */
/**
 * Open Dossard
 * Documentation de l\'API Open Dossard
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@opendossard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Departement
 */
export interface Departement {
    /**
     * 
     * @type {string}
     * @memberof Departement
     */
    departmentCode: string;
    /**
     * 
     * @type {string}
     * @memberof Departement
     */
    departmentName: string;
    /**
     * 
     * @type {string}
     * @memberof Departement
     */
    regionCode: string;
    /**
     * 
     * @type {string}
     * @memberof Departement
     */
    regionName: string;
}

export function DepartementFromJSON(json: any): Departement {
    return DepartementFromJSONTyped(json, false);
}

export function DepartementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Departement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'departmentCode': json['departmentCode'],
        'departmentName': json['departmentName'],
        'regionCode': json['regionCode'],
        'regionName': json['regionName'],
    };
}

export function DepartementToJSON(value?: Departement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'departmentCode': value.departmentCode,
        'departmentName': value.departmentName,
        'regionCode': value.regionCode,
        'regionName': value.regionName,
    };
}


