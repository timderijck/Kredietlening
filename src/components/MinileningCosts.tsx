import { Card, CardContent } from "@/components/ui/card";

const loanCosts = [
    { amount: "€ 100", term: 15, repay: "€ 100,53" },
    { amount: "€ 100", term: 30, repay: "€ 101,08" },
    { amount: "€ 200", term: 15, repay: "€ 201,07" },
    { amount: "€ 200", term: 30, repay: "€ 202,16" },
    { amount: "€ 300", term: 15, repay: "€ 301,61" },
    { amount: "€ 300", term: 30, repay: "€ 303,24" },
    { amount: "€ 400", term: 30, repay: "€ 404,32" },
    { amount: "€ 500", term: 30, repay: "€ 505,41" },
    { amount: "€ 500", term: 45, repay: "€ 508,13" },
    { amount: "€ 600", term: 45, repay: "€ 609,76" },
    { amount: "€ 600", term: 62, repay: "€ 609,61" },
    { amount: "€ 700", term: 45, repay: "€ 711,39" },
    { amount: "€ 800", term: 45, repay: "€ 813,02" },
    { amount: "€ 800", term: 62, repay: "€ 813,02" },
    { amount: "€ 900", term: 45, repay: "€ 913,59" },
    { amount: "€ 1000", term: 45, repay: "€ 1 015,02" },
    { amount: "€ 1000", term: 62, repay: "€ 1 016,43" },
    { amount: "€ 1100", term: 62, repay: "€ 1 118,29" },
    { amount: "€ 1200", term: 62, repay: "€ 1 219,84" },
    { amount: "€ 1300", term: 62, repay: "€ 1 321,70" },
    { amount: "€ 1400", term: 62, repay: "€ 1 423,25" },
    { amount: "€ 1500", term: 62, repay: "€ 1 525,11" },
]

export const MinileningCosts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Wat zijn de kosten van een minilening?</h2>
        </div>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Hoogte van de minilening</th>
                    <th className="p-4">Looptijd in dagen</th>
                    <th className="p-4">Terug te betalen</th>
                  </tr>
                </thead>
                <tbody>
                  {loanCosts.map((cost, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="p-4">{cost.amount}</td>
                      <td className="p-4">{cost.term}</td>
                      <td className="p-4">{cost.repay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
