
import { useState } from 'react';
import { Search, MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  keywords: string[];
}

const AISearchAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Përshëndetje! Unë jam asistenti juaj virtual i Euro Latifi. Si mund t\'ju ndihmoj të gjeni materialet e duhura për projektin tuaj?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Product database for AI matching
  const products: Product[] = [
    {
      name: "Çimento & Betoni",
      category: "Themel",
      description: "Çimento cilësor nga prodhuesit më të mirë evropianë",
      price: "Nga €8/sak",
      keywords: ["çimento", "beton", "themel", "ndërtim", "cement", "concrete"]
    },
    {
      name: "Hekur & Çelik Armaturi",
      category: "Strukturë",
      description: "Hekur armaturi dhe materiale çeliku me standarde ndërkombëtare",
      price: "Nga €650/ton",
      keywords: ["hekur", "çelik", "armaturi", "strukturë", "steel", "iron", "rebar"]
    },
    {
      name: "Tulla & Blloqe Ndërtimi",
      category: "Mure",
      description: "Tulla dhe blloqe për ndërtim me izolim të shkëlqyer",
      price: "Nga €0.25/copë",
      keywords: ["tulla", "blloqe", "mur", "brick", "block", "wall"]
    },
    {
      name: "Tjegulla & Materiale Çati",
      category: "Çati",
      description: "Tjegulla cilësore dhe sisteme të plota për çati",
      price: "Nga €12/m²",
      keywords: ["tjegulla", "çati", "tiles", "roof", "roofing"]
    },
    {
      name: "Izolime & Hidroizolime",
      category: "Izolim",
      description: "Materiale izoluese për mure, çati dhe themel",
      price: "Nga €15/m²",
      keywords: ["izolim", "hidroizolim", "insulation", "waterproof"]
    },
    {
      name: "Kanalizime & Tubacione",
      category: "Instalime",
      description: "Sisteme të plota kanalizimi dhe furnizimi me ujë",
      price: "Nga €5/metër",
      keywords: ["kanalizim", "tuba", "pipes", "plumbing", "drainage"]
    }
  ];

  const findRelevantProducts = (query: string): Product[] => {
    const searchTerms = query.toLowerCase().split(' ');
    return products.filter(product => 
      searchTerms.some(term => 
        product.keywords.some(keyword => keyword.includes(term)) ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      )
    );
  };

  const generateAIResponse = (userMessage: string): string => {
    const relevantProducts = findRelevantProducts(userMessage);
    
    if (relevantProducts.length === 0) {
      return "Më vjen keq, nuk gjeta produkte që përputhen me kërkimin tuaj. Mund të më tregoni më shumë detaje ose të kontaktoni specialistët tanë për ndihmë?";
    }

    if (relevantProducts.length === 1) {
      const product = relevantProducts[0];
      return `Gjeta produktin e përshtatshëm për ju: **${product.name}** - ${product.description}. Çmimi: ${product.price}. Dëshironi të dini më shumë ose të kërkoni ofertë?`;
    }

    const productList = relevantProducts.slice(0, 3).map(p => `• ${p.name} (${p.price})`).join('\n');
    return `Gjeta disa produkte që mund t'ju interesojnë:\n\n${productList}\n\nCili prej këtyre ju intereson më shumë?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* AI Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Asistenti AI</h3>
                <p className="text-sm text-blue-100">Euro Latifi Helper</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Shkruani kërkimin tuaj..."
                className="flex-1"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AISearchAgent;
