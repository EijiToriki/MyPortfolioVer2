import React from 'react';
import favicon from '../../resources/favicon.png';
import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <User className="text-blue-500" />
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={favicon}
              alt="Profile image"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">基本情報</h3>
              <p className="text-gray-600">
                北海道出身<br />
                苫小牧工業高等専門学校 電子生産システム工学専攻
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">趣味</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>カラオケ</li>
                <li>筋トレ</li>
                <li>ドラマ鑑賞</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">資格</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>TOEIC 845点</li>
                <li>IPA プロジェクトマネージャ</li>
                <li>IPA ネットワークスペシャリスト</li>
                <li>IPA 応用情報技術者試験</li>
                <li>JDLA E資格</li>
                <li>AWS Certified Cloud Practitioner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}