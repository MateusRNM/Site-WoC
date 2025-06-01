import { writable } from "svelte/store";
import alexanderRoux from '$lib/assets/npcsImage/AlexanderRoux.png'
import damianCaelum from '$lib/assets/npcsImage/DamianCaelum.png'
import dandaraMist from '$lib/assets/npcsImage/DandaraMist.png'
import fenrirAres from '$lib/assets/npcsImage/FenrirAres.png'
import mestreCapi from '$lib/assets/npcsImage/MestreCapi.png'
import remusLegere from '$lib/assets/npcsImage/RemusLegere.png'
import elizaCaelum from '$lib/assets/npcsImage/ElizaCaelum.png'
import gladiusBellator from '$lib/assets/npcsImage/GladiusBellator.png'
import royKinaru from '$lib/assets/npcsImage/RoyKinaru.png'
import maliaNisab from '$lib/assets/npcsImage/MaliaNisab.png'
import renusFryr from '$lib/assets/npcsImage/RenusFryr.png'
import gloriosRyu from '$lib/assets/npcsImage/GloriosRyu.png'
import dominicSuna from '$lib/assets/npcsImage/DominicSuna.png'
import darionAres from '$lib/assets/npcsImage/DarionAres.png'
import athanasius from '$lib/assets/npcsImage/Athanasius.png'
import wukky from '$lib/assets/npcsImage/SunWukky.png'
import a6S from '$lib/assets/npcsImage/6S.png'
import elric from '$lib/assets/npcsImage/ElricLunaris.png'

export const tabActive = writable(-1)
export const Tabs = [
    { name: 'Tabelas', href: '/Site-WoC/tabelas' },
    { name: 'Regras', href: '/Site-WoC/regras' },
    { name: 'Classes', href: '/Site-WoC/classes' },
    { name: 'Poderes', href: '/Site-WoC/poderes' },
    { name: 'Origens', href: '/Site-WoC/origens' },
    { name: 'Calculadora de Status', href: '/Site-WoC/calculadoradestatus' },
    { name: 'Mapa-múndi', href: '/Site-WoC/mapa' },
    { name: 'NPCs', href: '/Site-WoC/npcs' },
]

export const quartetoConhecido = [
  { image: athanasius, name: 'Athanasius Meine', desc: 'Athanasius é um agente da Vanguarda extremamente orgulhoso. Ele é aluno do próprio líder da Vanguarda: Alexander Roux.' },
  { image: wukky, name: 'Sun Wukky', desc: 'Wukky é um jovem garoto com características de macaco que atualmente é um membro da Vanguarda. Wukky é um guerreiro com talento nato em utilizar bastão, sempre é solidário e gosta de ajudar seus próximos, o maior fã de frutinhas e seu forte definitivamente não é intelecto' },
  { image: elric, name: 'Elric Lunaris', desc: 'Elric é um agente da Vanguarda que é aluno de Remus Legere, um membro da equipe de elite da Vanguarda. Ele é extremamente bondoso e sempre tenta animar o ambiente por onde passa com seu bom humor.' },
  { image: a6S, name: '6S', desc: '?' },
]

