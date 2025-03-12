import React from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Briefcase className="text-blue-500" />
          Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">システムエンジニア</h3>
            <p className="text-gray-600">大手SIer企業</p>
            <p className="mt-4 text-gray-700">
              官公庁向けの顧客にシステムを提供。小規模システムの企画から試験まで一貫して担当。
              プロジェクト全体を通して、要件定義・設計・製造・試験の各フェーズで主導的な役割を果たす。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">システム運用エンジニア</h3>
            <p className="text-gray-600">通信キャリア企業</p>
            <p className="mt-4 text-gray-700">
              通信キャリア事業を主軸とした企業でシステムの運用・保守業務に従事。
              24時間365日稼働するミッションクリティカルなシステムの安定運用に貢献。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}