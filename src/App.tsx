import React, { useState } from 'react';
import { User, Phone, GraduationCap, MapPin, QrCode, Copy, CheckCircle, Shirt } from 'lucide-react';

interface FormData {
  nomeCompleto: string;
  numeroCelular: string;
  nomeCurso: string;
  polo: string;
  tamanhoCamisa: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    numeroCelular: '',
    nomeCurso: '',
    polo: '',
    tamanhoCamisa: '',
  });
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText("a71448a4-d462-4e58-ba86-a35cd8faff4e");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pagamento via PIX</h2>
            <p className="text-gray-600">Escaneie o QR Code ou copie o código PIX abaixo</p>
          </div>

          <div className="flex justify-center mb-6">
            <img 
              src="./src/IMG_20250201_234547925.jpg"
              alt="QR Code PIX"
              className="w-48 h-48 border-2 border-gray-200 rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <button
              onClick={handleCopyPix}
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Código PIX Copiado!' : 'Copiar Código PIX'}
            </button>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Dados da matrícula:</p>
              <p><strong>Nome:</strong> {formData.nomeCompleto}</p>
              <p><strong>Curso:</strong> {formData.nomeCurso}</p>
              <p><strong>Polo:</strong> {formData.polo}</p>
              <p><strong>Tamanho da Camisa:</strong> {formData.tamanhoCamisa}</p>
            </div>

            <button
              onClick={() => setShowPayment(false)}
              className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Voltar ao formulário
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Formulário de Matrícula</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
              <User className="w-4 h-4 mr-2" />
              Nome Completo
            </label>
            <input
              type="text"
              name="nomeCompleto"
              required
              value={formData.nomeCompleto}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
              <Phone className="w-4 h-4 mr-2" />
              Número de Celular
            </label>
            <input
              type="tel"
              name="numeroCelular"
              required
              value={formData.numeroCelular}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Nome do Curso
            </label>
            <input
              type="text"
              name="nomeCurso"
              required
              value={formData.nomeCurso}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Digite o nome do curso"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              Polo
            </label>
            <select
              name="polo"
              required
              value={formData.polo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="" disabled>Selecione o polo de ensino</option>
              <option value="polo1">Campo Grande</option>
              <option value="polo2">Nova Iguaçu</option>
              <option value="polo3">Caxias</option>
              <option value="polo4">Bangu</option>
              <option value="polo5">Vasconcelos</option>
              <option value="polo6">Anil</option>
              <option value="polo7">Freguesia</option>
              <option value="polo8">CDD</option>
              <option value="polo9">Taquara</option>
              <option value="polo10">Madureira</option>
              <option value="polo11">Barra da tijuca</option>
              <option value="polo12">Pechincha</option>
              <option value="polo13">Fluzão</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>

          <div>
            <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
              <Shirt className="w-4 h-4 mr-2" />
              Tamanho da Camisa
            </label>
            <select
              name="tamanhoCamisa"
              required
              value={formData.tamanhoCamisa}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              <option value="">Selecione o tamanho</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
              <option value="XG">XG</option>
              <option value="XXG">XGG</option>
            </select>
          </div>

         

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <QrCode className="w-5 h-5" />
            Ir para Pagamento
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;