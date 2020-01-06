import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {FederationEntity} from './federation.entity';
import {ClubEntity} from './club.entity';
import {ApiProperty} from '@nestjs/swagger';
import {CompetitionInfo} from "./competition-info";
import {PricingInfo} from "./pricing-info";

/**
 * Cette énum représente les catégories gérées par une épreuve
 */
export enum Category {
    PREMIERE = '1ere',
    SECONDE = '2eme',
    TROISIEME = '3eme',
    QUATRIEME = '4eme',
    CINQUIEME = '5eme',
    CADETS = 'Cadets',
    MINIMES = 'Minimes',
    FEMININES = 'Feminines',
}

export enum CompetitionType {
    CX = 'CX',
    ROUTE = 'ROUTE',
    VTT = 'VTT',
    AUTRE = '',
}

/**
 * Entité représentant une fichier épreuve.
 * Une épreuve contient ensuite une ou plusieurs courses
 */
@Entity({name: 'competition'})
export class CompetitionEntity {

    @PrimaryGeneratedColumn()
    public id: number;
    /**
     * La eventDate de l'épreuve au format JS
     */
    @Column({nullable: false})
    @ApiProperty({type: 'string', format: 'date-time'})
    @Index()
    public eventDate: Date;
    /**
     * La référence du club organisateur
     */
    @ManyToOne((type) => ClubEntity)
    @JoinColumn()
    public club: ClubEntity;
    /**
     * Le nom de l'épreuve
     */
    @Column({nullable: true})
    public name: string;
    /**
     * Le code postal correspondant à la commune
     */
    @Column({nullable: false})
    public zipCode: string;
    /**
     * L'identifiant OpenRunner du circuit, plat/vallonné/montagneux
     */
    @Column({nullable: true})
    public info?: string;
    /**
     * La liste des catégories de valeurs concernées par l'épreuve
     * [PREMIERES, SECONDES, QUATRIEMES, CADETS, ...]
     */
    @Column('simple-array')
    public categories: Category[];

    /**
     * Toutes les informations concernant la sécurité, le nom du ou des responsables
     * Les tarifs et les conditions d'inscription
     */
    @Column({nullable: true})
    public observations?: string;

    /**
     * Les différents tarifs au format JSON de la manière suivante :
     *  {'Non Licenciés' : 10, 'FSGT' : 7, 'UFOLEP' : 9}
     */
    @Column({type: 'json', nullable: true})
    public pricing?: Array<PricingInfo>;

    /**
     * Liste des courses ['1/2/3','4/5']
     */
    @Column({nullable: true})
    @Column('simple-array')
    public races?: string[];

    @Column({
        type: 'enum',
        name: 'fede',
        enum: FederationEntity,
        nullable: true,
        default: FederationEntity.FSGT,
    })
    @ApiProperty({enum: FederationEntity})
    fede: FederationEntity;

    @Column({
        type: 'enum',
        enum: CompetitionType,
        nullable: true,
        default: CompetitionType.ROUTE,
    })
    competitionType?: CompetitionType;

    @Column({type: 'json', nullable: true})
    competitionInfo?: Array<CompetitionInfo>;

    @Column({nullable: true})
    lieuDossard?: string;

    @Column({nullable: true})
    lieuDossardGPS: string;

    @Column({nullable: true})
    longueurCircuit: string;

    @Column({nullable: true})
    siteweb: string;

    @Column({nullable: true})
    facebook: string;

    @Column({nullable: true})
    contactEmail: string;

    @Column({nullable: true})
    contactPhone: string;

    @Column({nullable: true})
    contactName: string;

}
