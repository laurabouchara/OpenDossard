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
import {
    FedeEnum,
    FedeEnumFromJSON,
    FedeEnumFromJSONTyped,
    FedeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface LicenceEntity
 */
export interface LicenceEntity {
    /**
     * 
     * @type {FedeEnum}
     * @memberof LicenceEntity
     */
    fede: FedeEnum;
    /**
     * 
     * @type {number}
     * @memberof LicenceEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    licenceNumber: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    gender: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    club: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    dept: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    birthYear: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    catea: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    catev: string;
    /**
     * 
     * @type {string}
     * @memberof LicenceEntity
     */
    saison: string;
}

export function LicenceEntityFromJSON(json: any): LicenceEntity {
    return LicenceEntityFromJSONTyped(json, false);
}

export function LicenceEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): LicenceEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fede': FedeEnumFromJSON(json['fede']),
        'id': json['id'],
        'licenceNumber': json['licenceNumber'],
        'name': json['name'],
        'firstName': json['firstName'],
        'gender': json['gender'],
        'club': json['club'],
        'dept': json['dept'],
        'birthYear': json['birthYear'],
        'catea': json['catea'],
        'catev': json['catev'],
        'saison': json['saison'],
    };
}

export function LicenceEntityToJSON(value?: LicenceEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fede': FedeEnumToJSON(value.fede),
        'id': value.id,
        'licenceNumber': value.licenceNumber,
        'name': value.name,
        'firstName': value.firstName,
        'gender': value.gender,
        'club': value.club,
        'dept': value.dept,
        'birthYear': value.birthYear,
        'catea': value.catea,
        'catev': value.catev,
        'saison': value.saison,
    };
}


