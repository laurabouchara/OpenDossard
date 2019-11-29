import * as React from 'react';
import {useEffect, useState} from 'react';

import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {apiRaces} from '../util/api';
import {RaceRow} from '../sdk';
import _ from 'lodash';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface IStatsPageProps {
    items: any[];
    classes: any;
}

const StatsPage = (props: IStatsPageProps) => {
    const [optionNbRidersChart, setOptionNbRidersChart] = useState<Highcharts.Options>();
    const nbRidersByCourseChart = (rows: RaceRow[]) => {
        const options : Highcharts.Options = {
            title: {
                text: 'Nombre de coureurs par course',
            },
            xAxis: {
                categories: ['Course A', 'Course B', 'Course C'],
            },
            series: [{
                type: 'column',
                name: 'Nombre de coureurs'
            }]
        }
        const nbRidersByCourse = _.groupBy(rows, (item: RaceRow) => item.competitionId);
        console.log(JSON.stringify(nbRidersByCourse))
        // @ts-ignore
        options.series[0].data = Object.keys(nbRidersByCourse).map(item => nbRidersByCourse[item].length);
        // @ts-ignore
        options.xAxis.categories = Object.keys(nbRidersByCourse).map(item => nbRidersByCourse[item][0].name)
        setOptionNbRidersChart(options)
    };

    useEffect(() => {
            const getAllRaces = async () => {
                const rows = await apiRaces.getAllRaces();
                nbRidersByCourseChart(rows);
            };
            getAllRaces();
        }
        , []);

    return (

        <div style={{padding: 10}}>

            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                    <Typography noWrap={false}>Graphiques et statistiques</Typography>
                </Grid>
            </Grid>

            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={optionNbRidersChart}
                />
            </div>
        </div>
    );

};

export default StatsPage;
