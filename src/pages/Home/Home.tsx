import { useState } from 'react';
import { FileText, Upload, Code, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function Home() {
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleFileUpload = () => {
    alert('Upload de arquivo será implementado em breve!');
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">
            C Code Analyzer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Análise profunda de qualidade e complexidade de código C
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-xl font-semibold text-white">Código Fonte</h2>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleFileUpload}
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      bg-gray-700 hover:bg-gray-600
                      text-white
                      rounded-lg
                      transition-all duration-200
                      hover:scale-105
                      focus:outline-hidden focus:ring-2 focus:ring-emerald-500
                    "
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload</span>
                  </button>
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="
                      flex items-center gap-2
                      px-6 py-2
                      bg-linear-to-r from-emerald-500 to-teal-500
                      hover:from-emerald-600 hover:to-teal-600
                      text-white font-medium
                      rounded-lg
                      transition-all duration-200
                      hover:scale-105
                      disabled:opacity-50 disabled:cursor-not-allowed
                      focus:outline-hidden focus:ring-2 focus:ring-emerald-500
                    "
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Analisando...</span>
                      </>
                    ) : (
                      <>
                        <Code className="w-4 h-4" />
                        <span>Analisar Código</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="
                    w-full h-[500px] 
                    bg-gray-900 
                    text-gray-100 
                    font-mono text-sm 
                    p-4 
                    rounded-lg 
                    border border-gray-700
                    focus:outline-hidden focus:ring-2 focus:ring-emerald-500
                    resize-none
                  "
                  placeholder="Cole ou digite seu código C aqui..."
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-gray-900/90 px-2 py-1 rounded">
                  {code.split('\n').length} linhas
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 min-h-[600px]">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-semibold text-white">Resultados da Análise</h2>
              </div>

              {!showResults ? (
                <div className="flex flex-col items-center justify-center h-[450px] text-center">
                  <div className="bg-gray-700/50 rounded-full p-6 mb-4">
                    <Code className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-lg mb-2">
                    Nenhuma análise realizada
                  </p>
                  <p className="text-gray-500 text-sm">
                    Clique em "Analisar Código" para começar
                  </p>
                </div>
              ) : (
                <div className="space-y-4 h-[450px] overflow-y-auto custom-scrollbar">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-xs text-gray-400">Qualidade</p>
                      <p className="text-2xl font-bold text-emerald-400">B+</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-xs text-gray-400">Complexidade Média</p>
                      <p className="text-2xl font-bold text-white">4.2</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-xs text-gray-400">Funções</p>
                      <p className="text-2xl font-bold text-white">3</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-xs text-gray-400">Issues</p>
                      <p className="text-2xl font-bold text-yellow-400">2</p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      Issues Encontradas
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                        <p className="text-sm text-yellow-400 font-medium">Complexidade Ciclomática Alta</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Função 'complexFunction' tem complexidade 12 (limite: 10)
                        </p>
                      </div>
                      <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-3">
                        <p className="text-sm text-blue-400 font-medium">Número Mágico</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Valor '100' na linha 23 - Considere usar uma constante
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-sm font-semibold text-white mb-3">Funções Detectadas</h3>
                    <div className="space-y-2">
                      {['main', 'calculate', 'processData'].map((func, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded transition-colors">
                          <span className="text-sm font-mono text-gray-300">{func}</span>
                          <div className="flex gap-3">
                            <span className="text-xs text-gray-500">4 linhas</span>
                            <span className="text-xs text-emerald-400">complexidade: 3</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1">Dicas de Análise</h4>
                  <p className="text-xs text-gray-400">
                    O analisador verifica complexidade ciclomática, aninhamento profundo, 
                    números mágicos, funções muito longas e muito mais.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Suporta padrões C89, C99, C11 e C18</p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </main>
  );
}