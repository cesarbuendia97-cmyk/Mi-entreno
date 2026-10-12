// Plan nutricional del coach — dieta por intercambios.
(function(){
const G='10g crema de cacahuete · 10g crema de pistacho o anacardo · 10g frutos secos (tostados o al natural) · 10g chocolate negro 85% · 5g mantequilla · 30g aguacate · 35g aceitunas · 33g nata ligera para cocinar · 6g aceite de oliva virgen extra · 20g queso graso a tu elección · 36g mozzarella · 30g rulo de queso de cabra';
const G_PRE='10g crema de cacahuete · 10g crema de pistacho o anacardo · 10g frutos secos · 10g chocolate negro 85% · 5g mantequilla';
const P_WHEY='10g proteína whey + 200g leche de almendras zero / bebida de soja / avena / leche sin azúcares (en Mercadona hay leche de avena sabor vainilla y chocolate)';
const P_LONCHAS='50g pavo en lonchas · 50g pollo en lonchas · 55g jamón cocido · 120g (4) claras de huevo · 45g atún al natural · 100g queso fresco 0%';
const P_SERRANO='50g jamón serrano · 50g lomo embuchado · 70g salmón fresco · 2 huevos enteros';
const P_MAGRA='100g pollo · 100g pavo · 100g ternera muy magra (picada o filete) · 130g pescado blanco · 130g sepia · 150g chipirón · 150g pulpo · 130g gamba roja';
const P_GRASA='100g ternera picada · 115g salmón · 100g hamburguesa de pollo, pavo o ternera';
const HC60='60g copos de avena (gachas/batido) · 60g harina de avena (bizcocho/tortitas) · 60g cereales integrales · 60g cornflakes · 60g Chocapic · 50g crema de arroz · 50g papilla Nestlé · 85g pan (molde, cristal, pita, integral, centeno, barra o cereales; mejor tostado)';
const HC40='40g copos de avena · 40g harina de avena · 40g cereales integrales · 40g cornflakes · 40g Chocapic · 35g crema de arroz · 35g papilla Nestlé · 55g pan';
const HC_PRIN='196g pan · 140g arroz · 140g arroz integral · 140g pasta · 140g pasta integral · 630g patata · 280g gnocchis · 420g boniato · 168g fajitas · 168g masa de pizza';
const HC_PRE='40g cornflakes · 40g Chocapic · 33g crema de arroz · 33g papilla Nestlé';
const HC_NOPRE='60g copos de avena · 60g harina de avena · 60g cereales integrales · 83g pan';
const VERD='150g de verdura (una de las dos tomas del día que sea de tallo verde: judías verdes, brócoli, acelgas, espinacas, guisantes, lechuga, pimiento verde...)';

window.DIETA={
 objetivo:{fase:'Volumen limpio (objetivo a 3 meses)',kcal:2876,prot:116,grasa:75,hc:433},
 generales:[
  ['Agua','35 ml por kg de peso corporal al día (mejor entre comidas)'],
  ['Pasos','10.000 al día'],
  ['Suplementación','Proteína whey + 5g de creatina monohidrato (da igual cuándo la tomes)'],
  ['Durante el entreno (elige 1)','1 Powerade · 3 Popitos Flash · 40g gominolas · 40g dátiles · 200ml zumo de naranja o manzana. Más 500-750ml de agua'],
 ],
 comidas:[
  {id:'desayuno',name:'Desayuno',icon:'☕',ejemplo:'Tortitas de avena con chocolate (whey choco, leche de avena choco, harina de avena, chocolate 85%) + plátano',
   extra:'Añadir en todas las opciones un plátano (100g)',
   opciones:[
    {n:'Opción 1',p:P_WHEY,h:HC60,g:G},
    {n:'Opción 2',p:P_LONCHAS,h:HC60,g:G,nota:'Indicación del coach en esta opción: «lo mismo de arriba pero x2»'},
    {n:'Opción 3',p:P_SERRANO,h:HC60,g:null,nota:'Sin añadir grasa'}]},
  {id:'almuerzo',name:'Almuerzo',icon:'🥪',ejemplo:'Bocadillo vegetal de pollo (pan + tomate, cebolla y lechuga) con aguacate + fruta',
   extra:'Añadir en todas las opciones 200g de fruta (no plátano, melón, higos, mango ni melocotón). Puedes añadir vegetales si te haces un bocadillo',
   opciones:[
    {n:'Opción 1',p:P_LONCHAS,h:HC60,g:G,nota:'Indicación del coach en esta opción: «lo mismo de abajo pero x2»'},
    {n:'Opción 2',p:P_SERRANO,h:HC60,g:null,nota:'Sin añadir grasa'},
    {n:'Opción 3',p:P_WHEY,h:HC40,g:G}]},
  {id:'comida',name:'Comida',icon:'🍝',ejemplo:'Pasta boloñesa (ternera picada + pasta) + verduritas',
   extra:'Añade '+VERD,
   opciones:[
    {n:'Opción 1',p:P_GRASA,h:HC_PRIN,g:G},
    {n:'Opción 2 · Legumbres',p:'100g legumbres en seco (lentejas, garbanzos, alubias, habas)',h:'La MITAD de: '+HC_PRIN,g:G,nota:'Si eliges legumbres usa la mitad de los hidratos que te corresponden'},
    {n:'Opción 3',p:P_MAGRA,h:HC_PRIN,g:G}]},
  {id:'merienda',name:'Merienda (pre-entreno)',icon:'⚡',ejemplo:'Si entrenas: bol de leche de avena sabor choco, cornflakes, proteína y chocolate negro en trocitos',
   extra:'Hazla aunque no entrenes ese día. Trata de que sea tu comida antes de entrenar; si entrenas por la mañana, intercámbiala con el almuerzo',
   opciones:[
    {n:'Si entrenas',p:P_WHEY,h:HC_PRE,g:G_PRE},
    {n:'Si no entrenas',p:P_LONCHAS,h:HC_NOPRE,g:G,nota:'También puedes tomar esta opción cuando vas a entrenar, sin problema'},
    {n:'Si no entrenas (alternativa)',p:P_SERRANO,h:HC_NOPRE,g:null,nota:'Si eliges esta opción no añadas nada de la columna de grasa'}]},
  {id:'cena',name:'Cena',icon:'🍽️',ejemplo:'Pizza de gambas y setas (masa, gambas, setas, mozzarella) + verduritas + yogur griego light',
   extra:'Añade '+VERD+'. Postre en todas las opciones: 200g de yogur griego light',
   opciones:[
    {n:'Opción 1',p:P_MAGRA,h:HC_PRIN,g:G},
    {n:'Opción 2',p:P_GRASA,h:HC_PRIN,g:G},
    ]}
 ],
 recetas:[
  {id:'tortitas',meal:'desayuno',name:'Tortitas de avena con chocolate',time:'10 min',tag:'Ejemplo del coach',
   ing:['60g harina de avena','10g proteína whey de chocolate','200ml leche de avena sabor chocolate (unos 100ml a la masa y el resto para beber)','10g chocolate negro 85%','1 plátano (100g)'],
   steps:['Mezcla la harina de avena, la whey y unos 100ml de la bebida hasta tener una masa espesa.','Sartén antiadherente a fuego medio: echa porciones y dales la vuelta cuando salgan burbujas (1-2 min por lado).','Funde o ralla el chocolate por encima y acompaña con el plátano en rodajas.']},
  {id:'gachas',meal:'desayuno',name:'Gachas de avena con crema de cacahuete',time:'5 min',
   ing:['60g copos de avena','200ml bebida de avena o soja','10g proteína whey','10g crema de cacahuete','1 plátano (100g)'],
   steps:['Calienta la avena con la bebida 2-3 min (microondas o cazo) removiendo.','Fuera del fuego añade la whey y mezcla bien.','Corona con la crema de cacahuete y el plátano.']},
  {id:'tostada-pavo',meal:'desayuno',name:'Tostadas de pavo y aguacate',time:'5 min',tag:'Si el pan te llena demasiado, usa 50g crema de arroz o 60g cereales',
   ing:['85g pan tostado','50g pavo en lonchas (opción 2)','30g aguacate','1 plátano (100g)'],
   steps:['Tuesta el pan.','Machaca el aguacate con sal y pimienta y úntalo.','Coloca el pavo encima. Plátano de postre.']},
  {id:'tostada-huevos',meal:'desayuno',name:'Tostadas con huevos revueltos',time:'8 min',
   ing:['85g pan tostado','2 huevos enteros (opción 3, sin grasa añadida)','1 plátano (100g)'],
   steps:['Revuelve los huevos en sartén antiadherente sin aceite.','Sírvelos sobre el pan tostado. Plátano de postre.']},
  {id:'bocadillo',meal:'almuerzo',name:'Bocadillo vegetal de pollo con aguacate',time:'5 min',tag:'Ejemplo del coach',
   ing:['85g pan','50g pollo en lonchas','30g aguacate','40g tomate, 20g cebolla y 20g lechuga','200g fruta (p. ej. manzana, pera, fresas, kiwi)'],
   steps:['Abre el pan y unta el aguacate.','Añade el pollo y las verduras.','Fruta de postre.']},
  {id:'batido-alm',meal:'almuerzo',name:'Batido de avena y frutos secos',time:'3 min',
   ing:['10g proteína whey','200ml bebida de avena','40g copos de avena','10g frutos secos','200g fruta (fresas o frutos rojos)'],
   steps:['Bate todo junto (puedes meter la fruta en el batido).']},
  {id:'bolonesa',meal:'comida',name:'Pasta boloñesa',time:'20 min',tag:'Ejemplo del coach',
   ing:['140g pasta (peso en seco)','100g ternera picada','6g aceite de oliva virgen extra','100g tomate triturado, 50g cebolla y 1 diente de ajo','150g verdura (p. ej. brócoli o judías verdes)'],
   steps:['Cuece la pasta.','Sofríe cebolla y ajo con el aceite, añade la ternera y dórala.','Añade tomate triturado, sal, orégano y deja 10 min.','Mezcla con la pasta y acompaña con la verdura.']},
  {id:'arroz-pollo',meal:'comida',name:'Arroz con pollo y brócoli',time:'25 min',
   ing:['140g arroz (en seco)','100g pechuga de pollo','6g aceite de oliva virgen extra','150g brócoli','Especias: pimentón, ajo en polvo, curry'],
   steps:['Cuece el arroz.','Corta el pollo en tacos, salpimienta y dóralo con el aceite y las especias.','Cuece o haz al vapor el brócoli 5 min.','Junta todo en un bol.']},
  {id:'lentejas',meal:'comida',name:'Lentejas estofadas con arroz',time:'35 min',tag:'Opción legumbres: mitad de hidratos',
   ing:['100g lentejas (en seco)','70g arroz (mitad de 140g)','6g aceite de oliva virgen extra','50g zanahoria, 50g pimiento verde, 50g cebolla y 1 diente de ajo','Pimentón y laurel'],
   steps:['Sofríe las verduras picadas con el aceite.','Añade las lentejas, pimentón, laurel y agua para cubrir. Cuece 25-30 min.','Sirve con el arroz cocido aparte.']},
  {id:'patata-merluza',meal:'comida',name:'Merluza con patata y judías verdes',time:'30 min',
   ing:['130g merluza u otro pescado blanco','630g patata (o 420g boniato)','6g aceite de oliva virgen extra','150g judías verdes'],
   steps:['Cuece o asa la patata en dados (airfryer 20 min a 200º).','Plancha la merluza con sal, ajo y perejil.','Judías al vapor. Aliña todo con el aceite en crudo.']},
  {id:'bol-pre',meal:'merienda',name:'Bol pre-entreno de cornflakes con choco',time:'2 min',tag:'Ejemplo del coach (si entrenas)',
   ing:['200ml leche de avena sabor chocolate','10g proteína whey','40g cornflakes','10g chocolate negro 85% en trocitos'],
   steps:['Mezcla la whey con la leche de avena.','Añade los cornflakes y el chocolate troceado.']},
  {id:'merienda-no',meal:'merienda',name:'Sándwich de jamón cocido y queso',time:'5 min',tag:'Si no entrenas',
   ing:['83g pan de molde','55g jamón cocido','20g queso graso (o 36g mozzarella)'],
   steps:['Monta el sándwich y pásalo por la sandwichera o sartén.']},
  {id:'pizza',meal:'cena',name:'Pizza de gambas y setas',time:'20 min',tag:'Ejemplo del coach',
   ing:['168g masa de pizza','130g gamba roja pelada','80g setas','36g mozzarella','50g tomate triturado y orégano','150g verdura de acompañamiento','200g yogur griego light de postre'],
   steps:['Horno a 220º.','Extiende la masa, tomate, setas laminadas, gambas y mozzarella.','Hornea 12-15 min.','Verdura aparte y yogur de postre.']},
  {id:'fajitas',meal:'cena',name:'Fajitas de pollo',time:'15 min',
   ing:['168g tortillas de fajita','100g pollo en tiras','30g aguacate','150g pimiento rojo, verde y cebolla (es la verdura de la comida)','Especias para fajitas','200g yogur griego light de postre'],
   steps:['Saltea el pollo con las especias en sartén antiadherente.','Añade pimientos y cebolla en tiras 5 min.','Rellena las tortillas con aguacate. Yogur de postre.']},
  {id:'salmon',meal:'cena',name:'Salmón con boniato asado',time:'25 min',
   ing:['115g salmón','420g boniato','6g aceite de oliva virgen extra (o grasa a elegir)','150g espárragos o brócoli','200g yogur griego light de postre'],
   steps:['Asa el boniato en dados 20 min a 200º (horno o airfryer).','Salmón a la plancha 3-4 min por lado.','Verdura salteada. Yogur de postre.']},
  {id:'hamburguesa',meal:'cena',name:'Hamburguesa casera',time:'15 min',
   ing:['100g hamburguesa de ternera, pollo o pavo','196g pan de hamburguesa (≈ 2 panes)','20g queso graso o 36g mozzarella','150g lechuga, tomate y cebolla (es la verdura de la comida)','200g yogur griego light de postre'],
   steps:['Haz la hamburguesa a la plancha y funde el queso encima.','Monta con el pan tostado y las verduras. Yogur de postre.']}
 ]
};
})();
