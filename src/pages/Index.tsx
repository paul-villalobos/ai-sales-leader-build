import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Target, 
  Database, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  Linkedin,
  Mail
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import paulPortrait from "@/assets/paul-portrait.jpg";

const Index = () => {
  useEffect(() => {
    // Add dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        
        <div className="container relative z-10 px-6 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Transformo la gestión comercial con inteligencia artificial y estrategia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Soy Paul Villalobos, líder en ventas B2B y tecnología aplicada a resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("about")}
              className="group"
            >
              Conoce mi historia
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("expertise")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Descubre cómo aplico IA a las ventas
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-accent" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Más de una década liderando el crecimiento comercial en empresas de alto impacto
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                He dedicado mi carrera a transformar la forma en que las empresas abordan las ventas B2B, 
                integrando tecnología e inteligencia artificial para impulsar resultados medibles y sostenibles.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Creo firmemente que la tecnología no reemplaza el talento humano, sino que lo amplifica. 
                Mi misión es ayudar a las organizaciones a alcanzar su máximo potencial comercial mediante 
                estrategias inteligentes y herramientas de vanguardia.
              </p>

              {/* Timeline/Hitos */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">+15% crecimiento anual en ventas B2B</h3>
                        <p className="text-muted-foreground">
                          Lideré la transformación comercial en Laive S.A., implementando estrategias 
                          de optimización y tecnología aplicada.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">+10M soles anuales en ventas Ecommerce</h3>
                        <p className="text-muted-foreground">
                          Desarrollé y escalé canales digitales, integrando CRM y herramientas de 
                          análisis predictivo para maximizar conversiones.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Brain className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Sistemas IA que optimizan ventas y procesos</h3>
                        <p className="text-muted-foreground">
                          Creé soluciones de inteligencia artificial aplicada, desde automatización 
                          de reportes hasta análisis predictivo de oportunidades comerciales.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-fade-in">
              <img 
                src={paulPortrait} 
                alt="Paul Villalobos - Líder en ventas B2B y tecnología"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-background">
        <div className="container px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que hago</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tres pilares fundamentales para transformar tu estrategia comercial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gestión Comercial Estratégica</h3>
                <p className="text-muted-foreground">
                  Optimizo canales B2B, precios y rentabilidad con visión integral. 
                  Diseño estrategias que conectan objetivos de negocio con ejecución comercial efectiva.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Optimización de Procesos</h3>
                <p className="text-muted-foreground">
                  Digitalizo operaciones y flujos comerciales para maximizar eficiencia. 
                  Elimino cuellos de botella y automatizo tareas repetitivas que frenan el crecimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tecnología Aplicada a Ventas</h3>
                <p className="text-muted-foreground">
                  Implemento herramientas de inteligencia artificial para decisiones más inteligentes 
                  y ventas más efectivas. Del CRM al análisis predictivo, tecnología que impulsa resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos" className="py-24 bg-card">
        <div className="container px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformaciones reales que generan resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Laive S.A.</h3>
                <p className="text-muted-foreground mb-4">
                  Integración de CRM y tableros B2B que permitieron visualizar toda la operación 
                  comercial en tiempo real.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <TrendingUp className="w-5 h-5" />
                  <span>+15% crecimiento anual</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Palestra Sistemas</h3>
                <p className="text-muted-foreground mb-4">
                  Desarrollo de ERP y Business Intelligence personalizados para más de 50 empresas, 
                  optimizando procesos y toma de decisiones.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Target className="w-5 h-5" />
                  <span>50+ empresas transformadas</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">VoxCliente</h3>
                <p className="text-muted-foreground mb-4">
                  Plataforma de IA que convierte grabaciones de llamadas en actas automáticas, 
                  liberando tiempo valioso para cerrar más ventas.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Automatización inteligente</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Ver más proyectos
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24 bg-background">
        <div className="container px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen de mí</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Validación de quienes han trabajado conmigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <p className="text-lg italic mb-6 text-foreground">
                  "Paul tiene una visión única para conectar la estrategia comercial con la tecnología. 
                  Su capacidad para traducir necesidades de negocio en soluciones prácticas es excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-accent">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold">José Martínez</p>
                    <p className="text-sm text-muted-foreground">Gerente General, ICO Food Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <p className="text-lg italic mb-6 text-foreground">
                  "Trabajar con Paul transformó nuestra gestión comercial. Los sistemas que implementó 
                  nos dieron visibilidad total y control sobre nuestras operaciones B2B."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-accent">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Directora Comercial, Distribuidora Norte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog/Reels */}
      <section id="blog" className="py-24 bg-card">
        <div className="container px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ideas que conectan estrategia, tecnología y propósito
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reflexiones sobre el futuro de las ventas y la inteligencia artificial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Brain className="w-16 h-16 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  El futuro de las ventas B2B está en la IA aplicada
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Cómo la inteligencia artificial está cambiando el juego en la gestión comercial...
                </p>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Leer en LinkedIn →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Target className="w-16 h-16 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Estrategia antes que tecnología
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  La tecnología amplifica, pero la estrategia define. Aprendizajes de más de 10 años...
                </p>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Leer en LinkedIn →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Zap className="w-16 h-16 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Automatización inteligente en ventas
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Qué automatizar, qué mantener humano, y cómo encontrar el balance perfecto...
                </p>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Leer en LinkedIn →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explorar reflexiones
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Estoy construyendo el futuro de las ventas con IA
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              ¿Hablamos de cómo transformar tu negocio?
            </p>
            
            <Button variant="cta-primary" size="lg" className="text-lg px-12 py-6 h-auto">
              Conversemos
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Paul Villalobos</h3>
              <p className="text-sm text-muted-foreground">
                Líder en ventas B2B y tecnología aplicada. 
                Transformando la gestión comercial con inteligencia artificial.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">
                    Sobre mí
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("expertise")} className="hover:text-accent transition-colors">
                    Expertise
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("casos")} className="hover:text-accent transition-colors">
                    Casos de éxito
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("blog")} className="hover:text-accent transition-colors">
                    Blog
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Conecta</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:contact@paulvillalobos.com"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Paul Villalobos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
