/* ============================================================
   perfil (ME), categorias (CATS), trabalhos das galerias (W),
   avaliações (REV) e jogos (G).
   ============================================================ */
var ME={nome:'Dcs2020game',user:'@dcs2020game',robloxId:'1102039909',email:'dcs2020gamer@gmail.com',discord:'dcs2020game',
 bio:'Desenvolvedor Roblox Pleno. e fundador da CoreForge Studios. Vencedor da DevRise GameJam, transformo ideias em experiências imersivas com foco principal em modelagem 3D e construção de cenários atmosféricos, além de atuar com sistemas funcionais em Luau, VFX e interfaces.',
 stats:[['5+','anos no Roblox'],['30+','projetos entregues'],['20','clientes atendidos']],
 exp:[['2026','Dev Freelancer · Vencedor da DevRise GameJam · CEO da CoreForge Studios'],['2025','Começo dos estudos em Desenvolvimento de Sistemas'],['2024','Comecei a desenvolver jogos'],['2023','Comecei a estudar Luau']],
 en:{bio:'Mid-level Roblox developer and founder of CoreForge Studios. DevRise GameJam winner, I turn ideas into immersive experiences, with a main focus on 3D modeling and atmospheric environment building, plus functional systems in Luau, VFX and interfaces.',
  stats:['years on Roblox','projects delivered','clients served'],
  exp:[['2026','Freelance Dev · DevRise GameJam winner · CEO of CoreForge Studios'],['2025','Started studying Systems Development'],['2024','Started developing games'],['2023','Started learning Luau']]}};
