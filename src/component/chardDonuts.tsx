import { Card, DonutChart, Title } from '@tremor/react';

const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  const valueFormatter = (number: number | bigint) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

function ChardDonuts() {
    return (
        <Card>
            <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["red", "blue", "indigo", "green", "cyan", "amber"]}
          />
        </Card>
    );
}

export default ChardDonuts;