export const NPCs = [
  { image: alexanderRoux, name: 'Alexander Roux', desc: 'O atual líder da Vanguarda da Justiça, também conhecido como o guerreiro mais poderoso vivo. Ele é um líder que sempre se preocupa com seus agentes, e não hesita de se colocar em situações de risco para salvar seus companheiros.' },
  { image: damianCaelum, name: 'Damian Caelum', desc: 'Damian é um dos agentes de elite da Vanguarda da Justiça. Ele quase sempre está de bom humor, sendo um dos agentes mais carismáticos.' },
  { image: dandaraMist, name: 'Dandara Mist', desc: 'Dandara é uma das agentes de elite da Vanguarda da Justiça. Ela é conhecida por ser bem calma e fria em missões, apesar de ser bem diferente fora de missões, se mostrando receptiva nessas situações.' },
  { image: fenrirAres, name: 'Fenrir Ares', desc: 'Fenrir é um dos agentes de elite da Vanguarda da Justiça. Ele sempre é sério, e não fala muito. Ele também é tataraneto do fundador da Vanguarda, Lucian Ares.' },
  { image: remusLegere, name: 'Remus Legere', desc: 'Remus Legere é um dos agentes mais famosos da Vanguarda atualmente e também faz parte da equipe de elite. Ele é muito inteligente e frio na hora de tomar decisões, e por conta disso, ele é atualmente o líder do centro de pesquisas da Vanguarda.' },
  { image: mestreCapi, name: 'Mestre Capi', desc: 'Capi Sarukan (conhecido como Mestre Capi) é um dos ex-agentes de elite da Vanguarda, sendo um dos agentes mais renomados da história da organização. Atualmente ele está aposentado, porém ainda é muito respeitado dentro da organização por conta de suas grandes contribuições durante seu tempo de atividade.' },
  { image: elizaCaelum, name: 'Eliza Caelum', desc: 'Eliza é a irmã mais nova de Damian Caelum. Ela é uma pessoa muito bondosa e é uma excelente agente de suporte, pois seu poder é especializado em cura.' },
  { image: gladiusBellator, name: 'Gladius Bellator', desc: 'Gladius é um agente da Vanguarda que é reconhecido por sua grande habilidade com espadas, além de sempre agir de forma séria.' },
  { image: royKinaru, name: 'Roy Kinaru', desc: 'Roy é um agente da Vanguarda que é especialista em utilizar armas de fogo. Ele fez vários treinamentos de arma de fogo com Remus Legere, o melhor da Vanguarda nisso atualmente.' },
  { image: maliaNisab, name: 'Mália Nisab', desc: 'Mália é uma agente da Vanguarda que se destaca por ser muito inteligente e racional, sendo muito "voada da cabeça" diversas vezes.' },
  { image: renusFryr, name: 'Renus Fryr', desc: 'Renus é um agente da Vanguarda muito bem humorado e divertido que sempre anda por aí com seu bastão.' },
  { image: gloriosRyu, name: 'Glorios Ryu', desc: 'Glorios é um agente da Vanguarda que é muito quieto e recluso. Seu poder faz ele capaz de manifestar e manipular sua energia em formas diferentes.' },
  { image: dominicSuna, name: 'Dominic Suna', desc: 'Dominic é um agente da Vanguarda que entrou na organização recentemente e é visivelmente abalado emocionalmente, pois perdeu seu amigo recentemente em um conflito.' },
  { image: darionAres, name: 'Darion Ares', desc: 'Darion é um guerreiro que age de forma independente e é irmão de Fenrir Ares. Ele é sempre muito sério, e possui alguns conflitos com seu irmão. Apesar de não ser da Vanguarda, ele age em prol do bem do mundo, ou seja, ele colabora com a Vanguarda diretamente.' },
  //{ image: , name: '', desc: '' },
]

export const niveisTable = [
    { nivel: 1, upgrade: 'Criação de Personagem*' },
    { nivel: 2, upgrade: 'Poder de Classe' },
    { nivel: 3, upgrade: 'Poder de Linhagem' },
    { nivel: 4, upgrade: 'Aumento de Atributo' },
    { nivel: 5, upgrade: 'Treinamento de Perícias' },
    { nivel: 6, upgrade: 'Nível de Domínio Mágico *Baixo*' },
    { nivel: 7, upgrade: 'Poder de Classe' },
    { nivel: 8, upgrade: 'Poder de Classe' },
    { nivel: 9, upgrade: 'Versatilidade' },
    { nivel: 10, upgrade: 'Aumento de Atributo' },
    { nivel: 11, upgrade: 'Poder de Classe' },
    { nivel: 12, upgrade: 'Nível de Domínio Mágico *Médio*' },
    { nivel: 13, upgrade: 'Poder de Linhagem' },
    { nivel: 14, upgrade: 'Poder de Classe' },
    { nivel: 15, upgrade: 'Treinamento de Perícias' },
    { nivel: 16, upgrade: 'Aumento de Atributo' },
    { nivel: 17, upgrade: 'Poder de Classe' },
    { nivel: 18, upgrade: 'Nível de Domínio Mágico *Alto*' },
    { nivel: 19, upgrade: 'Aumento de Atributo' },
    { nivel: 20, upgrade: 'Conectar com Entidade, Nível de Domínio Mágico *Marcado* e Poder de Linhagem' },
    { nivel: 21, upgrade: 'Treinamento de Perícias' },
    { nivel: 22, upgrade: 'Versatilidade' },
    { nivel: 23, upgrade: 'Poder de Classe' },
    { nivel: 24, upgrade: 'Aumento de Atributo +2' },
    { nivel: 25, upgrade: 'Poder de Classe, Expansão de Energia e Habilidade Inata Especial' },
    { nivel: 26, upgrade: 'Poder de Linhagem' },
    { nivel: 27, upgrade: 'Poder de Classe' },
    { nivel: 28, upgrade: 'Treinamento de Perícias' },
    { nivel: 29, upgrade: 'Versatilidade' },
    { nivel: 30, upgrade: 'Reconexão com Entidade' },
    { nivel: 31, upgrade: 'Aumento de Atributo +2' },
    { nivel: 32, upgrade: 'Treinamento de Perícias' },
    { nivel: 33, upgrade: 'Poder de Classe' },
    { nivel: 34, upgrade: 'Poder de Linhagem' },
    { nivel: 35, upgrade: 'Aumento de Atributo +2' },
    { nivel: 36, upgrade: 'Dobre todos os seus status (PV, ED, VE) e Nível de Domínio Mágico *Divino*' },
    { nivel: 37, upgrade: 'Poder de Classe' },
    { nivel: 38, upgrade: 'Poder de Classe, Poder de Linhagem' },
    { nivel: 39, upgrade: 'Poder de Classe, Aumento de Atributo +2 e Treinamento de Perícias' },
    { nivel: 40, upgrade: 'Versatilidade, Poder de Classe e "Semi-Entidade"' },
]

