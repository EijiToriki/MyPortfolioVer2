import React from 'react';
import { Github, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">鳥木 瑛司</h2>
        <p className="text-xl md:text-2xl mb-8">システムエンジニア / 情報系</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/EijiToriki" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-200">
            <Github size={24} />
          </a>
          <a href="https://www.lancers.jp/profile/toriki0404?srsltid=AfmBOops8MSZQ2VbuEtuCe3x_hoO_yjUgK4IGQwbYNHwXatfXgve3f5L" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-200">
            <Briefcase size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}