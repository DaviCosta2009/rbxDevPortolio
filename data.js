/* ============================================================
   perfil (ME), categorias (CATS), trabalhos das galerias (W),
   avaliações (REV) e jogos (G).
   ============================================================ */
var ME={nome:'Dcs2020game',user:'@dcs2020game',robloxId:'1102039909',email:'dcs2020gamer@gmail.com',discord:'dcs2020game',
 bio:'Desenvolvedor Roblox Pleno. e fundador da CoreForge Studios. Vencedor da DevRise GameJam, transformo ideias em experiências imersivas com foco principal em modelagem 3D e construção de cenários atmosféricos, além de atuar com sistemas funcionais em Luau, VFX e interfaces.',
 stats:[['5+','anos no Roblox'],['30+','projetos entregues'],['20','clientes atendidos']],
 exp:[['2026','Dev Freelancer · Vencedor da DevRise GameJam · CEO da CoreForge Studios'],['2025','Começo dos estudos em Desenvolvimento de Sistemas'],['2024','Comecei a desenvolver jogos'],['2023','Comecei a estudar Luau']]};
var CATS=[['modelagem','Modelagem','Meshes, itens e modelos prontos para o jogo.'],['script','Script','Sistemas em Luau: lógica, dados, economia e multiplayer.'],['building','Building','Mapas, cenários e ambientes com atmosfera.'],['vfx','VFX','Partículas, shaders visuais e efeitos de impacto.'],['gui','GUI','Interfaces limpas, responsivas e animadas.']];
/* media: troque src por suas imagens/vídeos (type:'video' para vídeo). Sem src = placeholder. */
var W=[
 {c:'modelagem',t:'Pack de Mobiliários Medievais',d:'2026-11',f:1,tags:['Pack','Low-poly'],txt:'Conjunto de 19 mobiliários medievais criados para um jogo RPG feitos totalmente no roblox.',m:[{src:'media/modeling/packMobilia1.png'},{src:'media/modeling/packMobilia2.png'},{src:'media/modeling/packMobilia3.png'}]},
 {c:'modelagem',t:'Pack de Assets Medievais',d:'2026-01',tags:['Meshes','Pack', 'Blender'],txt:'Conjunto de 15 modelos medievais criados no blender para fins de estudo.',m:[{src:'media/modeling/assetsMedievais1.png'},{src:'media/modeling/assetsMedievais2.png'}, {src:'media/modeling/assetsMedievais3.png'}]},
 {c:'modelagem',t:'Pack de Orelhas e Chifres',d:'2026-01',tags:['Meshes','Pack', 'Blender'],txt:'Modelos de orelhas e chifres para personagens medievais em funcionamento com smartBones.',m:[{src:'media/modeling/orelhasChifre1.png'},{src:'media/modeling/orelhasChifre2.png'}, {src:'media/modeling/orelhasVideo1.mp4',type:'video'}]},
 {c:'modelagem',t:'Pack de Orelhas e Chifres',d:'2025-12',tags:['Meshes','Texture', 'Blender'],txt:'Modelo de espada feita para fins de estudos de texturização e modelagem 3D.',m:[{src:'media/modeling/espada1.png'}]},
 {c:'modelagem',t:'Peitoral',d:'2025-10',tags:['Meshes', 'Blender'],txt:'Modelo de peitoral 3D, feito para estudo da ferramenta de sculpting no blender.',m:[{src:'media/modeling/musculos1.png'}]},
 {c:'modelagem',t:'Modelo de Guitarra PRS',d:'2025-07',tags:['Meshes', 'Blender','Texture'],txt:'Modelo de guitarra texturizada e polida feito no blender.',m:[{src:'media/modeling/guitarraBlender1.png'}]},


 {c:'script',t:'Sistema de Fabricagem de itens aleatórios + Rebirth + Inventário',d:'2026-10',f:1,tags:['Luau','DataStore','Remotes','Tween'],txt:'Plots, máquinas, coletor e raridades com salvamento seguro e lógica no servidor.',m:[{src:'media/script/roletagemSimulator3.png'},{src:'media/script/roletagemSimulator1.mp4', type:'video'},{src:'media/script/roletagemSimulator2.mp4', type:'video'}]},
 {c:'script',t:'Sistema de Dialogo com NPC + Loja',d:'2026-04',tags:['Luau','Remotes','Tween'],txt:'Sistema de diálogos com NPCs e uma loja para compra de itens (ainda em desenvolvimento).',m:[{src:'media/script/npcDIalogo1.png'},{src:'media/script/npcDialogoVideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Inventário e Hotbar',d:'2026-02',f:1,tags:['Luau','Remotes','Tween'],txt:'UI de inventário com slots, botões, animações e filtragens de itens.',m:[{src:'media/script/inventario1.png'},{src:'media/script/inventarioVideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Cartaz de Procurado',d:'2026-02',f:1,tags:['Luau','Remotes','Tween'],txt:'Sistema de procurado que sempre atualiza a quantidade de dinheiro e dificuldade para mata-lo conforme os status do player (jogadores que ele matou, tempo jogado, etc...).',m:[{src:'media/script/uiWanted1.png'},{src:'media/script/uiWantedVideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Carro',d:'2026-08',f:1,tags:['Luau','Remotes'],txt:'Sistema de carro realista com funções de setas, marchas e embreagens.',m:[{src:'media/script/carro1.png'},{src:'media/script/carroVideo.mp4',type:'video'}]},

 
 
 {c:'building',t:'Joalheria Medieval',d:'2026-11',f:1,tags:['Iluminação', 'Interior'],txt:'Interior de uma joalheria feita para um jogo medieval.',m:[{src:'media/build/joalheria1.png'},{src:'media/build/joalheria2.png'},{src:'media/build/joalheria3.png'},{src:'media/build/joalheriaVideo.mp4',type:'video'}]},
 {c:'building',t:'Loja Geral Medieval',d:'2026-11',tags:['Iluminação','Interior'],txt:'Interior de uma loja geral feita para um jogo medieval.',m:[{src:'media/build/lojaGeral1.png'},{src:'media/build/lojaGeral2.png'},{src:'media/build/lojaGeral3.png'},{src:'media/build/lojaGeralVideo.mp4',type:'video'}]},
 {c:'building',t:'Casa do Ferreiro',d:'2026-11',tags:['Iluminação','Interior'],txt:'Interior de uma casa de ferreiro feita para um jogo medieval.',m:[{src:'media/build/ferreiro1.png'},{src:'media/build/ferreiro2.png'},{src:'media/build/ferreiro3.png'}]},
 {c:'building',t:'Bar Central',d:'2025-12',tags:['Iluminação','Interior'],txt:'Interior de um bar central feito para um jogo medieval de minha autoria para fins de estudos.',m:[{src:'media/build/interiorBar1.png'},{src:'media/build/interiorBar2.png'},{src:'media/build/interiorBar3.png'}]},
 {c:'building',t:'Estrutura de Reino Medieval',d:'2025-07',tags:['Iluminação','Terrain','Exterior',],txt:'Estrutura Reino Medieval feito para meu jogo RPG que ainda está em desenvolvimento e fase de testes.',m:[{src:'media/build/castelo1.png'},{src:'media/build/castelo2.png'},{src:'media/build/castelo3.png'},{src:'media/build/castelo4.png'}]},
 {c:'building',t:'Exterior de Casas Medievais',d:'2025-08',tags:['Pack','Exterior'],txt:'Exterior de casas medievais feitas para um jogo medieval de minha autoria para fins de estudos.',m:[{src:'media/build/casaMedieval_tipo1.png'},{src:'media/build/casaMedieval_tipo2.png'},{src:'media/build/casaMedieval_tipo3.png'},{src:'media/build/casaMedieval_tipo4.png'}]},
 {c:'building',t:'Casa Abandonada',d:'2025-07',tags:['Iluminação','Terrain', 'Interior', 'Exterior'],txt:'Casa abandonada feita para fins de estudos com iluminação e detalhes realistas, focado numa atmosfera sombria e misteriosa. (Obs: os assets utilizados são de terceiros pois o foco é em outros aspectos do projeto)',m:[{src:'media/build/casaAbandonada1.png'},{src:'media/build/casaAbandonada2.png'},{src:'media/build/casaAbandonada3.png'}]},
 {c:'building',t:'Terrenos e Biomas',d:'2025-08',tags:['Terrain'],txt:'Biomas criados para fins de estudos, no total são 4 biomas criados no mapa deste projeto.',m:[{src:'media/build/florestaBiomas1.png'},{src:'media/build/florestaBiomas2.png'},{src:'media/build/florestaBiomas3.png'},{src:'media/build/florestaBiomas4.png'}]},
 {c:'building',t:'Estacionamento Liminal',d:'2025-10',tags:['Iluminação','Interior'],txt:'Estacionamento liminal com iluminação atmosfera sombria, feita para um jogo de minha autoria chamado: R.E.S.T.O.R.E. Que ainda está em desenvolvimento e fase de testes.',m:[{src:'media/build/estacionamentoLiminal1.png'},{src:'media/build/estacionamentoLiminal2.png'}]},
 {c:'building',t:'Lobby para Jogo de Terror',d:'2026-07',tags:['Iluminação','Terrain'],txt:'Lobby feito para um jogo de terror, com iluminação atmosférica sombria e terreno detalhado.',m:[{src:'media/build/theDriveLobby2.png'},{src:'media/build/theDriveLobby1.png'},{src:'media/build/theDriveLobby3.png'},{src:'media/build/theDriveVideo.mp4',type:'video'}]},
 
 
 {c:'vfx',t:'Visão Mágica',d:'2026-04',f:1,tags:['ParticleEmitter','Beam','Attachments'],txt:'Visão mágica com efeitos de partículas, inspirado na visão mana que aparece no anime: Sōsō no Frieren. Ele aumenta conforme a quantidade de mana do jogador e vibra perto de objetos mágicos.',m:[{src:'media/vfx/mageVision2.png'},{src:'media/vfx/mageVision1.png'},{src:'media/vfx/mageVisionVideo.mp4',type:'video'},{src:'media/vfx/mageVisionVideo2.mp4',type:'video'}]},
 {c:'vfx',t:'Explosão de Som',d:'2026-01',tags:['ParticleEmitter','Attachments'],txt:'Explosão de energia sonora com efeitos sonoros e tremor de câmera.',m:[{src:'media/vfx/guitarraVfx1.png'},{src:'media/vfx/guitarraVfxVideo.mp4',type:'video'}]},
 {c:'vfx',t:'Combate de espada',d:'2026-04',tags:['ParticleEmitter','Attachments','Trail'],txt:'Combate de espada com efeitos de partículas e rastro feito para fins de estudo.',m:[{src:'media/vfx/combateEspada1.png'},{src:'media/vfx/combateEspadaVideo.mp4',type:'video'}]},
 {c:'vfx',t:'Porta abrindo',d:'2026-01',tags:['ParticleEmitter','Attachments'],txt:'Porta abrindo com efeitos de partículas efeitos sonoros e tremor de câmera.',m:[{src:'media/vfx/portaAbrindo1.png'},{src:'media/vfx/portaAbrindoVideo.mp4',type:'video'}]},
 {c:'vfx',t:'Habilidade de Cura',d:'2026-02',tags:['ParticleEmitter','Attachments'],txt:'Habilidade mágica de cura para um jogo de RPG.',m:[{src:'media/vfx/vfxCura1.png'},{src:'media/vfx/vfxCuraVideo1.mp4',type:'video'},{src:'media/vfx/vfxCuraVideo2.mp4',type:'video'}]},

 
 {c:'gui',t:'Menu Medieval',d:'2025-07',f:1,tags:['UI','Tween','Responsivo'],txt:'Um menu feito para meu jogo de RPG DragonFall.',m:[{src:'media/gui/menuRpg1.png'}]},
 {c:'gui',t:'Menu do Jogo R.E.S.T.O.R.E.',d:'2025-07',f:1,tags:['UI','Tween','Responsivo'],txt:'Um menu feito para meu jogo de terror R.E.S.T.O.R.E.',m:[{src:'media/gui/menuRestore1.png'}]},
 {c:'gui',t:'Inventário e Hotbar',d:'2026-02',f:1,tags:['UI','Tween'],txt:'UI de inventário com slots, botões, animações e filtragens de itens.',m:[{src:'media/gui/inventario1.png'}]},
 {c:'gui',t:'Loja de Npc',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'UI de loja para NPCs, com opções de compra de itens.',m:[{src:'media/gui/lojaNpc1.png'},{src:'media/gui/lojaNpc2.png'}]},
 {c:'gui',t:'HUD + UI de Simulator',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'Feito para fins de estudo e experimentação do estilo "simulator" que usam uma textura de studs em suas interfaces.',m:[{src:'media/gui/uiSimulator1.png'},{src:'media/gui/uiSimulator2.png'},{src:'media/gui/uiSimulator3.png'},{src:'media/gui/uiSimulator4.png'},{src:'media/gui/uiSimulator5.png'}]},
 {c:'gui',t:'Cartaz de Procurado',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'Um cartaz de procurado criado para fins de estudo envolvendo tweens e scripts.',m:[{src:'media/gui/wantedUi.png'}]}
];
var REV=[
   ['Muito bom!','10/10','vestigev'],
   ['Um dos melhores devs com quem ja trabalhei.','10/10','@madararibero800'],
   ['Um ótimo desenvolvedor.','8.5/10','@megagame199'],
   ['Uma das melhores construções que já vi.','10/10','davi_darkhd']];
/* ===== fim dos dados ===== */

/* ===== JOGOS: edite aqui =====
 g: 'trabalhei' (jogos em que trabalhei) ou 'meu' (criados por mim)
 platform: 'Roblox', 'Unity'... | status: 'Público', 'Privado' ou 'Acesso limitado'
 url: link do jogo ('' = sem link) | img: capa opcional (ex.: 'media/games/capa.png')
 m: imagens/vídeos complementares, que aparecem no painel depois da capa (img), ex.: [{src:'media/games/a.png'},{src:'media/games/v.mp4',type:'video'}] */
var G=[
 /*{g:'trabalhei',t:'Nome do jogo',platform:'Roblox',status:'Público',url:'',role:'Building e Script',txt:'Descreva aqui como foi a experiência: o que você fez, com quem trabalhou, desafios e resultados.',img:'',m:[]},*/
 {g:'meu',t:'THE POLARITY ENGINE',platform:'Roblox',status:'Acesso limitado',url:'',role:'Criador',txt:'Jogo criado no período de uma semana para uma gameJam, com foco em físicas, manipulação e polaridade dos objetos que o jogador interage, ele conquistou o 7º lugar na DevRise GameJam.',img:'media/games/thePolarity1.png',m:[{src:'media/games/thePolarity2.png'},{src:'media/games/thePolarity3.png'},{src:'media/games/thePolarityVideo.mp4',type:'video'},{src:'media/games/thePolarity4.png'}]},
 {g:'meu',t:'R.E.S.T.O.R.E.',platform:'Roblox',status:'Privado',url:'',role:'Criador',txt:'Jogo em fase de desenvolvimento e testes. Criado para fins de estudo e experimentação. ',img:'',m:[{src:'media/games/restore1.png'},{src:'media/games/restore2.png'},{src:'media/games/restore3.png'},{src:'media/games/restoreVideo1.mp4',type:'video'},{src:'media/games/restoreVideo2.mp4',type:'video'}]},
 {g:'meu',t:'Dragon Fall',platform:'Roblox',status:'Privado',url:'',role:'Criador',txt:'Um jogo de RPG multiplayer em mundo aberto criado por mim e meu amigo (atualmente em transição para o coreForge Studios), com raças, classes e sistema de combate, e muito mais! O jogo ainda está em fase de desenvolvimento e testes.',img:'',m:[{src:'media/build/interiorBar2.png'},{src:'media/games/dragonfallVideo.mp4',type:'video'}, {src:'media/games/dragonfallVideo2.mp4',type:'video'}]}

];


/* ===== PREÇOS: edite aqui =====
 p: [mínimo, máximo, '+']  -> 'R$ 350 a 900+' | [1500,null,'+'] -> 'R$ 1.500+' | [30] -> 'R$ 30'
 old: (opcional) valor antigo no mesmo formato. Quando existe, ele aparece riscado e o
      site calcula e mostra a % de desconto sozinho. Só coloque nos itens que têm desconto.
 exemplo com desconto:  {n:'Médio',d:'...',p:[80,280],old:[100,350]}  */
var PRICES=[
 {t:'Script (Luau)',h:'R$ 25 a 45/hora',tiers:[
  {n:'Simples',d:'Porta, checkpoint, loja simples',p:[30,100]},
  {n:'Médio',d:'Inventário, combate básico, DataStore',p:[100,350]},
  {n:'Grande',d:'Sistema completo, com vários módulos',p:[350,900,'+']}]},
 {t:'GUI',h:'R$ 20 a 40/hora',tiers:[
  {n:'Simples',d:'Uma tela estática',p:[30,80]},
  {n:'Médio',d:'HUD ou menu completo, com animações e script',p:[100,300]},
  {n:'Grande',d:'Conjunto de GUIs integrado ao jogo',p:[300,700]}]},
 {t:'VFX',h:'R$ 20 a 40/hora',tiers:[
  {n:'Simples',d:'Aura, impacto, partículas soltas',p:[15,50]},
  {n:'Médio',d:'Habilidade com script e sons',p:[50,150]},
  {n:'Grande',d:'Pacote de 5 ou mais habilidades',p:[150,400]}]},
 {t:'Modelagem',h:'R$ 20 a 40/hora',tiers:[
  {n:'Simples',d:'Prop avulso',p:[15,60]},
  {n:'Médio',d:'Mesh no Blender, conjunto de props',p:[60,200]},
  {n:'Grande',d:'Personagem ou objeto complexo',p:[200,500]}]},
 {t:'Building / Interiores',h:'R$ 20 a 40/hora',tiers:[
  {n:'Simples',d:'Ambiente pequeno',p:[200,500]},
  {n:'Médio',d:'Ambiente grande',p:[500,1500]},
  {n:'Grande',d:'Mapa completo',p:[1500,null,'+']}]}
];
/* ===== À VENDA: galeria de itens à venda (aparece na aba Preços) =====
 c: categoria ('modelagem' | 'script' | 'vfx' | 'gui' | 'building')
 t: nome | d: descrição | tags: lista | m: imagens/vídeos (o primeiro é a capa), como nos trabalhos
 p: preço no mesmo formato de PRICES (sem p, aparece "Sob consulta") | old: valor antigo (opcional, mostra riscado + % de desconto)
 exemplo:
 {c:'modelagem',t:'Pack de Mobiliários Medievais',d:'19 modelos prontos para o Roblox.',tags:['Pack','Low-poly'],p:[40,80],m:[{src:'media/modeling/packMobilia1.png'},{src:'media/modeling/packMobilia2.png'}]}, */
var STORE=[
   {c:'modelagem',t:'Pack de Assets Medievais',d:'Conjunto de 15 modelos medievais criados no blender para fins de estudo. Atualmente está a venda.',tags:['Meshes','Pack', 'Blender'],p:[40,80],m:[{src:'media/modeling/assetsMedievais1.png'},{src:'media/modeling/assetsMedievais2.png'},{src:'media/modeling/assetsMedievais3.png'}]}
];

/* Aviso de transparência (aparece na aba Preços) */
var NOTA='Sou estudante e estou sempre evoluindo, e isso faz parte do meu trabalho: aprendo rápido e entrego com cuidado. Por isso sou transparente: projetos muito grandes, com prazos apertados ou fora da minha área de domínio podem exigir mais tempo, uma combinação diferente ou a minha indicação de outro caminho. Prefiro combinar tudo antes a prometer o que não consigo cumprir.';

/* ===== NÃO INCLUSO NO VALOR BASE (aba Preços) =====
 cada grupo: {t:'título', i:[['item','explicação'], ...]} */
var EXTRAS=[
 {t:'Modelagem 3D e Building',i:[
  ['Texturização personalizada ou PBR avançada','O padrão usa cores sólidas, materiais nativos do Roblox ou vertex paint. Texturas pintadas à mão (ex.: Substance Painter) são orçadas à parte.'],
  ['Otimização extrema para mobile (LODs / retopologia)','Redução pesada de polígonos, LODs e streaming para rodar em celulares antigos é um trabalho extra.'],
  ['Iluminação e atmosfera avançada','A configuração completa de Future Lighting, neblina, color correction e skybox pode ser cobrada como extra.'],
  ['Arquivos fonte (.blend)','O padrão é entregar o modelo já importado no Roblox Studio. O arquivo editável do Blender tem custo adicional, pois permite modificar ou revender o asset.']]},
 {t:'Scripts (Luau)',i:[
  ['Manutenção pós-entrega e atualizações do Roblox','Correções depois da entrega, por mudanças na API do Roblox ou por alterações de terceiros no código, são cobradas à parte.'],
  ['Integração com sistemas de terceiros','Adaptar um script a um sistema já pronto do cliente (comprado ou feito por outro dev) é orçado separadamente.'],
  ['Sistemas de monetização','Gamepasses e DevProducts exigem configuração, testes das transações de Robux e segurança anti-exploit, com atenção extra.']]},
 {t:'GUI e VFX',i:[
  ['Ícones e artes 2D personalizadas','O layout é feito no Roblox Studio. Ícones, logos e artes desenhadas (Photoshop/Illustrator) devem ser fornecidos pelo cliente ou orçados à parte.'],
  ['Efeitos sonoros (SFX) e músicas','Os sons vêm de bibliotecas gratuitas, ou o cliente fornece os arquivos. A taxa de upload de áudio, quando houver, fica por conta do cliente.'],
  ['Adaptação para console e VR','PC e celular estão incluídos. A navegação para controles de console (Xbox/PlayStation) e VR é um trabalho extra.']]},
 {t:'Regras gerais do projeto',i:[
  ['Mudanças de escopo','Mudar a direção no meio do projeto (ex.: de medieval para futurista) exige um novo orçamento.'],
  ['Publicação e configuração do jogo','Subir o jogo na conta do grupo, configurar permissões, badges e ícones da página do jogo no Roblox é um serviço à parte.'],
  ['Revisões','Cada entrega inclui até 3 revisões simples.']]}
];
var RODAPE='Valores base. Não inclui: arquivos fonte (.blend), rigging/animações, artes/ícones 2D, taxa de upload de assets no Roblox, adaptação para consoles, manutenção pós-entrega e alterações fora do escopo aprovado. Limite de até 3 revisões simples por entrega.';
/* ===== À VENDA: galeria de itens à venda (aparece na aba Preços) =====
 c: categoria ('modelagem' | 'script' | 'vfx' | 'gui' | 'building')
 t: nome | d: descrição | tags: lista | m: imagens/vídeos (o primeiro é a capa), como nos trabalhos
 p: preço no mesmo formato de PRICES (sem p, aparece "Sob consulta") | old: valor antigo (opcional, mostra riscado + % de desconto)
 exemplo:
 {c:'modelagem',t:'Pack de Mobiliários Medievais',d:'19 modelos prontos para o Roblox.',tags:['Pack','Low-poly'],p:[40,80],m:[{src:'media/modeling/packMobilia1.png'},{src:'media/modeling/packMobilia2.png'}]}, */
