import { ProposalHeader } from "@/components/ProposalHeader";
import { SolutionCard } from "@/components/SolutionCard";
import { PricingCard } from "@/components/PricingCard";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Users, Calendar, BarChart3, MessageSquare, UserCheck, Settings, TrendingUp, Clock, Target } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <ProposalHeader clientName="[Nome do Cliente]" />
      
      {/* Introdução */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Transforme seu Negócio com Inteligência Artificial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa solução integrada de IA foi especialmente desenvolvida para empresas modernas, oferecendo automação completa do atendimento, qualificação de leads e gestão de clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">-80% no tempo de resposta</h3>
              <p className="text-muted-foreground">Respostas instantâneas que aumentam a satisfação dos clientes.</p>
            </Card>
            
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">24/7 Atendimento</h3>
              <p className="text-muted-foreground">Disponibilidade total para seus clientes, mesmo fora do horário comercial</p>
            </Card>
            
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">100% Personalizado</h3>
              <p className="text-muted-foreground">Treinado especificamente com as informações do seu negócio</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Nossas Soluções de IA
            </h2>
            <p className="text-xl text-muted-foreground">
              Três componentes inteligentes trabalhando para maximizar seus resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard 
              title="Agente de Pré-Atendimento" 
              description="Primeiro contato inteligente que qualifica leads e fornece informações sobre seus produtos e serviços de forma natural e personalizada." 
              icon={<MessageSquare className="w-12 h-12" />} 
              badge="Essencial" 
              features={[
                "Atendimento 24/7",
                "Treinado com todas as informações do seu negócio",
                "Qualificação automática de leads",
                "Respostas personalizadas para cada tipo de produto",
                "Integração com WhatsApp"
              ]} 
            />
            
            <SolutionCard 
              title="Agente de Follow-up" 
              description="Responsável por nutrir leads que não converteram no primeiro contato, mantendo engajamento constante até a conversão." 
              icon={<Users className="w-12 h-12" />} 
              features={[
                "Sequência automatizada de follow-ups",
                "Mensagens personalizadas baseadas no interesse",
                "Controle de frequência e timing",
                "Reativação de leads frios",
                "Relatórios de performance detalhados"
              ]} 
            />
            
            <SolutionCard 
              title="Plataforma CRM Personalizada" 
              description="Dashboard completo para gestão de leads, clientes e métricas, com visual personalizado da sua marca." 
              icon={<BarChart3 className="w-12 h-12" />} 
              badge="Exclusivo" 
              features={[
                "Interface personalizada com cores e logo da empresa",
                "Gestão completa de leads",
                "Cadastro detalhado de clientes atendidos",
                "Dashboard com métricas",
                "Configurações gerais dos agentes",
                "Relatórios de atendimento"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Nossos Clientes */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Nossos Clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Empresas que já confiam na nossa solução de IA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Dog King - Suzano */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/e93c1cfa-c27b-474d-bd45-c34c5f436287.png" alt="Dog King Suzano" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmOWZhZmIiLz48dGV4dCB4PSIxMDAiIHk9IjUwIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2VmNDQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5ET0cgS0lORzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjcwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjZWY0NDQ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPlNVWkFOTzwvdGV4dD48L3N2Zz4=';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Mogi das Cruzes</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            
            {/* Dog King - Mogi das Cruzes */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/2e1230bd-7b88-4193-9b73-cdfc268ed434.png" alt="Dog King Mogi das Cruzes" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmYmJmMjQiLz48dGV4dCB4PSIxMDAiIHk9IjUwIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2VmNDQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5ET0cgS0lORzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjcwIiBmb250LXNpemU9IjEwIiBmaWxsPSIjZWY0NDQ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPk1PR0kgREFTIENSVVpFUzwvdGV4dD48L3N2Zz4=';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Mogi das Cruzes</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            
            {/* Dog King - Itaim Paulista */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/93424b6a-978c-46ae-858b-64af308b0825.png" alt="Dog King Itaim Paulista" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNhODU1ZjciLz48dGV4dCB4PSIxMDAiIHk9IjUwIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5ET0cgS0lORzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjcwIiBmb250LXNpemU9IjEwIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPklUQUlNIFBBVUxJU1RBPC90ZXh0Pjwvc3ZnPg==';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Itaim Paulista</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            
            {/* SITRAN */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/e380b7b8-b493-4f40-badf-559833f701eb.png" alt="SITRAN" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMyNTYzZWIiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5TSVRSQU48L3RleHQ+PHRleHQgeD0iMTAwIiB5PSI2NSIgZm9udC1zaXplPSI4IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPlNJU1RFTUEgRkVUUkFOQ0VTQzwvdGV4dD48L3N2Zz4=';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">SITRAN</h4>
                <p className="text-sm text-muted-foreground">Sindicato de Transporte</p>
              </div>
            </Card>
            
            {/* Gallardo Multimarcas */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/999a987b-7f07-4720-9409-0b029f0e02a5.png" alt="Gallardo Multimarcas" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDAwMDAiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5HQUxMQVJETzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjY1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPm11bHRpbWFyY2FzPC90ZXh0Pjwvc3ZnPg==';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Gallardo Multimarcas</h4>
                <p className="text-sm text-muted-foreground">Concessionária de Veículos</p>
              </div>
            </Card>
            
            {/* Evolve Essence */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/2bd22725-bf29-4340-bc20-21a5433877dc.png" alt="Evolve Essence" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmOTZkMDAiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5FVk9MVkU8L3RleHQ+PHRleHQgeD0iMTAwIiB5PSI2NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5FU1NFTkNFPC90ZXh0Pjwvc3ZnPg==';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Evolve Essence</h4>
                <p className="text-sm text-muted-foreground">Empreendimento</p>
              </div>
            </Card>
            
            {/* Empreendegol */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/ec5bb9f0-04f1-40b8-b93a-d1fd0aaec081.png" alt="Empreendegol" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmYmJmMjQiLz48dGV4dCB4PSIxMDAiIHk9IjQwIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5lbXByZWVuZGVnb2w8L3RleHQ+PHRleHQgeD0iMTAwIiB5PSI2MCIgZm9udC1zaXplPSI4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkZ1dGVib2wgZSBOZXR3b3JraW5nPC90ZXh0Pjwvc3ZnPg==';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Empreendegol</h4>
                <p className="text-sm text-muted-foreground">Futebol & Networking</p>
              </div>
            </Card>
            
            {/* AGEO */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/78503c02-5f11-4c3b-8aa5-ad525814a615.png" alt="AGEO Móveis Design" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDAwMDAiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5BR0VPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iNjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCI+TcOzdmVpcyBEZXNpZ248L3RleHQ+PC9zdmc+';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AGEO Móveis Design</h4>
                <p className="text-sm text-muted-foreground">Design & Móveis Planejados</p>
              </div>
            </Card>
            
            {/* Palácio Sushi House */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/00732c79-f092-4c16-8064-e59be6f77edb.png" alt="Palácio Sushi House" className="max-w-full max-h-full object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNkOTc3MDYiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj5QQUzBQ0lPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iNjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCI+U1VTSEkgSE9VU0U8L3RleHQ+PC9zdmc+';
              }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Palácio Sushi House</h4>
                <p className="text-sm text-muted-foreground">Restaurante & Gastronomia</p>
              </div>
            </Card>
            
            {/* Logo Cliente 1 */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/5ab997ad-a3e5-4317-b961-1fa8f058bad9.png" alt="Cliente Tecnologia" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">JRL Empregos</h4>
                <p className="text-sm text-muted-foreground">Recrutamento e seleção</p>
              </div>
            </Card>
            
            {/* Successful' Man */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/adfa20f3-432e-44f3-b1f6-e3e7c1ee8473.png" alt="Successful' Man" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Successful' Man</h4>
                <p className="text-sm text-muted-foreground">Moda Masculina</p>
              </div>
            </Card>
            
            {/* Entre Outros */}
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="font-playfair text-xl font-semibold text-primary mb-2">Entre Outros...</h4>
                <p className="text-sm text-muted-foreground">Diversos segmentos atendidos</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Investimento
            </h2>
            <p className="text-xl text-muted-foreground">
              Solução completa para transformar seu negócio
            </p>
          </div>
          
          
          <PricingCard
            title="Investimento da Solução"
            monthlyPrice="2.500"
            implementationPrice="4.500"
            popular={true}
            features={[
              "Agente de Pré-Atendimento completo",
              "Agente de Follow-up automatizado",
              "Plataforma CRM personalizada",
              "Integração com WhatsApp",
              "Dashboard com métricas essenciais",
              "Gestão de tráfego pago",
              "Suporte técnico especializado",
              "Treinamento da equipe incluído",
              "Atualizações mensais dos agentes"
            ]}
          />
        </div>
      </section>

      {/* Como Funciona a Implementação */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Como Funciona a Implementação
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e eficiente para colocar sua IA funcionando
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Análise e Mapeamento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Coletamos todas as informações da sua empresa e mapeamos os processos atuais
              </p>
            </Card>
            
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Desenvolvimento Personalizado</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Criamos e treinamos os agentes com as informações específicas da sua empresa
              </p>
            </Card>
            
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Integração e Testes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conectamos tudo ao seu WhatsApp e fazemos testes completos antes da entrega
              </p>
            </Card>
            
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Treinamento e Entrega</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Capacitamos sua equipe e entregamos a solução 100% funcional
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />
    </div>;
};

export default Index;
