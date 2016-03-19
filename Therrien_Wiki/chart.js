$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Homocide, suicide and unintentional firearm deaths, 2013 '
        },
        subtitle: {
            text: 'Click the columns to view versions. NVDRS States (AK, CO, GA, KY, MA, MD, NC, NJ, NM, OH, OK, OR, RI, SC, UT, VA, WI )	Source: <a href="https://wisqars.cdc.gov:8443/nvdrs/nvdrsDisplay.jsp">wisqars.cdc.gov</a>. '
        
        },
       
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total deaths'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> <br/>'
        },

        series: [{
            name: 'Cause of Death',
            colorByPoint: true,
            data: [{
                name: 'Homocides',
                y: 4366,
                drilldown: 'Homocides'
            },  {
                name: 'Suicides',
                y: 14452,
                drilldown: 'Suicides'
            },
            {
                name: 'Unintentional firearm deaths',
                y: 150,
                drilldown: 'Unintentional'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Homocides',
                id: 'Homocides',
                data: [
['unknown circumstances ',	1010 ],
['Intimate partner violence related',	693	],
['Precipitated by another crime',	1421	],
['Crime in progress',	1010	],
['Drug involvement',	468	],
['Brawl (mutual physical fight)',	90],
['Jealousy',109],
['Person Used Weapon',	353	],
['Gang related',	200	],
['Victim was a bystander',	52	],
['Mercy killing',	5	],
['Justifiable self defense/law enforcement',	284],	
['Victim was intervener assisting crime victim',	30],
['Drive-by shooting',	94],
['Injury occurred during an argument',	1,223],	
['Walk-by assault',	78],
['Other homicide circumstance',	450],
['Other legal intervention circumstance',	39	],
                         
                ]
            }, {
                name: 'Suicides',
                id: 'Suicides',
                data: [
[' Unknown circumstances',	1761],
['Current Depressed Mood',	4519],
['Current Mental Health Problem',	5762],
['Current treatment for mental illness',	4081	],
['Ever Treated for Mental Problem',	5021	],
['Person left a suicide note',	3938	],
['Disclosed intent to commit suicide',	2962	],
['History of Suicide Attempts',	2401	],
['Crisis in past 2 weeks',	3923	],
['Intimate partner problem',	3487	],
['Eviction or loss of home',	450	],
['Other relationship problem',	332	],
['Physical health problem',	2730	],
['Alcohol Dependence',	2442	],
['Other Substance Problem',	2742	],
['Recent criminal legal problem',	1078	],
['Other legal problems',	360	],
['Job problem',	1431	],
['Financial problem',	1269	],
['School problem',	165	],
['Suicide of friend or family in past five years',	267	],
['Other death of friend or family',	781],
['Other suicide circumstance',	1303	],
['Other undetermined circumstance',	104	 ],
                       
               
               
                ]
            }, {
               
                name: 'Unintentional',
                id: 'Unintentional',
                data: [
                    ['Unknown circumstances',28],

['Hunting',	13	],
['Target shooting',	2	],
['Gun Fired Loading/Unloading',	6	],
['Cleaning gun',	11	],
['Showing gun to others',	8	],
['Playing with gun',	28	],
['Other context of injury',	32	],
['Thought safety was engaged',	1	],
['Thought unloaded magazine disengaged',	8	],
['Thought gun was unloaded-other',	14],
['Unintentionally pulled trigger',	20],
['Gun defect or malfunction',	2	],
['Dropped gun',	4],
['Gun mistaken for toy',	3	],
['Other mechanism of injury',	23], 
            
                ]
            }]
        }
    });
});