import {Card, Flex, Metric, ProgressBar, Text} from '@tremor/react'

function CardBase() {
    return (
        <Card className='max-w-xs mx-auto'>
            <Text>
                Ventas
            </Text>
            <Metric>
                $788
            </Metric>
            <Flex >
                <Text>
                    32% of annual target
                </Text>
                <Text>
                    $ 255,000
                </Text>
            </Flex>
            <ProgressBar value={32} className='mt-2'/>
                
        </Card>
    );
}

export default CardBase;