var CATS=[['modelagem','Modelagem','Meshes, itens e modelos prontos para o jogo.','Modeling','Meshes, items and game-ready models.'],['script','Script','Sistemas em Luau: lógica, dados, economia e multiplayer.','Script','Systems in Luau: logic, data, economy and multiplayer.'],['building','Building','Mapas, cenários e ambientes com atmosfera.','Building','Maps, scenery and environments with atmosphere.'],['vfx','VFX','Partículas, shaders visuais e efeitos de impacto.','VFX','Particles, visual effects and impact feedback.'],['gui','GUI','Interfaces limpas, responsivas e animadas.','GUI','Clean, responsive and animated interfaces.']];
/* media: troque src por suas imagens/vídeos (type:'video' para vídeo). Sem src = placeholder. */
var W=[
 {c:'modelagem',t:'Pack de Mobiliários Medievais',d:'2026-11',f:1,tags:['Pack','Low-poly'],txt:'Conjunto de 19 mobiliários medievais criados para um jogo RPG feitos totalmente no roblox.',en:{t:'Medieval Furniture Pack',txt:'Set of 19 medieval furniture pieces created for an RPG game, made entirely in Roblox.'},m:[{src:'media/modeling/packMobilia1.png'},{src:'media/modeling/packMobilia2.png'},{src:'media/modeling/packMobilia3.png'}]},
 {c:'modelagem',t:'Pack de Assets Medievais',d:'2026-01',tags:['Meshes','Pack', 'Blender'],txt:'Conjunto de 15 modelos medievais criados no blender para fins de estudo.',en:{t:'Medieval Assets Pack',txt:'Set of 15 medieval models created in Blender for study purposes.'},m:[{src:'media/modeling/assetsMedievais1.png'},{src:'media/modeling/assetsMedievais2.png'}, {src:'media/modeling/assetsMedievais3.png'}]},
 {c:'modelagem',t:'Pack de Orelhas e Chifres',d:'2026-01',tags:['Meshes','Pack', 'Blender'],txt:'Modelos de orelhas e chifres para personagens medievais em funcionamento com smartBones.',en:{t:'Ears and Horns Pack',txt:'Ear and horn models for medieval characters, working with SmartBones.'},m:[{src:'media/modeling/orelhasChifre1.png'},{src:'media/modeling/orelhasChifre2.png'}, {src:'media/modeling/orelhasVideo1.mp4',type:'video'}]},
 {c:'modelagem',t:'Adaga Texturizada',d:'2025-12',tags:['Meshes','Texture', 'Blender'],txt:'Modelo de adaga feita para fins de estudos de texturização e modelagem 3D.',en:{t:'Textured Dagger',txt:'Dagger model made to study texturing and 3D modeling.'},m:[{src:'media/modeling/espada1.png'}]},
 {c:'modelagem',t:'Peitoral',d:'2025-10',tags:['Meshes', 'Blender'],txt:'Modelo de peitoral 3D, feito para estudo da ferramenta de sculpting no blender.',en:{t:'Pectoral',txt:'3D pectoral model, made to study the sculpting tool in Blender.'},m:[{src:'media/modeling/musculos1.png'}]},
 {c:'modelagem',t:'Modelo de Guitarra PRS',d:'2025-07',tags:['Meshes', 'Blender','Texture'],txt:'Modelo de guitarra texturizada e polida feito no blender.',en:{t:'PRS Guitar Model',txt:'Textured and polished guitar model made in Blender.'},m:[{src:'media/modeling/guitarraBlender1.png'}]},


 {c:'script',t:'Sistema de Fabricagem de itens aleatórios + Rebirth + Inventário',d:'2026-10',f:1,tags:['Luau','DataStore','Remotes','Tween'],txt:'Plots, máquinas, coletor e raridades com salvamento seguro e lógica no servidor.',en:{t:'Random Item Crafting + Rebirth + Inventory System',txt:'Plots, machines, collector and rarities with secure saving and server-side logic.'},m:[{src:'media/script/roletagemSimulator3.png'},{src:'media/script/roletagemSimulator1.mp4', type:'video'},{src:'media/script/RoletagemSimulator2.mp4', type:'video'}]},
 {c:'script',t:'Sistema de Dialogo com NPC + Loja',d:'2026-04',tags:['Luau','Remotes','Tween'],txt:'Sistema de diálogos com NPCs e uma loja para compra de itens (ainda em desenvolvimento).',en:{t:'NPC Dialogue + Shop System',txt:'NPC dialogue system and an item shop (still in development).'},m:[{src:'media/script/npcDialogo1.png'},{src:'media/script/npcDialogoVideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Inventário e Hotbar',d:'2026-02',f:1,tags:['Luau','Remotes','Tween'],txt:'UI de inventário com slots, botões, animações e filtragens de itens.',en:{t:'Inventory and Hotbar System',txt:'Inventory UI with slots, buttons, animations and item filtering.'},m:[{src:'media/script/inventario1.png'},{src:'media/script/inventarioVideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Cartaz de Procurado',d:'2026-02',f:1,tags:['Luau','Remotes','Tween'],txt:'Sistema de procurado que sempre atualiza a quantidade de dinheiro e dificuldade para mata-lo conforme os status do player (jogadores que ele matou, tempo jogado, etc...).',en:{t:'Wanted Poster System',txt:'Wanted system that keeps updating the bounty amount and the difficulty of taking the player down according to their stats (players they killed, time played, etc.).'},m:[{src:'media/script/uiWanted1.png'},{src:'media/script/Uiwantedvideo.mp4',type:'video'}]},
 {c:'script',t:'Sistema de Carro',d:'2026-08',f:1,tags:['Luau','Remotes'],txt:'Sistema de carro realista com funções de setas, marchas e embreagens.',en:{t:'Car System',txt:'Realistic car system with turn signals, gears and clutch.'},m:[{src:'media/script/carro1.png'},{src:'media/script/carroVideo.mp4',type:'video'}]},

 
 
 {c:'building',t:'Joalheria Medieval',d:'2026-11',f:1,tags:['Iluminação', 'Interior'],txt:'Interior de uma joalheria feita para um jogo medieval.',en:{t:'Medieval Jewelry Shop',txt:'Interior of a jewelry shop made for a medieval game.'},m:[{src:'media/build/joalheria1.png'},{src:'media/build/joalheria2.png'},{src:'media/build/joalheria3.png'},{src:'media/build/joalheriaVideo.mp4',type:'video'}]},
 {c:'building',t:'Loja Geral Medieval',d:'2026-11',tags:['Iluminação','Interior'],txt:'Interior de uma loja geral feita para um jogo medieval.',en:{t:'Medieval General Store',txt:'Interior of a general store made for a medieval game.'},m:[{src:'media/build/lojaGeral1.png'},{src:'media/build/lojaGeral2.png'},{src:'media/build/lojaGeral3.png'},{src:'media/build/lojaGeralVideo.mp4',type:'video'}]},
 {c:'building',t:'Casa do Ferreiro',d:'2026-11',tags:['Iluminação','Interior'],txt:'Interior de uma casa de ferreiro feita para um jogo medieval.',en:{t:'Blacksmith’s House',txt:'Interior of a blacksmith’s house made for a medieval game.'},m:[{src:'media/build/ferreiro1.png'},{src:'media/build/ferreiro2.png'},{src:'media/build/ferreiro3.png'}]},
 {c:'building',t:'Bar Central',d:'2025-12',tags:['Iluminação','Interior'],txt:'Interior de um bar central feito para um jogo medieval de minha autoria para fins de estudos.',en:{t:'Central Bar',txt:'Interior of a central bar made for a medieval game of my own, for study purposes.'},m:[{src:'media/build/interiorBar1.png'},{src:'media/build/interiorBar2.png'},{src:'media/build/interiorBar3.png'},{src:'media/build/interiorCasaMedieval1.png'}]},
 {c:'building',t:'Estrutura de Reino Medieval',d:'2025-07',tags:['Iluminação','Terrain','Exterior',],txt:'Estrutura Reino Medieval feito para meu jogo RPG que ainda está em desenvolvimento e fase de testes.',en:{t:'Medieval Kingdom Structure',txt:'Medieval kingdom structure made for my RPG game, which is still in development and testing.'},m:[{src:'media/build/castelo1.png'},{src:'media/build/castelo2.png'},{src:'media/build/castelo3.png'},{src:'media/build/castelo4.png'}]},
 {c:'building',t:'Exterior de Casas Medievais',d:'2025-08',tags:['Pack','Exterior'],txt:'Exterior de casas medievais feitas para um jogo medieval de minha autoria para fins de estudos.',en:{t:'Medieval Houses Exterior',txt:'Exterior of medieval houses made for a medieval game of my own, for study purposes.'},m:[{src:'media/build/casaMedieval_tipo1.png'},{src:'media/build/casaMedieval_tipo2.png'},{src:'media/build/casaMedieval_tipo3.png'},{src:'media/build/casaMedieval_tipo4.png'}]},
 {c:'building',t:'Casa Abandonada',d:'2025-07',tags:['Iluminação','Terrain', 'Interior', 'Exterior'],txt:'Casa abandonada feita para fins de estudos com iluminação e detalhes realistas, focado numa atmosfera sombria e misteriosa. (Obs: os assets utilizados são de terceiros pois o foco é em outros aspectos do projeto)',en:{t:'Abandoned House',txt:'Abandoned house made for study purposes, with realistic lighting and details, focused on a dark and mysterious atmosphere. (Note: the assets used are third-party, since the focus is on other aspects of the project)'},m:[{src:'media/build/casaAbandonada1.png'},{src:'media/build/casaAbandonada2.png'},{src:'media/build/casaAbandonada3.png'}]},
 {c:'building',t:'Terrenos e Biomas',d:'2025-08',tags:['Terrain'],txt:'Biomas criados para fins de estudos, no total são 4 biomas criados no mapa deste projeto.',en:{t:'Terrains and Biomes',txt:'Biomes created for study purposes; there are 4 biomes in total on this project’s map.'},m:[{src:'media/build/florestaBiomas1.png'},{src:'media/build/florestaBiomas2.png'},{src:'media/build/florestaBiomas3.png'},{src:'media/build/florestaBiomas4.png'}]},
 {c:'building',t:'Estacionamento Liminal',d:'2025-10',tags:['Iluminação','Interior'],txt:'Estacionamento liminal com iluminação atmosfera sombria, feita para um jogo de minha autoria chamado: R.E.S.T.O.R.E. Que ainda está em desenvolvimento e fase de testes.',en:{t:'Liminal Parking Lot',txt:'Liminal parking lot with dark atmospheric lighting, made for a game of my own called R.E.S.T.O.R.E., which is still in development and testing.'},m:[{src:'media/build/estacionamentoLiminal1.png'},{src:'media/build/estacionamentoLiminal2.png'}]},
 {c:'building',t:'Lobby para Jogo de Terror',d:'2026-07',tags:['Iluminação','Terrain'],txt:'Lobby feito para um jogo de terror, com iluminação atmosférica sombria e terreno detalhado.',en:{t:'Horror Game Lobby',txt:'Lobby made for a horror game, with dark atmospheric lighting and detailed terrain.'},m:[{src:'media/build/theDriveLobby2.png'},{src:'media/build/theDriveLobby1.png'},{src:'media/build/theDriveLobby3.png'},{src:'media/build/theDriveVideo.mp4',type:'video'}]},
 
 
 {c:'vfx',t:'Visão Mágica',d:'2026-04',f:1,tags:['ParticleEmitter','Beam','Attachments'],txt:'Visão mágica com efeitos de partículas, inspirado na visão mana que aparece no anime: Sōsō no Frieren. Ele aumenta conforme a quantidade de mana do jogador e vibra perto de objetos mágicos.',en:{t:'Magic Vision',txt:'Magic vision with particle effects, inspired by the mana vision from the anime Sōsō no Frieren. It grows with the player’s amount of mana and vibrates near magical objects.'},m:[{src:'media/vfx/mageVision2.png'},{src:'media/vfx/mageVision1.png'},{src:'media/vfx/mageVisionVideo.mp4',type:'video'},{src:'media/vfx/mageVisionVideo2.mp4',type:'video'}]},
 {c:'vfx',t:'Explosão de Som',d:'2026-01',tags:['ParticleEmitter','Attachments'],txt:'Explosão de energia sonora com efeitos sonoros e tremor de câmera.',en:{t:'Sound Explosion',txt:'Sonic energy explosion with sound effects and camera shake.'},m:[{src:'media/vfx/guitarraVfx1.png'},{src:'media/vfx/guitarraVfxVideo.mp4',type:'video'}]},
 {c:'vfx',t:'Combate de espada',d:'2026-04',tags:['ParticleEmitter','Attachments','Trail'],txt:'Combate de espada com efeitos de partículas e rastro feito para fins de estudo.',en:{t:'Sword Combat',txt:'Sword combat with particle and trail effects, made for study purposes.'},m:[{src:'media/vfx/combateEspada1.png'},{src:'media/vfx/combateEspadaVideo.mp4',type:'video'}]},
 {c:'vfx',t:'Porta abrindo',d:'2026-01',tags:['ParticleEmitter','Attachments'],txt:'Porta abrindo com efeitos de partículas efeitos sonoros e tremor de câmera.',en:{t:'Opening Door',txt:'Door opening with particle effects, sound effects and camera shake.'},m:[{src:'media/vfx/portaAbrindo1.png'},{src:'media/vfx/Portaabrindovideo.mp4',type:'video'}]},
 {c:'vfx',t:'Habilidade de Cura',d:'2026-02',tags:['ParticleEmitter','Attachments'],txt:'Habilidade mágica de cura para um jogo de RPG.',en:{t:'Healing Ability',txt:'Magic healing ability for an RPG game.'},m:[{src:'media/vfx/vfxCura1.png'},{src:'media/vfx/vfxCuraVideo1.mp4',type:'video'},{src:'media/vfx/vfxCuraVideo2.mp4',type:'video'}]},

 
 {c:'gui',t:'Menu Medieval',d:'2025-07',f:1,tags:['UI','Tween','Responsivo'],txt:'Um menu feito para meu jogo de RPG DragonFall.',en:{t:'Medieval Menu',txt:'A menu made for my RPG game DragonFall.'},m:[{src:'media/gui/menuRpg1.png'}]},
 {c:'gui',t:'Menu do Jogo R.E.S.T.O.R.E.',d:'2025-07',f:1,tags:['UI','Tween','Responsivo'],txt:'Um menu feito para meu jogo de terror R.E.S.T.O.R.E.',en:{t:'R.E.S.T.O.R.E. Game Menu',txt:'A menu made for my horror game R.E.S.T.O.R.E.'},m:[{src:'media/gui/menuRestore1.png'}]},
 {c:'gui',t:'Inventário e Hotbar',d:'2026-02',f:1,tags:['UI','Tween'],txt:'UI de inventário com slots, botões, animações e filtragens de itens.',en:{t:'Inventory and Hotbar',txt:'Inventory UI with slots, buttons, animations and item filtering.'},m:[{src:'media/gui/inventario1.png'}]},
 {c:'gui',t:'Loja de Npc',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'UI de loja para NPCs, com opções de compra de itens.',en:{t:'NPC Shop',txt:'Shop UI for NPCs, with item purchase options.'},m:[{src:'media/gui/lojaNpc1.png'},{src:'media/gui/lojaNpc2.png'}]},
 {c:'gui',t:'HUD + UI de Simulator',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'Feito para fins de estudo e experimentação do estilo "simulator" que usam uma textura de studs em suas interfaces.',en:{t:'Simulator HUD + UI',txt:'Made to study and experiment with the "simulator" style, which uses a studs texture on its interfaces.'},m:[{src:'media/gui/uiSimulator1.png'},{src:'media/gui/uiSimulator2.png'},{src:'media/gui/uiSimulator3.png'},{src:'media/gui/uiSimulator4.png'},{src:'media/gui/uiSimulator5.png'}]},
 {c:'gui',t:'Cartaz de Procurado',d:'2026-08',tags:['Tween','Responsivo','UI'],txt:'Um cartaz de procurado criado para fins de estudo envolvendo tweens e scripts.',en:{t:'Wanted Poster',txt:'A wanted poster created for study purposes involving tweens and scripts.'},m:[{src:'media/gui/wantedUi.png'}]}
];
var REV=[
   ['Muito bom!','10/10','vestigev','Very good!'],
   ['Um dos melhores devs com quem ja trabalhei.','10/10','@madararibero800','One of the best devs I have ever worked with.'],
   ['Um ótimo desenvolvedor.','8.5/10','@megagame199','A great developer.'],
   ['Uma das melhores construções que já vi.','10/10','davi_darkhd','One of the best builds I have ever seen.']];
/* ===== fim dos dados ===== */

/* ===== JOGOS: edite aqui =====
 g: 'trabalhei' (jogos em que trabalhei) ou 'meu' (criados por mim)
 platform: 'Roblox', 'Unity'... | status: 'Público', 'Privado' ou 'Acesso limitado'
 url: link do jogo ('' = sem link) | en:{txt,role} = versão em inglês | img: capa opcional (ex.: 'media/games/capa.png')
 m: imagens/vídeos complementares, que aparecem no painel depois da capa (img), ex.: [{src:'media/games/a.png'},{src:'media/games/v.mp4',type:'video'}] */
var G=[
 /*{g:'trabalhei',t:'Nome do jogo',platform:'Roblox',status:'Público',url:'',role:'Building e Script',txt:'Descreva aqui como foi a experiência: o que você fez, com quem trabalhou, desafios e resultados.',img:'',m:[]},*/
 {g:'meu',t:'THE POLARITY ENGINE',platform:'Roblox',status:'Acesso limitado',url:'',role:'Criador',txt:'Jogo criado no período de uma semana para uma gameJam, com foco em físicas, manipulação e polaridade dos objetos que o jogador interage, ele conquistou o 7º lugar na DevRise GameJam.',img:'media/games/thePolarity1.png',en:{txt:'Game created within a week for a game jam, focused on physics, manipulation and the polarity of the objects the player interacts with. It placed 7th at the DevRise GameJam.',role:'Creator'},m:[{src:'media/games/thePolarity2.png'},{src:'media/games/thePolarity3.png'},{src:'media/games/thePolarityVideo.mp4',type:'video'},{src:'media/games/thePolarity4.png'}]},
 {g:'meu',t:'R.E.S.T.O.R.E.',platform:'Roblox',status:'Privado',url:'',role:'Criador',txt:'Jogo em fase de desenvolvimento e testes. Criado para fins de estudo e experimentação. ',img:'',en:{txt:'Game in development and testing. Created for study and experimentation.',role:'Creator'},m:[{src:'media/games/restore1.png'},{src:'media/games/restore2.png'},{src:'media/games/restore3.png'},{src:'media/games/restoreVideo1.mp4',type:'video'},{src:'media/games/restoreVideo2.mp4',type:'video'}]},
 {g:'meu',t:'Dragon Fall',platform:'Roblox',status:'Privado',url:'',role:'Criador',txt:'Um jogo de RPG multiplayer em mundo aberto criado por mim e meu amigo (atualmente em transição para o coreForge Studios), com raças, classes e sistema de combate, e muito mais! O jogo ainda está em fase de desenvolvimento e testes.',img:'',en:{txt:'A multiplayer open-world RPG created by me and a friend (currently moving to CoreForge Studios), with races, classes, a combat system and much more! The game is still in development and testing.',role:'Creator'},m:[{src:'media/build/interiorBar2.png'},{src:'media/games/dragonFallVideo.mp4',type:'video'}, {src:'media/games/dragonFallVideo2.mp4',type:'video'}]}

];


/* ===== PREÇOS: edite aqui =====
 p: [mínimo, máximo, '+']  -> 'R$ 350 a 900+' | [1500,null,'+'] -> 'R$ 1.500+' | [30] -> 'R$ 30'
 u: mesmo formato, em DÓLAR (aparece quando o site está em inglês). Sem 'u', o site converte o 'p' sozinho pela cotação USD_RATE (script.js).
 old / uold: (opcional) valor antigo em reais / em dólar. Quando existe, aparece riscado e o site calcula a % de desconto sozinho. Só coloque nos itens com desconto.
 exemplo com desconto:  {n:'Médio',d:'...',p:[80,280],u:[15,50],old:[100,350],uold:[19,60]}
 en:{...} = textos em inglês (t, h, d).
 Os valores em dólar (u) foram ajustados à média do mercado de Roblox, não são só a conversão do real. */
var PRICES=[
 {t:'Script (Luau)',h:'R$ 25 a 45/hora',en:{h:'$10–18/hour'},tiers:[
  {n:'Simples',d:'Porta, checkpoint, loja simples',en:{d:'Door, checkpoint, simple shop'},p:[30,100],u:[10,30]},
  {n:'Médio',d:'Inventário, combate básico, DataStore',en:{d:'Inventory, basic combat, DataStore'},p:[100,350],u:[30,90]},
  {n:'Grande',d:'Sistema completo, com vários módulos',en:{d:'Complete system with several modules'},p:[350,900,'+'],u:[100,300,'+']}]},
 {t:'GUI',h:'R$ 20 a 40/hora',en:{h:'$8–15/hour'},tiers:[
  {n:'Simples',d:'Uma tela estática',en:{d:'A single static screen'},p:[30,80],u:[15,40]},
  {n:'Médio',d:'HUD ou menu completo, com animações e script',en:{d:'Full HUD or menu, with animations and scripting'},p:[100,300],u:[50,150]},
  {n:'Grande',d:'Conjunto de GUIs integrado ao jogo',en:{d:'Set of GUIs integrated into the game'},p:[300,700],u:[150,400]}]},
 {t:'VFX',h:'R$ 20 a 40/hora',en:{h:'$8–15/hour'},tiers:[
  {n:'Simples',d:'Aura, impacto, partículas soltas',en:{d:'Aura, impact, standalone particles'},p:[15,50],u:[10,30]},
  {n:'Médio',d:'Habilidade com script e sons',en:{d:'Ability with scripting and sounds'},p:[50,150],u:[30,100]},
  {n:'Grande',d:'Pacote de 5 ou mais habilidades',en:{d:'Pack of 5 or more abilities'},p:[150,400],u:[120,350]}]},
 {t:'Modelagem',h:'R$ 20 a 40/hora',en:{t:'Modeling',h:'$8–15/hour'},tiers:[
  {n:'Simples',d:'Prop avulso',en:{d:'Single prop'},p:[15,60],u:[8,25]},
  {n:'Médio',d:'Mesh no Blender, conjunto de props',en:{d:'Blender mesh, set of props'},p:[60,200],u:[25,80]},
  {n:'Grande',d:'Personagem ou objeto complexo',en:{d:'Character or complex object'},p:[200,500],u:[80,250]}]},
 {t:'Building / Interiores',h:'R$ 20 a 40/hora',en:{t:'Building / Interiors',h:'$8–15/hour'},tiers:[
  {n:'Simples',d:'Ambiente pequeno',en:{d:'Small environment'},p:[200,500],u:[40,120]},
  {n:'Médio',d:'Ambiente grande',en:{d:'Large environment'},p:[500,1500],u:[150,400]},
  {n:'Grande',d:'Mapa completo',en:{d:'Complete map'},p:[1500,null,'+'],u:[450,null,'+']}]}
];

/* ===== À VENDA: galeria de itens à venda (aparece na aba Preços) =====
 c: categoria ('modelagem' | 'script' | 'vfx' | 'gui' | 'building')
 t: nome | d: descrição | tags: lista | m: imagens/vídeos (o primeiro é a capa), como nos trabalhos
 p: preço em reais | u: preço em dólar (opcional; sem u, converte sozinho) | old/uold: valor antigo (opcional, mostra riscado + % de desconto)
 en:{t,d}: nome e descrição em inglês
 exemplo:
 {c:'modelagem',t:'Pack de Mobiliários Medievais',d:'19 modelos prontos para o Roblox.',en:{t:'Medieval Furniture Pack',d:'19 game-ready models for Roblox.'},tags:['Pack','Low-poly'],p:[40,80],u:[10,20],m:[{src:'media/modeling/packMobilia1.png'},{src:'media/modeling/packMobilia2.png'}]}, */
var STORE=[
    {c:'modelagem',t:'Pack de Assets Medievais',d:'2026-01',tags:['Meshes','Pack', 'Blender'],txt:'Conjunto de 15 modelos medievais criados no blender para fins de estudo.',en:{t:'Medieval Assets Pack',txt:'Set of 15 medieval models created in Blender for study purposes.'},p:[80],u:[13],m:[{src:'media/modeling/assetsMedievais1.png'},{src:'media/modeling/assetsMedievais2.png'}, {src:'media/modeling/assetsMedievais3.png'}]}
];

/* Aviso de transparência (aba Preços) */
var NOTA='Sou estudante e estou sempre evoluindo, e isso faz parte do meu trabalho: aprendo rápido e entrego com cuidado. Por isso sou transparente: projetos muito grandes, com prazos apertados ou fora da minha área de domínio podem exigir mais tempo, uma combinação diferente ou a minha indicação de outro caminho. Prefiro combinar tudo antes a prometer o que não consigo cumprir.';
var NOTA_EN='I am a student and always evolving, and that is part of my work: I learn fast and deliver with care. That is why I am transparent: very large projects, tight deadlines or work outside my area of expertise may need more time, a different arrangement or my recommendation of another path. I would rather agree on everything upfront than promise what I cannot deliver.' ;

/* ===== NÃO INCLUSO NO VALOR BASE (aba Preços) =====
 cada grupo: {t:'título', en:{t:'title'}, i:[['item','explicação','item (EN)','explanation (EN)'], ...]} */
var EXTRAS=[
 {t:'Modelagem 3D e Building',en:{t:'Modeling and Building'},i:[
  ['Texturização personalizada ou PBR avançada','O padrão usa cores sólidas, materiais nativos do Roblox ou vertex paint. Texturas pintadas à mão (ex.: Substance Painter) são orçadas à parte.','Custom texturing or advanced PBR','The default uses solid colors, native Roblox materials or vertex paint. Hand-painted textures (e.g., Substance Painter) are quoted separately.'],
  ['Otimização extrema para mobile (LODs / retopologia)','Redução pesada de polígonos, LODs e streaming para rodar em celulares antigos é um trabalho extra.','Extreme mobile optimization (LODs / retopology)','Heavy polygon reduction, LODs and streaming to run on older phones is extra work.'],
  ['Iluminação e atmosfera avançada','A configuração completa de Future Lighting, neblina, color correction e skybox pode ser cobrada como extra.','Advanced lighting and atmosphere','Full setup of Future Lighting, fog, color correction and skybox may be charged as an extra.'],
  ['Arquivos fonte (.blend)','O padrão é entregar o modelo já importado no Roblox Studio. O arquivo editável do Blender tem custo adicional, pois permite modificar ou revender o asset.','Source files (.blend)','The default is to deliver the model already imported into Roblox Studio. The editable Blender file has an additional cost, since it allows modifying or reselling the asset.']]},
 {t:'Scripts (Luau)',en:{t:'Scripts (Luau)'},i:[
  ['Manutenção pós-entrega e atualizações do Roblox','Correções depois da entrega, por mudanças na API do Roblox ou por alterações de terceiros no código, são cobradas à parte.','Post-delivery maintenance and Roblox updates','Fixes after delivery, caused by Roblox API changes or third-party changes to the code, are billed separately.'],
  ['Integração com sistemas de terceiros','Adaptar um script a um sistema já pronto do cliente (comprado ou feito por outro dev) é orçado separadamente.','Third-party system integration','Adapting a script to a system the client already has (bought or made by another dev) is quoted separately.'],
  ['Sistemas de monetização','Gamepasses e DevProducts exigem configuração, testes das transações de Robux e segurança anti-exploit, com atenção extra.','Monetization systems','Gamepasses and DevProducts require setup, testing of Robux transactions and anti-exploit security, with extra attention.']]},
 {t:'GUI e VFX',en:{t:'GUI and VFX'},i:[
  ['Ícones e artes 2D personalizadas','O layout é feito no Roblox Studio. Ícones, logos e artes desenhadas (Photoshop/Illustrator) devem ser fornecidos pelo cliente ou orçados à parte.','Custom 2D icons and artwork','The layout is built in Roblox Studio. Icons, logos and drawn artwork (Photoshop/Illustrator) must be provided by the client or quoted separately.'],
  ['Efeitos sonoros (SFX) e músicas','Os sons vêm de bibliotecas gratuitas, ou o cliente fornece os arquivos. A taxa de upload de áudio, quando houver, fica por conta do cliente.','Sound effects (SFX) and music','Sounds come from free libraries, or the client provides the files. The audio upload fee, when applicable, is paid by the client.'],
  ['Adaptação para console e VR','PC e celular estão incluídos. A navegação para controles de console (Xbox/PlayStation) e VR é um trabalho extra.','Console and VR adaptation','PC and mobile are included. Navigation for console controllers (Xbox/PlayStation) and VR is extra work.']]},
 {t:'Regras gerais do projeto',en:{t:'General project rules'},i:[
  ['Mudanças de escopo','Mudar a direção no meio do projeto (ex.: de medieval para futurista) exige um novo orçamento.','Scope changes','Changing direction mid-project (e.g., from medieval to futuristic) requires a new quote.'],
  ['Publicação e configuração do jogo','Subir o jogo na conta do grupo, configurar permissões, badges e ícones da página do jogo no Roblox é um serviço à parte.','Game publishing and setup','Uploading the game to the group account and setting up permissions, badges and the game page icons on Roblox is a separate service.'],
  ['Revisões','Cada entrega inclui até 3 revisões simples.','Revisions','Each delivery includes up to 3 simple revisions.']]}
];
var RODAPE='Valores base. Não inclui: arquivos fonte (.blend), rigging/animações, artes/ícones 2D, taxa de upload de assets no Roblox, adaptação para consoles, manutenção pós-entrega e alterações fora do escopo aprovado. Limite de até 3 revisões simples por entrega.';
var RODAPE_EN='Base prices. Does not include: source files (.blend), rigging/animations, 2D art/icons, Roblox asset upload fees, console adaptation, post-delivery maintenance and changes outside the approved scope. Limit of up to 3 simple revisions per delivery.';