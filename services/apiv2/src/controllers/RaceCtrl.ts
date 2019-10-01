import {EntityManager} from 'typeorm';

import {Race} from '../entity/Race';
import {Licence} from '../entity/Licence';
import {Competition} from '../entity/Competition';
import {ApiModelPropertyOptional, ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {InjectEntityManager} from '@nestjs/typeorm';

export class RaceRow {
    @ApiModelPropertyOptional()
    public id: number;
    @ApiModelPropertyOptional()
    public raceCode: string;
    @ApiModelPropertyOptional()
    public riderNumber: number;
    @ApiModelPropertyOptional()
    public numberMin: number;
    @ApiModelPropertyOptional()
    public numberMax: number;
    @ApiModelPropertyOptional()
    public surclassed: boolean;
    @ApiModelPropertyOptional()
    public licenceNumber: string;
    @ApiModelPropertyOptional()
    public name: string;
    @ApiModelPropertyOptional()
    public firstName: string;
    @ApiModelPropertyOptional()
    public club: string;
    @ApiModelPropertyOptional()
    public birthYear: string;
}

export class RaceCreate {
    @ApiModelPropertyOptional()
    public competitionId: number;
    @ApiModelPropertyOptional()
    public licenceNumber: string;
    @ApiModelPropertyOptional()
    public riderNumber: number;
    @ApiModelPropertyOptional()
    public raceCode: string;
}

export class RaceUpdate {
    @ApiModelPropertyOptional()
    public id: number;
    @ApiModelPropertyOptional()
    public licenceNumber: string;
    @ApiModelPropertyOptional()
    public riderNumber: number;
    @ApiModelPropertyOptional()
    public raceCode: string;
}

@Controller('/api/races')
@ApiUseTags('RaceAPI')
export class RacesCtrl {
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager,
    ) {
    }

    @Get()
    @ApiOperation({
        operationId: 'getAllRaces',
        title: 'Rechercher toutes les courses ',
        description: 'description'
    })
    @ApiResponse({status: 200, type: RaceRow, isArray: true})
    public async getAllRaces(): Promise<RaceRow[]> {

        const query = `select r.*, l.name, l."firstName", l."licenceNumber", l.club, l."birthYear"
                        from race r
                        join licence l on r."licenceId" = l.id`;
        return await this.entityManager.query(query);
    }

    @Post()
    @ApiOperation({
        operationId: 'create',
        title: 'Cree une nouvelle course ',
        description: 'description'
    })
    public async create(@Body() race: RaceCreate)
        : Promise<void> {

        const licence = await this.entityManager.createQueryBuilder(Licence, 'licence')
            .where('licence."licenceNumber" = :ln', {ln: race.licenceNumber})
            .getOne();

        const competition = await this.entityManager.findOne(Competition, race.competitionId);

        const newRace = new Race();
        newRace.raceCode = race.raceCode;
        newRace.riderNumber = race.riderNumber;
        newRace.licence = licence;
        newRace.competition = competition;

        await this.entityManager.save(newRace);
    }

    @Put()
    @ApiOperation({
        operationId: 'update',
        title: 'Mets à jour une course existante ',
        description: 'description'
    })
    public async update(@Body() race: RaceUpdate)
        : Promise<void> {

        const toUpdate = await this.entityManager.findOne(Race, race.id);
        toUpdate.riderNumber = race.riderNumber;
        toUpdate.raceCode = race.raceCode;
        await this.entityManager.save(toUpdate);
    }
}