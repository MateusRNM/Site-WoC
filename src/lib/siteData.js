import { writable } from "svelte/store";

export const tabActive = writable(-1)
export const Tabs = [
    { name: 'Tabelas', href: '/tabelas' },
    { name: 'Regras', href: '/regras' },
    { name: 'Classes', href: '/classes' },
    { name: 'Poderes', href: '/poderes' },
    { name: 'Origens', href: '/origens' },
    { name: 'Calculadora de Status', href: '/calculadoradestatus' },
    { name: 'Mapa-múndi', href: '/mapa' },
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