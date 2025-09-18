import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ThreatSummary(){
  const vectors = [
    { id: 1, title: 'Credential Stuffing', severity: 'High' },
    { id: 2, title: 'Leaked API Keys', severity: 'High' },
    { id: 3, title: 'Phishing', severity: 'Medium' },
    { id: 4, title: 'Insider Threat', severity: 'Medium' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card className="bg-gradient-card border-gradient text-white shadow-elegant">
        <CardHeader>
          <CardTitle className="text-gradient">NHI Distribution</CardTitle>
          <CardDescription className="text-gray-400">Breakdown of identity types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-gradient-button flex items-center justify-center text-black font-semibold">1.3k</div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between bg-gradient-card p-3 rounded-md border-gradient">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded bg-gray-300" />
                  <div>API Keys</div>
                </div>
                <div>40%</div>
              </div>
              <div className="flex items-center justify-between bg-gradient-card p-3 rounded-md border-gradient">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded bg-gray-400" />
                  <div>Service Accounts</div>
                </div>
                <div>30%</div>
              </div>
              <div className="flex items-center justify-between bg-gradient-card p-3 rounded-md border-gradient">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded bg-gray-500" />
                  <div>CI/CD Tokens</div>
                </div>
                <div>20%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-gradient text-white shadow-elegant">
        <CardHeader>
          <CardTitle className="text-gradient">Top Attack Vectors</CardTitle>
          <CardDescription className="text-gray-400">Prioritized risks</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {vectors.map(v => (
              <li key={v.id} className="flex items-center justify-between bg-gradient-button p-3 rounded-md">
                <div>{v.title}</div>
                <Badge className="text-black bg-gray-300">{v.severity}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