export const magiaDamageTable = [
  {
    nivelProficiencia: 'Nenhum',
    DIVINO: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 4
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd4',
        custoPorDado: '3 EDs',
        maxDadosAtaqueUnico: 4
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+3'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd6',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 4
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    }
  },
  {
    nivelProficiencia: 'Baixo',
    DIVINO: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 5
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd4',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 4
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+3'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd6',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 5
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    }
  },
  {
    nivelProficiencia: 'Médio',
    DIVINO: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 6
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd6',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 5
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd6',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 6
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    }
  },
  {
    nivelProficiencia: 'Alto',
    DIVINO: {
      DANO: {
        dadoBase: 'd10',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 7
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 6
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 7
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    }
  },
  {
    nivelProficiencia: 'Marcado',
    DIVINO: {
      DANO: {
        dadoBase: 'd10',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 8
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd8',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 7
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+2'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd10',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 8
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    }
  },
  {
    nivelProficiencia: 'Divino',
    DIVINO: {
      DANO: {
        dadoBase: 'd12',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 8
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd10',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 8
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd12',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 8
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    }
  },
  {
    nivelProficiencia: 'Iluminado',
    DIVINO: {
      DANO: {
        dadoBase: 'd20',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 10
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    GUERREIRO: {
      DANO: {
        dadoBase: 'd12',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 10
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    },
    APRENDIZ: {
      DANO: {
        dadoBase: 'd12',
        custoPorDado: '2 EDs',
        maxDadosAtaqueUnico: 10
      },
      ALCANCE: {
        custoAumentoCategoriaMagia: '+1'
      }
    }
  }
]

export const magiaBuffTable = [
    {
    nivelProficiencia: 'Nenhum',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 3"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +2"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +2m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "3 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 2"
      },
      DEFESA: {
        custoEfeito: "4 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +2"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +2m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "3 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 3"
      },
      DEFESA: {
        custoEfeito: "4 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +2"
      },
      MOVIMENTO: {
        custoEfeito: "3 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +2m"
      }
    }
  },
  {
    nivelProficiencia: 'Baixo',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 4"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +3"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +3m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "3 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 3"
      },
      DEFESA: {
        custoEfeito: "4 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +3"
      },
      MOVIMENTO: {
        custoEfeito: "3 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +2m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "3 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 4"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +3"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +2m"
      }
    }
  },
  {
    nivelProficiencia: 'Médio',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 5"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +4"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +4m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "3 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 4"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +3"
      },
      MOVIMENTO: {
        custoEfeito: "3 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +3m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 5"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +3"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +3m"
      }
    }
  },
  {
    nivelProficiencia: 'Alto',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 6"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +5"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +5m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 5"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +4"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +4m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 6"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +4"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +4m"
      }
    }
  },
  {
    nivelProficiencia: 'Marcado',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 7"
      },
      DEFESA: {
        custoEfeito: "3 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +6"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +6m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 6"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +5"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +5m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 7"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +5"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +5m"
      }
    }
  },
  {
    nivelProficiencia: 'Divino',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 8"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +7"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +7m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 7"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +6"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +6m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 8"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +6"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +6m"
      }
    }
  },
  {
    nivelProficiencia: 'Iluminado',
    DIVINO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 10"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +8"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +8m"
      }
    },
    GUERREIRO: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 8"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +7"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +7m"
      }
    },
    APRENDIZ: {
      BONUS: {
        custoEfeito: "2 EDs para +1 de bônus",
        maximo: "Máximo de bônus: 9"
      },
      DEFESA: {
        custoEfeito: "2 EDs para +1 de Defesa",
        maximo: "Máximo de Bônus: +7"
      },
      MOVIMENTO: {
        custoEfeito: "2 EDs para +1m de deslocamento",
        maximo: "Máximo de deslocamento: +7m"
      }
    }
  }
]