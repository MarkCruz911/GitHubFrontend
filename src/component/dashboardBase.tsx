import { Grid, Tab, TabGroup, TabList,TabPanel, TabPanels, Text, Title } from '@tremor/react';
import React from 'react';
import CardGridMap from './cardGridMap';
import { Card } from '@material-tailwind/react';
import ChardDonuts from './chardDonuts';
import TablaPersonas from './tablaPersonas';

function DashboardBase() {
    return (
        <main className='p-12'>
            <Title>
                Dashboard
            </Title>
            <Text>
                Dashboad donde se veran las Graficas
            </Text>

            <TabGroup>
                <TabList>
                    <Tab>
                        Principal
                    </Tab>
                    <Tab>
                        Detalles
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid>
                            <CardGridMap></CardGridMap>

                        </Grid>
                        <div className='mt-6'>
                            <Card>
                                <div className='h-80'>
                                    <ChardDonuts></ChardDonuts>
                                </div>
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <Card>
                                <div className='h-96'>
                                    <TablaPersonas></TablaPersonas>
                                </div>
                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    );
}

export default DashboardBase;