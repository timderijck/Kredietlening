import { Card, CardContent } from "@/components/ui/card";


const loanCosts = [
  { amount: "€ 2.500", monthly: "€ 48", interest: "11,9%", duration: "72 maanden", total: "€ 3.454" },
  { amount: "€ 5.000", monthly: "€ 65", interest: "9,9%", duration: "120 maanden", total: "€ 7.757" },
  { amount: "€ 12.500", monthly: "€ 155", interest: "8,7%", duration: "120 maanden", total: "€ 18.495" },
  { amount: "€ 25.000", monthly: "€ 309", interest: "8,7%", duration: "120 maanden", total: "€ 36.990" },
  { amount: "€ 37.500", monthly: "€ 463", interest: "8,7%", duration: "120 maanden", total: "€ 55.485" },
  { amount: "€ 50.000", monthly: "€ 617", interest: "8,7%", duration: "120 maanden", total: "€ 73.979" },
];

export const PersonalLoanCosts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="mb-4">Wat zijn de kosten van een persoonlijke lening?</h2>
        </div>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Kredietbedrag</th>
                    <th className="p-4">Termijnbedrag per maand</th>
                    <th className="p-4">Debetrentevoet (vast)</th>
                    <th className="p-4">Duur kredietovereenkomst</th>
                    <th className="p-4">Totaal door u te betalen bedrag</th>
                  </tr>
                </thead>
                <tbody>
                  {loanCosts.map((cost, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="p-4">{cost.amount}</td>
                      <td className="p-4">{cost.monthly}</td>
                      <td className="p-4">{cost.interest}</td>
                      <td className="p-4">{cost.duration}</td>
                      <td className="p-4">{cost.total}</td>
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
